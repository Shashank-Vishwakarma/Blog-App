import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../appwrite/Auth/AuthService";

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const createAccount = (email, password, confirmPassword) => {
        if(email==='' || password==='' || confirmPassword==='') {
            console.log("Any of email, password and confirm password should not be empty!")
        } else if(password !== confirmPassword) {
            console.log("Password and Confirm password do not match !");
        } else {
            const promise = authService.createUser(email, password);
            promise.then(()=>{
                console.log("account created...");
                navigate('/home');
            }, ()=>{
                console.log("error in creating a new account...");
            });
        }
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create a new account
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
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                <input 
                                    id="confirm password" 
                                    name="confirm password" 
                                    type="password" 
                                    placeholder="••••••••" 
                                    value={confirmPassword}
                                    onChange={(e)=>setConfirmPassword(e.target.value)}
                                    required=""
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                />
                            </div>
                            <button 
                                className="w-full bg-green-100 hover:bg-green-300 font-bold rounded-lg px-5 py-2.5 text-center border border-transparent"
                                onClick={()=>createAccount(email, password, confirmPassword)}
                            >
                                Create an account
                            </button>
                            <p className="text-sm font-light text-white text-center">
                                Already have an account? <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp;