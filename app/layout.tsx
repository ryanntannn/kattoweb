import "./globals.css";

import { Metadata } from "next";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/footer/footer";
import { Toaster } from "@/components/shadcn/ui/sonner";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "Katto Studios",
  description: "We hand craft user centric digital solutions",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader />
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
