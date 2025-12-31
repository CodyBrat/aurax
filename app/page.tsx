import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProductCard from "./components/ProductCard";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// Product data
const featuredProducts = [
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
];

// Gallery images
const galleryImages = [
  { src: "/gallery1.png", alt: "Aurax lifestyle", size: "large" as const },
  { src: "/hoodie.png", alt: "Gothic hoodie", size: "medium" as const },
  { src: "/gallery2.png", alt: "Urban style", size: "small" as const },
  { src: "/tshirt.png", alt: "Black tee", size: "small" as const },
  { src: "/jacket.png", alt: "Cargo jacket", size: "medium" as const },
  { src: "/cap.png", alt: "Logo cap", size: "small" as const },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* First Marquee */}
      <Marquee
        items={[
          "AURAX",
          "GOTHIC STREETWEAR",
          "DARK AESTHETICS",
          "LIMITED DROPS",
          "PREMIUM QUALITY",
        ]}
        speed="normal"
      />

      {/* Featured Products Section */}
      <section id="shop" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-gray-500 uppercase tracking-ultra text-sm mb-4">
                Featured Collection
              </p>
              <h2 className="font-display text-5xl md:text-7xl tracking-wide text-white">
                New Arrivals
              </h2>
            </div>
            <a
              href="#"
              className="mt-6 md:mt-0 text-sm uppercase tracking-wide text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1"
            >
              View All Products →
            </a>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
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
      </section>

      {/* Second Marquee */}
      <Marquee
        items={[
          "LIMITED FLAGS",
          "EXCLUSIVE MERCH",
          "WORLDWIDE SHIPPING",
          "PREMIUM MATERIALS",
        ]}
        speed="slow"
        separator="★"
      />

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
        {/* Subtle diagonal light trails */}
        <div className="light-trail top-1/3 left-0 w-full opacity-10" />
        <div className="light-trail top-2/3 left-0 w-full opacity-5" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-gray-500 uppercase tracking-ultra text-sm mb-6">
            About Aurax
          </p>
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-white mb-8">
            Born From Darkness
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
            Aurax represents the intersection of gothic aesthetics and modern streetwear.
            Each piece is designed for those who refuse to blend in—crafted with premium
            materials and bold designs that make a statement.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            We believe in quality over quantity. Every drop is limited, every design is intentional.
            Join the dark side.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery images={galleryImages} />

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-black border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-wide text-chrome mb-6">
            Join The Movement
          </h2>
          <p className="text-gray-500 mb-10">
            Be the first to know about exclusive drops and dark updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/40 transition-colors"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
