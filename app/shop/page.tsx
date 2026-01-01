import React from "react";
import ProductCard from "../components/ProductCard";

// Expanded product data for the shop page
const products = [
    {
        name: "Oversized Gothic Hoodie | Limited",
        price: "$89.99 USD",
        image: "/hoodie.png",
        badge: "Limited",
    },
    {
        name: "Washed Black Tee | Essential",
        price: "$49.99 USD",
        image: "/tshirt.png",
    },
    {
        name: "Cargo Military Jacket",
        price: "$149.99 USD",
        image: "/jacket.png",
        badge: "New",
    },
    {
        name: "Gothic Logo Cap",
        price: "$34.99 USD",
        image: "/cap.png",
    },
    // Duplicates for demo purposes to fill the grid
    {
        name: "Distressed Denim Jacket",
        price: "$129.99 USD",
        image: "/jacket.png",
        badge: "Coming Soon",
    },
    {
        name: "Cyber Punk Cargo Pants",
        price: "$99.99 USD",
        image: "/hoodie.png", // Placeholder
    },
    {
        name: "Metal Hardware Belt",
        price: "$44.99 USD",
        image: "/tshirt.png", // Placeholder
    },
    {
        name: "Combat Boots | Leather",
        price: "$189.99 USD",
        image: "/cap.png", // Placeholder
    }
];

export default function Shop() {
    return (
        <div className="min-h-screen pt-24 px-6 relative bg-transparent">
            <div className="max-w-7xl mx-auto pb-16">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <p className="text-gray-500 uppercase tracking-ultra text-sm animate-fade-in">
                        Collection 2024
                    </p>
                    <h1 className="font-display text-6xl md:text-8xl tracking-wide text-white">
                        ALL PRODUCTS
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Explore our darkest creations. Limited drops, premium materials, uncompromising style.
                    </p>
                </div>

                {/* Filters (Visual Only for now) */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 border-b border-white/10 pb-6">
                    <button className="text-white uppercase tracking-wider text-sm border-b border-white pb-1">All</button>
                    <button className="text-gray-500 hover:text-white uppercase tracking-wider text-sm transition-colors">Outerwear</button>
                    <button className="text-gray-500 hover:text-white uppercase tracking-wider text-sm transition-colors">Tops</button>
                    <button className="text-gray-500 hover:text-white uppercase tracking-wider text-sm transition-colors">Bottoms</button>
                    <button className="text-gray-500 hover:text-white uppercase tracking-wider text-sm transition-colors">Accessories</button>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            badge={product.badge}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
