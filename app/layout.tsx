import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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

const exorcista = localFont({
  src: "../public/Exorcista_-Jed_40.ttf",
  variable: "--font-exorcista",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${bebasNeue.variable} ${exorcista.variable} antialiased text-white`}
        suppressHydrationWarning
      >
        {/* Fixed Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="fixed inset-0 bg-black/60 -z-10" />

        {/* Noise texture overlay for subtle grain effect */}
        <div className="noise-overlay" aria-hidden="true"></div>
        {children}
      </body>
    </html>
  );
}
