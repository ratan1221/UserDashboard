import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { PAGE_TITLES } from '../constants/titles'

const Home = () => {
    return (
        <>
            <Helmet>
                <title>{PAGE_TITLES.HOME}</title>
            </Helmet>
            <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50">
                <div className="container max-w-2xl mx-auto px-4">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                            Welcome to User Management Dashboard
                        </h1>
                        <Link
                            to="/users"
                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Go to User Management Section
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home