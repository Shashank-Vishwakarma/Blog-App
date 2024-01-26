import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return(
        <nav className="bg-white border-gray-200 dark:bg-gray-900 flex-1">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to={'/home'}
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="src\assets\logo.png" className="h-8" alt="My Blog Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Blog</span>
                </Link>
                <div className="w-full md:block md:w-auto flex justify-between flex-wrap">
                    <Link to="/home" className="text-white rounded text-lg hover:text-blue-500">Home</Link>
                    <button 
                        className="bg-green-100 w-24 px-2 py-2 rounded-lg font-bold mx-5 hover:bg-green-300"
                        onClick={()=>navigate('/signin')}
                    >
                        Login
                    </button>
                    <button className="bg-green-100 w-30 px-2 py-2 rounded-lg font-bold hover:bg-green-300">
                        Add Blog +
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;