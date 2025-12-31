import React from "react";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
            {/* Subtle light trails */}
            <div className="light-trail top-1/4 -left-1/4 opacity-20" />
            <div className="light-trail top-1/2 -left-1/4 opacity-10" />
            <div className="light-trail top-3/4 -left-1/4 opacity-15" />

            {/* Main Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                {/* Tagline */}
                <p className="text-sm uppercase tracking-ultra text-gray-500 mb-8 animate-fade-in">
                    Premium Gothic Streetwear
                </p>

                {/* Main Title */}
                <h1 className="font-display text-[clamp(80px,20vw,200px)] leading-none tracking-wide mb-8">
                    <span className="text-white inline-block">AURAX</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Where darkness meets elegance. Bold designs for those who dare to stand out.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#shop" className="btn-primary min-w-[180px]">
                        Shop Now
                    </a>
                    <a href="#gallery" className="btn-outline min-w-[180px]">
                        View Gallery
                    </a>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                <span className="text-xs uppercase tracking-ultra">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
            </div>
        </section>
    );
};

export default Hero;
