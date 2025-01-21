import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PAGE_TITLES } from '../constants/titles';

const NotFound = () => (
    <>
        <Helmet>
            <title>{PAGE_TITLES.NOT_FOUND}</title>
        </Helmet>

        <div className="min-h-screen w-screen flex items-center justify-center 
                    bg-gradient-to-br from-blue-50 to-gray-100">
            <div className="container max-w-2xl mx-auto px-4">
                <div className="flex flex-col items-center justify-center text-center p-8 
                        backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl 
                        border border-white/50 hover:shadow-2xl transition-all 
                        duration-300 transform hover:-translate-y-1">

                    {/* Bouncing SVG Icon */}
                    <div className="mb-8 animate-bounce">
                        <svg
                            className="w-24 h-24 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-pulse">
                        404
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8">
                        Oops! Page Not Found
                    </p>

                    {/* Home Link Button */}
                    <Link
                        to="/"
                        className="group inline-flex items-center bg-blue-500 hover:bg-blue-700 
                       text-white font-bold py-3 px-8 rounded-lg text-lg 
                       transition-all duration-200 hover:shadow-lg 
                       transform hover:-translate-y-1"
                    >
                        <svg
                            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 
                         transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    </>
);

export default NotFound;