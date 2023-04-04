import React from 'react';
import {TbPlayerSkipForward} from "react-icons/tb";
import img from '../img/photo.svg'
const Hero = () => {
    return (
        <div className="container">
            <div  className="flex justify-center items-center">
                <div className="hero pl-10">
                    <h1 className="text-6xl text-violet-500 w-[55%]  text-transparent bg-clip-text bg-gradient-to-tr to-indigo-900 from-purple-900">Virtual Reality Business Solutions</h1>
                    <p className="text-white mt-12 mb-12 opacity-70 w-[60%]">We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
                    <div className="flex md:space-x-5">
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-4 text-center">Join Us
                        </button>
                        <button className="flex items-center justify-center pl-10 text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-8 py-4 text-center">
                            <TbPlayerSkipForward className="pr-1"/> Watch video
                        </button>
                    </div>
                </div>
                <div className="photo">
                    <img src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;