import type { Metadata } from "next";
import local_font from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "کافه",
  description: "",
};

const mikhak = local_font({
  src: "../public/fonts/mikhak.woff2",
  display: "swap",
  variable: "--mikakh",
});

const adobe_clean = local_font({
  src: "../public/fonts/adobe_clean_regular.woff2",
  display: "swap",
  variable: "--adobe_clean",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${mikhak.variable} ${adobe_clean.variable}`}>
        {children}
      </body>
    </html>
  );
};
