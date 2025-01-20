import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const cache = {
  data: null,
  timestamp: null,
  lastUsedId: 0
}

const CACHE_DURATION = 5 * 60 * 1000

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    if (cache.data && cache.timestamp && Date.now() - cache.timestamp < CACHE_DURATION) {
      return {
        users: cache.data,
        lastUsedId: cache.lastUsedId
      }
    }

    const response = await axios.get(API_URL)
    const lastUsedId = Math.max(...response.data.map(user => user.id), 0)

    cache.data = response.data
    cache.timestamp = Date.now()
    cache.lastUsedId = lastUsedId

    return {
      users: response.data,
      lastUsedId
    }
  }
)

export const addUser = createAsyncThunk(
  "users/addUser",
  async (userData, { getState }) => {
    const { users: { lastUsedId } } = getState();
    const newUser = {
      ...userData,
      id: lastUsedId + 1
    };
    const response = await axios.post(API_URL, newUser);

    // Update cache
    cache.lastUsedId = newUser.id;
    cache.data = [...(cache.data || []), response.data];

    return {
      ...response.data,
      id: newUser.id
    };
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (userData) => {
    const response = await axios.put(`${API_URL}/${userData.id}`, userData)
    if (cache.data) {
      cache.data = cache.data.map(user =>
        user.id === userData.id ? response.data : user
      )
    }
    return response.data
  }
)

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await axios.delete(`${API_URL}/${userId}`)
    if (cache.data) {
      cache.data = cache.data.filter(user => user.id !== userId)
    }
    return userId
  }
)

export const bulkDeleteUsers = createAsyncThunk(
  "users/bulkDeleteUsers",
  async (userIds) => {
    await Promise.all(userIds.map((id) => axios.delete(`${API_URL}/${id}`)))
    if (cache.data) {
      cache.data = cache.data.filter(user => !userIds.includes(user.id))
    }
    return userIds
  }
)

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
    lastUsedId: 0
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.users = action.payload.users
        state.lastUsedId = action.payload.lastUsedId
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload)
        state.lastUsedId = action.payload.id
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((user) => user.id === action.payload.id)
        if (index !== -1) {
          state.users[index] = action.payload
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload)
      })
      .addCase(bulkDeleteUsers.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => !action.payload.includes(user.id))
      })
  },
})

export default userSlice.reducer