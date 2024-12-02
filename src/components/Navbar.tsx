"use client";
import {motion} from "framer-motion";

const buttonVariants = {
    hover : { scale : 1.1 },
    tap : { scale : 0.9 },
}
export default function Navbar(){

    const handleMenu = () => {
        const mobile_slidebar = document.getElementById('mobile_slidebar')!;

        mobile_slidebar.classList.toggle('hidden');
    }


    return (
        <nav className="flex justify-between lg:px-16 lg:py-4 px-4 py-2">
            <div
                className="lg:flex lg:gap-x-6 flex justify-between lg:w-fit w-full items-center border lg:border-gray-200 border-gray-300 rounded-3xl px-4 lg:py-1 py-2">
                <h2 className="font-medium text-gray-600 text-lg hover:text-black">byterushcoding@gmail.com</h2>
                <div className="hidden lg:flex gap-x-6">
                    <button
                        className="bg-[#FFFFFE] rounded-full px-4 py-1 text-md font-semibold hover:border-gray-400 border">
                        Copy
                    </button>
                    <motion.button variants={buttonVariants} whileHover="hover" whileTap="tap"
                        className="bg-[#FFFFFE] rounded-full px-6 py-1 text-md font-semibold hover:border-gray-400 border">
                        CV
                    </motion.button>
                </div>
                <div>
                    <button onClick={handleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                             viewBox="0 0 50 50"
                             className="lg:hidden">
                            <path
                                d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div>
                <ul className="hidden lg:flex space-x-2 font-medium text-lg text-gray-600">
                    <li>
                        <a href="#" className="hover:underline hover:text-black underline-offset-2 decoration-2">
                            LinkedIn
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="#" className="hover:underline hover:text-black underline-offset-2 decoration-2">
                            Dribble
                        </a>
                    </li>
                    <li>/</li>
                    <li>
                        <a href="#" className="hover:underline hover:text-black underline-offset-2 decoration-2">
                            Instagram
                        </a>
                    </li>
                </ul>
            </div>

            <div className='hidden fixed lg:hidden bg-[#F7F7F7] p-2 inset-0 z-10' id='mobile_slidebar'>

                <div id="hero"
                     className="bg-[#F0EFEE] rounded-2xl h-full border border-gray-300 flex flex-col px-4 py-2 overflow-hidden ">
                    <div
                        className="lg:flex lg:gap-x-6 flex justify-between lg:w-fit w-full items-center border lg:border-gray-200 border-gray-300 rounded-3xl px-4 lg:py-1 py-1">
                        <h2 className="font-medium text-gray-600 text-lg hover:text-black">byterushcoding@gmail.com</h2>
                        <div>
                            <button onClick={handleMenu} className='lg:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8'
                                     viewBox="0 0 384 512">
                                    <path
                                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-x-6">
                        <button
                            className="bg-[#FFFFFE] rounded-full px-5 py-2 text-lg font-semibold border border-gray-200 hover:border-gray-400">
                            Copy
                        </button>
                        <button
                            className="bg-[#FFFFFE] rounded-full px-7 py-2 text-lg font-semibold border border-gray-200 hover:border-gray-400">
                            CV
                        </button>
                    </div>
                    <div className='h-[1px] bg-gray-500 my-6'></div>
                    <div>
                        <ul className="flex flex-col font-medium gap-4 text-xl text-gray-600">
                            <li>
                                <a href="#"
                                   className="underline hover:no-underline hover:text-black underline-offset-2 decoration-2">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="underline hover:no-underline hover:text-black underline-offset-2 decoration-2">
                                    Dribble
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="underline hover:no-underline hover:text-black underline-offset-2 decoration-2">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='h-[1px] bg-gray-500 my-6'></div>
                    <h1 className='text-xl font-normal relative'>
                        <span>Tell me about your next </span>
                        project
                    </h1>
                    <div className="flex gap-x-6 my-6">
                        <button
                            className="bg-black text-white rounded-full px-5 py-2 text-sm font-light hover:underline decoration-white decoration-1 underline-offset-2">
                            Email me
                        </button>
                        <button
                            className="bg-[#F7F7F7] border border-gray-300 rounded-full px-5 py-2 text-normal font-light hover:underline decoration-black decoration-1 underline-offset-2">
                            Whatsapp
                        </button>
                    </div>

                </div>

            </div>

        </nav>
    );
}