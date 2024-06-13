import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Amine Elkhalidy - Portfolio",
  description:
    "Welcome to my portfolio! I’m a Full Stack Developer who specializes in creating stunning and user-friendly websites. Explore my work, where I combine design and technology to build responsive, modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
