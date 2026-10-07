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
  title: "Archi Jain | Data Science & Software Engineering",
  description:
    "Computer Science Engineering (Data Science) student at Jain University with hands-on experience in Python, SQL, data analytics, AI/ML, data preprocessing, and software development.",
  keywords: [
    "Archi Jain",
    "Data Science",
    "Software Engineering",
    "AI/ML",
    "Python",
    "SQL",
    "Data Analytics",
    "Machine Learning",
    "Portfolio",
    "Jain University",
  ],
  authors: [{ name: "Archi Jain" }],
  openGraph: {
    title: "Archi Jain | Data Science & Software Engineering",
    description:
      "Computer Science Engineering (Data Science) student with hands-on experience in Python, SQL, data analytics, AI/ML, and data-driven problem solving.",
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
