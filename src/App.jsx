
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./store"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import UserManagement from "./components/UserManagement"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={
              <>
                <h1 className="text-3xl font-bold mb-4">User Management Dashboard</h1>
                <UserManagement />
              </>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App

