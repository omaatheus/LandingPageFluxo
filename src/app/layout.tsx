import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Header } from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fluxo",
  description: "Seu Software, Fluindo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
