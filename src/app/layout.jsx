import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Playfair_Display, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://saffarentacar.com"),
  title: "Saffa Rent a Car | Best Car Rental Lahore with Driver Pakistan",
  description: "Saffa Rent a Car offers premium car rental services in Lahore with professional drivers. Rent luxury SUVs, Prado, Land Cruiser, and economy cars at affordable rates for weddings, corporate, and city travel.",
  keywords: "rent a car lahore, car rental pakistan, rent a car with driver lahore, luxury car rental pakistan, prado for rent in lahore, land cruiser rental pakistan, wedding car rental lahore, cheap car hire pakistan, intercity car rental pakistan",
  authors: [{ name: "Saffa Rent a Car" }],
  alternates: {
    canonical: "https://saffarentacar.com",
  },
  openGraph: {
    title: "Saffa Rent a Car | Premium Car Hire Services in Lahore",
    description: "Looking for a reliable car rental in Lahore? Saffa Rent a Car provides luxury and economy vehicles with professional chauffeurs. Book your ride today!",
    url: "https://saffarentacar.com",
    siteName: "Saffa Rent a Car",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saffa Rent a Car - Luxury Fleet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saffa Rent a Car | Best Car Rental in Lahore",
    description: "Premium car rental services in Pakistan with professional drivers. Luxury SUVs, Sedans, and more at best rates.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRental",
              "name": "Saffa Rent a Car",
              "image": "https://saffarentacar.com/logo.png",
              "@id": "https://saffarentacar.com",
              "url": "https://saffarentacar.com",
              "telephone": "+923224901754",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Main Boulevard",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "postalCode": "54000",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 31.5204,
                "longitude": 74.3587
              },
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "brand": {
                "@type": "Brand",
                "name": "Saffa Rent a Car"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
