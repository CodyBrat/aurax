"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCurrency, currencies } from "../context/CurrencyContext";

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const filteredCurrencies = currencies.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative font-sans" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors uppercase tracking-wide group"
            >
                <span className="border-b border-white group-hover:border-gray-300 pb-0.5 transition-colors">
                    {currency.name} | {currency.code} {currency.symbol}
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 mt-4 w-72 bg-black border border-white p-4 shadow-2xl shadow-black z-50 animate-in fade-in zoom-in-95 duration-200">

                    {/* Search Input */}
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border border-white px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-gray-300 transition-colors"
                            autoFocus
                        />
                    </div>

                    {/* Country List */}
                    <div className="max-h-64 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
                        {filteredCurrencies.length > 0 ? (
                            filteredCurrencies.map((c) => (
                                <button
                                    key={c.code}
                                    onClick={() => {
                                        setCurrency(c);
                                        setIsOpen(false);
                                        setSearchQuery("");
                                    }}
                                    className={`w-full text-left px-2 py-2 text-sm transition-colors hover:text-white ${currency.code === c.code ? "text-white font-medium" : "text-gray-500"
                                        }`}
                                >
                                    {c.name}
                                </button>
                            ))
                        ) : (
                            <div className="text-gray-600 text-sm py-2 text-center">
                                No results found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CurrencySelector;
