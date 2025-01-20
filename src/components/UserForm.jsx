import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
const UserForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: { name: "" },
  })

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
    }
  }, [initialData])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "company.name") {
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company, name: value },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ name: "", email: "", company: { name: "" } })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="grid grid-cols-1 gap-6">
        <div className="form-group">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter name"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company.name" className="block text-sm font-semibold text-gray-700 mb-2">
            Department
          </label>
          <input
            type="text"
            id="company.name"
            name="company.name"
            value={formData.company.name}
            onChange={handleChange}
            required
            placeholder="Enter department"
            className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-auto px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          {initialData ? "Update User" : "Add User"}
        </button>
      </div>
    </form>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string
    })
  })
}
UserForm.defaultProps = {
  initialData: null
}

export default UserForm

