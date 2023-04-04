import React from 'react';
import img from '../img/Rectangle 56.svg'
import icon from '../img/Icon.svg'
import {ImTelegram} from "react-icons/im";

const Person = () => {
    return (
        <div className="container">
            <div>
                <div className="flex justify-center items-center flex-col mt-10">
                    <h1 className="text-blue-50 text-5xl">Met Our Team</h1>
                    <p className="w-[45%] text-blue-50 text-center p-10">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed quis
                        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
                    </p>
                </div>
                <div className="flex flex-row-reverse justify-evenly">
                    <div
                        className="max-w-sm pl-10 pr-10 bg-white border border-gray-200 rounded-lg bg-transparent">
                        <div className=" justify-end px-4 pt-4">
                            <div id="dropdown"
                                 className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            </div>
                        </div>
                        <div className="flex flex-col items-center pb-5">
                            <img className="rounded-full "
                                 src={img} alt="Bonnie image"/>
                            <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">Sunny Khan</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Executive officer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <img src={icon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div
                        className=" max-w-sm  pl-10 pr-10 bg-white border border-gray-200 rounded-lg bg-transparent">
                        <div className="flex justify-end px-4 pt-4">
                            <div id="dropdown"
                                 className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            </div>
                        </div>
                        <div className="flex flex-col items-center pb-5">
                            <img className="rounded-full "
                                 src={img} alt="Bonnie image"/>
                            <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">Sunny Khan</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Executive officer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <img src={icon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div
                        className=" max-w-sm  pl-10 pr-10 bg-white border border-gray-200 rounded-lg bg-transparent">
                        <div className="flex justify-end px-4 pt-4">
                            <div id="dropdown"
                                 className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            </div>
                        </div>
                        <div className="flex flex-col items-center pb-5">
                            <img className="rounded-full "
                                 src={img} alt="Bonnie image"/>
                            <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">Sunny Khan</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Executive officer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <img src={icon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div
                        className=" max-w-sm  pl-10 pr-10 bg-white border border-gray-200 rounded-lg bg-transparent">
                        <div className="flex justify-end px-4 pt-4">
                            <div id="dropdown"
                                 className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                            </div>
                        </div>
                        <div className="flex flex-col items-center pb-5">
                            <img className="rounded-full "
                                 src={img} alt="Bonnie image"/>
                            <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">Sunny Khan</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Executive officer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <img src={icon} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl-10 ml-20 mr-20 mt-20 flex justify-center items-center flex-col text-center  bg-transparent">
                <div className="mt-10">
                    <h1 className="text-blue-50 text-4xl">Subscribe to get the Latest News</h1>
                    <h5 className="text-blue-50 text-2xl mt-4">We recommended you to subscribe to our newspaper,drop your email below to get daily update about us</h5>
                </div>
                <div className="w-[50%] mb-20 mt-20">
                    <form>
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                   className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-transparent bg-gray-50 focus:ring-blue-500 dark:text-white"
                                   placeholder="Search Mockups, Logos..." required/>
                            <button type="submit"
                                    className="flex justify-center items-center text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><ImTelegram/>Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Person;