import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-gray-50">
            <div className="container max-w-2xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-4">
                        404
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">
                        Page Not Found
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound