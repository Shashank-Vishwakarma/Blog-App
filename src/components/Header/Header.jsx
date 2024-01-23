import React from "react";

function Header() {
    return(
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="src\assets\logo.png" class="h-8" alt="My Blog Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My Blog</span>
                </a>
                <div class="w-full md:block md:w-auto flex justify-between flex-wrap">
                    <a href="#" class="text-white rounded text-lg">Home</a>
                    <button className="bg-green-100 w-24 px-2 py-2 rounded-lg font-bold mx-3">
                        Sign In
                    </button>
                    <button className="bg-green-100 w-30 px-2 py-2 rounded-lg font-bold">
                        Add Blog +
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;