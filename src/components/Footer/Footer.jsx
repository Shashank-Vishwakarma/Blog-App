import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-white w-full dark:bg-gray-800 absolute bottom-0">
            <div className="w-full  p-4">
                <span className="text-sm text-white align-middle">
                    © 2024 <Link to="/home" className="hover:underline">My Blog</Link>. 
                    All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;