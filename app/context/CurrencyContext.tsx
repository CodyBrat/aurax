"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Currency {
    code: string;
    symbol: string;
    name: string;
    rate: number; // Conversion rate from USD
}

export const currencies: Currency[] = [
    { code: "USD", symbol: "$", name: "United States", rate: 1 },
    { code: "INR", symbol: "₹", name: "India", rate: 83.5 },
    { code: "AUD", symbol: "$", name: "Australia", rate: 1.52 },
    { code: "EUR", symbol: "€", name: "Europe", rate: 0.92 },
    { code: "CAD", symbol: "$", name: "Canada", rate: 1.36 },
    { code: "GBP", symbol: "£", name: "United Kingdom", rate: 0.79 },
    { code: "JPY", symbol: "¥", name: "Japan", rate: 151.5 },
];

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
    formatPrice: (priceInUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
    const [currency, setCurrency] = useState<Currency>(currencies[0]);

    // Persist selection (optional, basic implementation)
    useEffect(() => {
        const saved = localStorage.getItem("aurax_currency");
        if (saved) {
            const found = currencies.find(c => c.code === saved);
            if (found) setCurrency(found);
        }
    }, []);

    const updateCurrency = (c: Currency) => {
        setCurrency(c);
        localStorage.setItem("aurax_currency", c.code);
    };

    const formatPrice = (priceInUSD: number) => {
        const value = priceInUSD * currency.rate;
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency.code,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency: updateCurrency, formatPrice }}>
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
}
