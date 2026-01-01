import React from "react";
import Link from "next/link";
import CurrencySelector from "./CurrencySelector";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const paymentMethods = [
        "Visa",
        "Mastercard",
        "Amex",
        "PayPal",
        "Apple Pay",
        "Google Pay",
    ];

    return (
        <footer id="contact" className="bg-black/40 border-t border-white/10">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <h3 className="font-display text-3xl tracking-ultra mb-6">AURAX</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Premium gothic streetwear for the modern rebel. Dark aesthetics, bold designs.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href="#" className="p-2 text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg>
                            </a>
                            <a href="#" className="p-2 text-gray-500 hover:text-white transition-colors" aria-label="Twitter/X">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </a>
                            <a href="#" className="p-2 text-gray-500 hover:text-white transition-colors" aria-label="TikTok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h4 className="text-sm uppercase tracking-ultra text-white mb-6">Shop</h4>
                        <ul className="space-y-3">
                            <li><Link href="/shop" className="text-gray-500 hover:text-white transition-colors text-sm">All Products</Link></li>
                            <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Hoodies</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">T-Shirts</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Accessories</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Limited Edition</a></li>
                        </ul>
                    </div>

                    {/* Info Column */}
                    <div>
                        <h4 className="text-sm uppercase tracking-ultra text-white mb-6">Info</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-500 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Shipping</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Returns</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Size Guide</a></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-sm uppercase tracking-ultra text-white mb-6">Stay Updated</h4>
                        <p className="text-gray-500 text-sm mb-4">Subscribe for exclusive drops and dark updates.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border border-white/20 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-white text-black px-4 py-3 text-sm uppercase tracking-wide font-medium hover:bg-gray-300 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Country/Region */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <span>Country/Region:</span>
                        <CurrencySelector />
                    </div>

                    {/* Payment Methods */}
                    <div className="flex items-center gap-3">
                        {paymentMethods.map((method) => (
                            <div
                                key={method}
                                className="w-10 h-6 bg-white/10 rounded flex items-center justify-center"
                                title={method}
                            >
                                <span className="text-[8px] text-gray-400 uppercase">{method.slice(0, 4)}</span>
                            </div>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-xs">
                        © {currentYear} Aurax. All rights reserved.
                    </p>
                </div>
            </div>

            {/* Legal Links */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6">
                    <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Privacy Policy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Terms of Service</a>
                    <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Refund Policy</a>
                    <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
