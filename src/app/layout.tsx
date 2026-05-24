import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Archi Jain — UI/UX Designer & Product Thinker",
  description:
    "Analytical and creative UI/UX designer passionate about solving problems through intuitive digital experiences. Specializing in wireframing, prototyping, and modern design practices.",
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Archi Jain",
    "Portfolio",
    "Figma",
    "Wireframing",
    "Prototyping",
    "User Experience",
  ],
  authors: [{ name: "Archi Jain" }],
  openGraph: {
    title: "Archi Jain — UI/UX Designer & Product Thinker",
    description:
      "Crafting intuitive digital experiences through design thinking and creative problem-solving.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
