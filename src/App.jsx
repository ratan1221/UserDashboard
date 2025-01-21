
import { Provider } from "react-redux"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./store"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import UserManagement from "./components/UserManagement"
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            <div className="container mx-auto px-4 py-6 max-w-7xl relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
                    <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      User Management Dashboard
                    </h1>
                    <UserManagement />
                  </div>
                } />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ToastContainer />
            </div>
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  )
}

export default App

