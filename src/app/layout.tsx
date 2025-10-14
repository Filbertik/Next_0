import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import {HeroUIProvider} from "@heroui/react";
import Header from "@/components/UI/layout/header";
import { Providers } from "@/providers/provider";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import { SessionProvider } from "next-auth/react";

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
          <SessionProvider>
            <Header />
            <main
              className={`flex flex-col w-full justify-start items-center`}
              style={{
                height: `calc(100vh - ${layoutConfig.headerHeight} - ${layoutConfig.footerHeight})`,
              }}
            >
              {children}
            </main>
            <footer
              className={`w-full flex justify-center items-center mt-auto`}
              style={{ height: layoutConfig.footerHeight }}
            >
              <p>{siteConfig.description}</p>
            </footer>
          </SessionProvider>
        </Providers>
      </body>
      {/* <YourApplication /> */}
      {/* <h1>Header</h1> */}
      {/* <h1>Footer</h1> */}
    </html>
  );
}
