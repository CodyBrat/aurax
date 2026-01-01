import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen pt-24 px-6 relative bg-transparent">
            <div className="max-w-4xl mx-auto pb-16">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <h1 className="font-display text-6xl md:text-8xl tracking-wide text-white">
                        OUR STORY
                    </h1>
                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto"></div>
                </div>

                {/* Content Sections */}
                <div className="space-y-24">

                    {/* Section 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-display text-4xl text-white">The Beginning</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Aurax was born from a desire to merge the raw, untamed energy of the underground with high-end fashion sensibilities.
                                We saw a void in the world of streetwear—a lack of genuine darkness, a fear of the bold.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Our journey began in the shadows of the metropolis, sketching designs that defied convention and embraced the void.
                            </p>
                        </div>
                        <div className="relative h-[400px] w-full bg-gray-900 overflow-hidden border border-white/10">
                            {/* Placeholder for about image - using one of the gallery images for now */}
                            <Image
                                src="/gallery1.png"
                                alt="Aurax origins"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    {/* Section 2 (Reversed) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="relative h-[400px] w-full bg-gray-900 overflow-hidden order-last md:order-first border border-white/10">
                            <Image
                                src="/gallery2.png"
                                alt="Craftsmanship"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="font-display text-4xl text-white">Craftsmanship</h2>
                            <p className="text-gray-400 leading-relaxed">
                                We refuse to compromise. Every stitch, every fabric choice, every cut is deliberate.
                                We source materials that can withstand the chaos of modern life while maintaining an air of elegance.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Our garments are not just clothes; they are armor for the modern rebel.
                            </p>
                        </div>
                    </div>

                    {/* Manifesto */}
                    <div className="text-center py-12 border-y border-white/5">
                        <p className="font-display text-5xl md:text-7xl text-white/10 tracking-wider">
                            DARE TO BE DARK
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
