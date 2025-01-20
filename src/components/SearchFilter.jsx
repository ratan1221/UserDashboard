import PropTypes from 'prop-types'
const SearchFilter = ({ searchTerm, setSearchTerm, filterDepartment, setFilterDepartment }) => {
  return (
    <div className="mb-4 flex flex-col md:flex-row items-stretch md:items-center gap-4">
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
      <select
        value={filterDepartment}
        onChange={(e) => setFilterDepartment(e.target.value)}
        className="w-full md:w-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">All Departments</option>
        <option value="Romaguera-Crona">Romaguera-Crona</option>
        <option value="Deckow-Crist">Deckow-Crist</option>
        <option value="Romaguera-Jacobson">Romaguera-Jacobson</option>
        {/* Add more department options as needed */}
      </select>
    </div>
  )
};

SearchFilter.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  filterDepartment: PropTypes.string.isRequired,
  setFilterDepartment: PropTypes.func.isRequired
}

SearchFilter.defaultProps = {
  searchTerm: '',
  filterDepartment: ''
}

export default SearchFilter

