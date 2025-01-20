import PropTypes from 'prop-types'
const UserList = ({ users, onEdit, onDelete, onSort, sortConfig, selectedUsers, onSelectUser }) => {
  const getSortIndicator = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? " ↑" : " ↓"
    }
    return ""
  }

  return (
    <div className="overflow-x-auto -mx-4 md:mx-0">
      <table className="min-w-full bg-white">
        <thead className="hidden md:table-header-group">
          <tr>
            <th className="px-4 py-2">
              <input
                type="checkbox"
                onChange={(e) => (e.target.checked ? onSelectUser(users.map((user) => user.id)) : onSelectUser([]))}
                checked={selectedUsers.length === users.length && users.length > 0}
              />
            </th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => onSort("id")}>
              ID{getSortIndicator("id")}
            </th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => onSort("name")}>
              Name{getSortIndicator("name")}
            </th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => onSort("email")}>
              Email{getSortIndicator("email")}
            </th>
            <th className="px-4 py-2 cursor-pointer" onClick={() => onSort("company.name")}>
              Department{getSortIndicator("company.name")}
            </th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={`user-${user.id}`} className="block md:table-row border-b md:border-none">
              <td className="border px-4 py-2 block md:table-cell">
                <input
                  type="checkbox"
                  onChange={() => onSelectUser(user.id)}
                  checked={selectedUsers.includes(user.id)}
                />
              </td>
              <td className="border px-4 py-2 block md:table-cell">
                <span className="md:hidden font-bold">ID: </span>{user.id}
              </td>
              <td className="border px-4 py-2 block md:table-cell">
                <span className="md:hidden font-bold">Name: </span>{user.name}
              </td>
              <td className="border px-4 py-2 block md:table-cell">
                <span className="md:hidden font-bold">Email: </span>{user.email}
              </td>
              <td className="border px-4 py-2 block md:table-cell">
                <span className="md:hidden font-bold">Department: </span>{user.company.name}
              </td>
              <td className="border px-4 py-2 block md:table-cell">
                <div className="flex justify-start gap-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      company: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  sortConfig: PropTypes.shape({
    key: PropTypes.string,
    direction: PropTypes.oneOf(['ascending', 'descending'])
  }).isRequired,
  selectedUsers: PropTypes.arrayOf(PropTypes.number).isRequired,
  onSelectUser: PropTypes.func.isRequired
}

export default UserList

