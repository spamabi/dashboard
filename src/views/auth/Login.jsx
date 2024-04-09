import React, { useState } from 'react';
import { FaTwitch, FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        // console.log(state)
    }

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={inputHandle}
                                value={state.email}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email address"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>
                            <div className="text-sm">
                                <a href="/login" className="font-semibold text-black hover:text-slate-800">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                onChange={inputHandle}
                                value={state.password}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                autoComplete="password"
                                required
                                className="block w-full rounded-md border-0 py-2 px-3 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-800 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
                        >
                            Log In
                        </button>
                    </div>
                </form>

                <div className='flex items-center mb-3 gap-3 justify-center'>
                    <p className="mt-6 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <a href="/register" className="font-semibold leading-6 text-black hover:text-slate-600">
                            Sign up now
                        </a>
                    </p>
                </div>

                <div className="w-full flex justify-center items-center mb-3">
                    <div className="w-[45%] bg-slate-300 h-[1px]"></div>
                    <div className="w-[10%] flex justify-center items-center">
                        <span className='pb-1'> or </span>
                    </div>
                    <div className='w-[45%] bg-slate-300 h-[1px]'></div>
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div className='w-[90px] h-[50px] flex rounded-md bg-black shadow-lg justify-center cursor-pointer items-center overflow-hidden'>
                        <span><FaTwitch color="white" size="25px" /></span>
                    </div>
                    <div className='w-[90px] h-[50px] flex rounded-md bg-black shadow-lg justify-center cursor-pointer items-center overflow-hidden'>
                        <span><FaGoogle color="white" size="25px" /></span>
                    </div>
                    <div className='w-[90px] h-[50px] flex rounded-md bg-black shadow-lg justify-center cursor-pointer items-center overflow-hidden'>
                        <span><FaFacebook color="white" size="25px" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;