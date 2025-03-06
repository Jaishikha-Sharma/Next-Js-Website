import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import ResponsiveNav from "./components/Home/navbar/ResponsiveNav";
import Footer from "./components/Home/footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel for you | Next js 15",
  description: "Travel Landing Page using next js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav/>
        {children}
        <Footer/>
        <ScrollToTop/>
      </body>
    </html>
  );
}
