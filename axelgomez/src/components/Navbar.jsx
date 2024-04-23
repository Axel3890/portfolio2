"use client"
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-black border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-custom-white">Axel Gomez</span>
                </Link>
                <button 
                    onClick={toggleMenu}
                    type="button" 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
                    aria-controls="navbar-default" 
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex md:items-center`} id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-custom-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Inicio</Link>
                        </li>
                        <li>
                            <a href="#experiencias" className="block py-2 px-3 text-custom-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Experiencia</a>
                        </li>
                        <li>
                            <a href="#proyectos" className="block py-2 px-3 text-custom-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Proyectos</a>
                        </li>
                        <li>
                            <a href="#estudios" className="block py-2 px-3 text-custom-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Estudios</a>
                        </li>
                        <li>
                            <a href="#contacto" className="block py-2 px-3 text-custom-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 smoo">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
