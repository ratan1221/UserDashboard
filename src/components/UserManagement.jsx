import { useEffect, useState, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers, addUser, updateUser, deleteUser, bulkDeleteUsers } from "../store/userSlice"
import UserList from "./UserList"
import UserForm from "./UserForm"
import Pagination from "./Pagination"
import SearchFilter from "./SearchFilter"
import { toast } from "react-toastify"

const UserManagement = () => {
  const dispatch = useDispatch()
  const { users, status, error, lastUsedId } = useSelector((state) => state.users)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(5)
  const [editingUser, setEditingUser] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDepartment, setFilterDepartment] = useState("")
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" })
  const [selectedUsers, setSelectedUsers] = useState([])

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  useEffect(() => {
    if (error) {
      toast.error(`Error: ${error}`)
    }
  }, [error])

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchTermLower = searchTerm.toLowerCase()
      const departmentMatch = filterDepartment === "" || user.company.name === filterDepartment

      const searchMatch =
        user.name.toLowerCase().includes(searchTermLower) ||
        user.email.toLowerCase().includes(searchTermLower) ||
        user.company.name.toLowerCase().includes(searchTermLower)

      return searchMatch && departmentMatch
    })
  }, [users, searchTerm, filterDepartment])

  const sortedUsers = useMemo(() => {
    const sortableUsers = [...filteredUsers]
    if (sortConfig.key !== null) {
      sortableUsers.sort((a, b) => {
        const aValue = sortConfig.key.includes('.') ?
          sortConfig.key.split('.').reduce((obj, key) => obj[key], a) :
          a[sortConfig.key]
        const bValue = sortConfig.key.includes('.') ?
          sortConfig.key.split('.').reduce((obj, key) => obj[key], b) :
          b[sortConfig.key]

        if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1
        if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1
        return 0
      })
    }
    return sortableUsers
  }, [filteredUsers, sortConfig])

  const currentUsers = useMemo(() => {
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    return sortedUsers.slice(indexOfFirstUser, indexOfLastUser)
  }, [sortedUsers, currentPage, usersPerPage])

  const handleAddUser = (userData) => {
    const newUserData = {
      ...userData,
      id: lastUsedId + 1
    }

    dispatch(addUser(newUserData))
      .unwrap()
      .then(() => {
        toast.success("User added successfully")
      })
      .catch((error) => {
        toast.error(`Failed to add user: ${error.message}`)
      })
  }

  const handleUpdateUser = (userData) => {
    dispatch(updateUser(userData))
      .unwrap()
      .then(() => {
        setEditingUser(null)
        toast.success("User updated successfully")
      })
      .catch((error) => {
        toast.error(`Failed to update user: ${error.message}`)
      })
  }

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId))
      .unwrap()
      .then(() => {
        toast.success("User deleted successfully")
      })
      .catch((error) => {
        toast.error(`Failed to delete user: ${error.message}`)
      })
  }

  const handleBulkDelete = () => {
    dispatch(bulkDeleteUsers(selectedUsers))
      .unwrap()
      .then(() => {
        setSelectedUsers([])
        toast.success("Selected users deleted successfully")
      })
      .catch((error) => {
        toast.error(`Failed to delete selected users: ${error.message}`)
      })
  }

  const handleEditUser = (user) => {
    setEditingUser(user)
  }

  const handleSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  const handleSelectUser = (userId) => {
    if (Array.isArray(userId)) {
      setSelectedUsers(userId)
    } else {
      setSelectedUsers((prev) =>
        prev.includes(userId) ?
          prev.filter((id) => id !== userId) :
          [...prev, userId]
      )
    }
  }

  return (
    <div>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterDepartment={filterDepartment}
        setFilterDepartment={setFilterDepartment}
      />
      <UserForm onSubmit={editingUser ? handleUpdateUser : handleAddUser} initialData={editingUser} />
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <>
          {selectedUsers.length > 0 && (
            <button
              onClick={handleBulkDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
              Delete Selected ({selectedUsers.length})
            </button>
          )}
          <UserList
            users={currentUsers}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
            onSort={handleSort}
            sortConfig={sortConfig}
            selectedUsers={selectedUsers}
            onSelectUser={handleSelectUser}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(sortedUsers.length / usersPerPage)}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  )
}

export default UserManagement