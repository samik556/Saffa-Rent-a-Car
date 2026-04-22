import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Playfair_Display, Poppins } from "next/font/google";

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
  title: "Saffa Rent a Car | Premium Car Rental Service in Pakistan",
  description: "Rent luxury SUVs, economy sedans, and executive cars in Pakistan. Saffa Rent a Car offers the best daily, weekly, and monthly car hire rates with or without driver. VIP service guaranteed.",
  keywords: "car rental pakistan, rent a car lahore, luxury car hire, rent a car with driver, monthly car rental pakistan, suv rental, prado rental pakistan, land cruiser rental",
  authors: [{ name: "Saffa Rent a Car" }],
  alternates: {
    canonical: "https://saffarentacar.com",
  },
  openGraph: {
    title: "Saffa Rent a Car | Premium Car Hire Services",
    description: "Looking for a reliable car rental in Pakistan? Saffa Rent a Car provides luxury and economy vehicles at the best rates. Book your ride today!",
    url: "https://saffarentacar.com",
    siteName: "Saffa Rent a Car",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saffa Rent a Car Fleet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saffa Rent a Car | Premium Car Hire",
    description: "Premium car rental services in Pakistan. Luxury SUVs, Sedans, and more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
        <Footer />
      </body>
    </html>
  );
}
