import React from "react";
import Image from "next/image";

interface GalleryImage {
    src: string;
    alt: string;
    size?: "small" | "medium" | "large";
}

interface GalleryProps {
    images: GalleryImage[];
}

const Gallery = ({ images }: GalleryProps) => {
    return (
        <section id="gallery" className="relative py-24 px-6 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-display text-6xl md:text-8xl tracking-wide text-white mb-4">
                        Gallery
                    </h2>
                    <p className="text-gray-500 uppercase tracking-ultra text-sm">
                        The Aurax Lifestyle
                    </p>
                </div>

                {/* Asymmetric Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
                    {images.map((image, index) => {
                        // Create varied sizes for asymmetric look
                        const sizeClasses = {
                            small: "",
                            medium: "md:col-span-2 md:row-span-1",
                            large: "col-span-2 row-span-2",
                        };

                        const size = image.size || (index === 0 ? "large" : index % 3 === 0 ? "medium" : "small");

                        return (
                            <div
                                key={index}
                                className={`relative overflow-hidden bg-gray-900 group ${sizeClasses[size]}`}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white uppercase tracking-ultra text-sm">View</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Large Brand Logo */}
                <div className="mt-24 text-center">
                    <span className="font-display text-[clamp(60px,15vw,180px)] text-white/5 tracking-wider">
                        AURAX
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
