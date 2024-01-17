import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkLightBackground } from "@/components/DarkLightBackground";
import { GlobalContextProvider } from "@/hooks/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victoria E Johnson's Portfilo",
  description: "Portfilo of Victoria E Johnson's work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {/* Container */}
          <Header></Header>
          {children}
          <Footer></Footer>
          <DarkLightBackground />
          {/* Container */}
          {/* </ThemeProvider> */}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
