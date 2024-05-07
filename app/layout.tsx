import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz App - React and TypeScript",
  description: "A simple quiz app built with React and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-grow flex-col md:items-center justify-between bg-white md:bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
