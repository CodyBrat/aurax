"use client";

import { useCurrency } from "../context/CurrencyContext";
import Image from "next/image";

interface ProductCardProps {
    name: string;
    price: number; // Changed to number for calculation
    image: string;
    badge?: string;
    href?: string;
}

const ProductCard = ({
    name,
    price,
    image,
    badge,
    href = "#"
}: ProductCardProps) => {
    const { formatPrice } = useCurrency();
    const formattedPrice = formatPrice(price);

    return (
        <a href={href} className="group product-card block">
            {/* Image Container */}
            <div className="relative aspect-square bg-black-muted overflow-hidden mb-4">
                {/* Badge */}
                {badge && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-white text-black text-xs uppercase tracking-wide font-medium">
                        {badge}
                    </span>
                )}

                {/* Product Image */}
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Product Info */}
            <div className="space-y-2">
                <h3 className="text-sm uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors">
                    {name}
                </h3>
                <p className="text-sm text-white font-medium">
                    {formattedPrice}
                </p>
            </div>
        </a>
    );
};

export default ProductCard;
