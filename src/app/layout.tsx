import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import {HeroUIProvider} from "@heroui/react";
import Header from "@/components/UI/header";
import { Providers } from "@/providers/provider";
import { siteConfig } from "@/config/site.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="flex flex-col h-[calc(100vh-60px-80px)] w-full justify-start items-center">
            {children}
          </main>
        </Providers>

        <footer className="flex h-[80px] justify-center items-center mt-auto">
          <p>{siteConfig.description}</p>
        </footer>
      </body>
      {/* <YourApplication /> */}
      {/* <h1>Header</h1> */}
      {/* <h1>Footer</h1> */}
    </html>
  );
}
