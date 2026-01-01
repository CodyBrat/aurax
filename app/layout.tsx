import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CurrencyProvider } from "./context/CurrencyContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const mirage = localFont({
  src: "../public/Mirage final.ttf",
  variable: "--font-mirage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURAX | Gothic Streetwear",
  description: "Premium gothic streetwear for the modern rebel. Dark aesthetics, bold designs, uncompromising quality.",
  keywords: ["streetwear", "gothic", "fashion", "clothing", "dark aesthetic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${mirage.variable} antialiased text-white`}
        suppressHydrationWarning
      >
        <CurrencyProvider>
          {/* Fixed Video Background */}
          <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden bg-black">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute min-w-full min-h-full object-cover opacity-60"
            >
              <source src="/video.mp4" type="video/mp4" />
            </video>
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Noise Overlay */}
            <div className="noise-overlay" />
          </div>

          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
