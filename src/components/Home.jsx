import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">Welcome to User Management Dashboard</h1>
            <Link
                to="/users"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg text-base md:text-lg transition-colors w-full md:w-auto text-center"
            >
                Go to User Management Section
            </Link>
        </div>
    )
}
export default Home