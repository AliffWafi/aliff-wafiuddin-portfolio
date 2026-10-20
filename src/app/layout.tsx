import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Aliff Wafiuddin // Portfolio — Software Dev • Business Analysis • Automation",
  description:
    "Neo-Brutalist IT & Computer Science portfolio of Aliff Wafiuddin (UiTM CS Hons), featuring experience at AmBank Group & Panasonic, plus full-stack, mobile, and AI projects.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#111111] selection:bg-[#FFD100] selection:text-[#111111]">
        {children}
      </body>
    </html>
  );
}
