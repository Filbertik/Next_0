

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
  title: siteConfig.title ,
  description: siteConfig.description
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
          {children}
      {/* <YourApplication /> */}
    </Providers>
        {/* <h1>Header</h1> */}
        
        {/* <h1>Footer</h1> */}
      </body>
    </html>
  );
}
