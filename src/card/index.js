import React, {useState} from 'react';
import icon from '../img/checklist 2.svg'
const Card = () => {
    const [see,setSee] = useState(false)
    return (
        <div className="container">
            <div>
                <div className="flex justify-center items-center flex-col mt-10">
                    <h1 className="text-blue-50 text-5xl">Our Service </h1>
                    <p className="w-[45%] text-blue-50 text-center p-10">We turn information into actionable insights We work to understand your issues
                        and are driven to ask better questions in the pursuit of making work.</p>
                </div>
            </div>
            <div className="flex justify-around">

                    <div>
                        <div className="cards max-w-sm p-6 bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center">
                                <img className="bg-fuchsia-900 rounded-r-3xl rounded-l-3xl p-5 text-center"  src={icon} alt=""/>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-10">Noteworthy
                                technology acquisitions 2021</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="#"
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg">
                                Learn more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                <div>

                    <div>
                        <div className="cards max-w-sm p-6 bg-white text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center">
                                <img className="bg-fuchsia-900 rounded-r-3xl rounded-l-3xl p-5 text-center"  src={icon} alt=""/>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-10">Noteworthy
                                technology acquisitions 2021</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <button onClick={() => setSee(!see)}
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-fuchsia-800 rounded-full  rounded-lg">
                                Learn more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>

                    <div>
                        <div className="cards max-w-sm p-6 bg-white text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center">
                                <img className="bg-fuchsia-900 rounded-r-3xl rounded-l-3xl p-5 text-center"  src={icon} alt=""/>
                            </div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-10">Noteworthy
                                technology acquisitions 2021</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                            <a href="#"
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg">
                                Learn more
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: see ? "block" : "none"}} className="cards flex justify-around mt-10 flex-wrap">

                <div className="flex justify-around mt-10 flex-wrap">
                    <div className="max-w-sm p-6 bg-white text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex justify-center">
                            <img className="bg-fuchsia-900 rounded-r-3xl rounded-l-3xl p-5 text-center"  src={icon} alt=""/>
                        </div>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-10">Noteworthy
                            technology acquisitions 2021</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                        <a href="#"
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg">
                            Learn more
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <div>
                            <div className="cards max-w-sm p-6 bg-white text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-center">
                                    <img className="bg-fuchsia-900 rounded-r-3xl rounded-l-3xl p-5 text-center"  src={icon} alt=""/>
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-10">Noteworthy
                                    technology acquisitions 2021</h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                                <a href="#"
                                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg">
                                    Learn more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div>
                            <div className="cards max-w-sm p-6 bg-white text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-center">
                                    <img className="bg-fuchsia-900 rounded-r-3xl rounded-l-3xl p-5 text-center"  src={icon} alt=""/>
                                </div>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-10">Noteworthy
                                    technology acquisitions 2021</h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.</p>
                                <a href="#"
                                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg">
                                    Learn more
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;