"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-display text-3xl tracking-ultra text-white hover:text-gray-300 transition-colors">
                    AURAX
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <a href="#shop" className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors uppercase">
                        Shop
                    </a>
                    <a href="#about" className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors uppercase">
                        About
                    </a>
                    <a href="#gallery" className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors uppercase">
                        Gallery
                    </a>
                    <a href="#contact" className="text-sm tracking-wide text-gray-300 hover:text-white transition-colors uppercase">
                        Contact
                    </a>
                </div>

                {/* Right Section - Currency & Icons */}
                <div className="hidden md:flex items-center gap-6">
                    {/* Currency Selector */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span>USD</span>
                        <span className="text-gray-600">$</span>
                    </div>

                    {/* Search Icon */}
                    <button className="p-2 text-gray-300 hover:text-white transition-colors" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </button>

                    {/* User Icon */}
                    <button className="p-2 text-gray-300 hover:text-white transition-colors" aria-label="Account">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>

                    {/* Cart Icon */}
                    <button className="p-2 text-gray-300 hover:text-white transition-colors relative" aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                            <path d="M3 6h18"></path>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-xs flex items-center justify-center rounded-full">
                            0
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {isMenuOpen ? (
                            <>
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </>
                        ) : (
                            <>
                                <path d="M4 12h16"></path>
                                <path d="M4 6h16"></path>
                                <path d="M4 18h16"></path>
                            </>
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black border-t border-white/5">
                    <div className="flex flex-col py-6 px-6 gap-4">
                        <a href="#shop" className="text-lg tracking-wide text-gray-300 hover:text-white transition-colors uppercase py-2">
                            Shop
                        </a>
                        <a href="#about" className="text-lg tracking-wide text-gray-300 hover:text-white transition-colors uppercase py-2">
                            About
                        </a>
                        <a href="#gallery" className="text-lg tracking-wide text-gray-300 hover:text-white transition-colors uppercase py-2">
                            Gallery
                        </a>
                        <a href="#contact" className="text-lg tracking-wide text-gray-300 hover:text-white transition-colors uppercase py-2">
                            Contact
                        </a>
                        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                            <button className="p-2 text-gray-300 hover:text-white transition-colors" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                            </button>
                            <button className="p-2 text-gray-300 hover:text-white transition-colors" aria-label="Account">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </button>
                            <button className="p-2 text-gray-300 hover:text-white transition-colors relative" aria-label="Cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                    <path d="M3 6h18"></path>
                                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                                </svg>
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-white text-black text-xs flex items-center justify-center rounded-full">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
