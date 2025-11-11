import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Indian Food",
  description: "Discover the authentic taste of India with our wide variety of flavorful dishes, freshly prepared using traditional spices and ingredients. From rich curries to sizzling street food, enjoy a true culinary journey delivered right to your doorstep.",
  icons: {
    icon: "/favicon1.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
         <Footer/> 
      </body>
     
    </html>
  );
}
