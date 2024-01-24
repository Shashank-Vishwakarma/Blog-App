import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from '../../appwrite/Auth/AuthService'

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (email, password) => {
        if(email==='' || password==='') {
            console.log("Any of email and password should not be empty!")
        } else {
            const promise = authService.signIn(email, password);
            promise.then(()=>{
                console.log("login successful...");
                navigate('/home');
            }, ()=>{
                console.log("error logging the user in...");
            });
        }
    }

    return(
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto pt-20">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    id="email" 
                                    name="email" 
                                    type="email" 
                                    placeholder="name@company.com" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    required=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    placeholder="••••••••" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    required=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                />
                            </div>
                            <button 
                                className="w-full bg-green-100 hover:bg-green-300 font-bold rounded-lg px-5 py-2.5 text-center border border-transparent"
                                onClick={()=>signIn(email, password)}
                            >
                                Login
                            </button>
                            <p className="text-center text-sm font-light text-white">
                                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}