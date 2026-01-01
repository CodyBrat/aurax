import React from "react";
import Gallery from "../components/Gallery";

// Expanded gallery images
const galleryImages = [
    { src: "/gallery1.png", alt: "Aurax lifestyle", size: "large" as const },
    { src: "/hoodie.png", alt: "Gothic hoodie", size: "medium" as const },
    { src: "/gallery2.png", alt: "Urban style", size: "small" as const },
    { src: "/tshirt.png", alt: "Black tee", size: "small" as const },
    { src: "/jacket.png", alt: "Cargo jacket", size: "medium" as const },
    { src: "/cap.png", alt: "Logo cap", size: "small" as const },
    // Additional varied images for full page effect
    { src: "/gallery2.png", alt: "Dark Aesthetic", size: "large" as const },
    { src: "/gallery1.png", alt: "Street Culture", size: "medium" as const },
    { src: "/hoodie.png", alt: "Night Life", size: "small" as const },
];

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-transparent pt-12">
            <Gallery images={galleryImages} />
        </div>
    );
}
