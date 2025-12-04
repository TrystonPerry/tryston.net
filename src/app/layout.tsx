import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const notoSans = localFont({
  src: [
    {
      path: "./fonts/NotoSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "./fonts/NotoSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tryston.net"),
  title:
    "Tryston Perry - Senior Software Engineer, Shopify Expert, Community Builder",
  description:
    "Professional resume and portfolio of Tryston Perry, a Senior Software Engineer and Shopify Expert based in San Diego, CA.",
  icons: {
    icon: "/me.jpeg",
    shortcut: "/me.jpeg",
    apple: "/me.jpeg",
  },
  openGraph: {
    title:
      "Tryston Perry - Senior Software Engineer, Shopify Expert, Community Builder",
    description:
      "Professional resume and portfolio of Tryston Perry, a Senior Software Engineer and Shopify Expert based in San Diego, CA.",
    images: [
      {
        url: "/preview.png",
        alt: "Tryston Perry - Senior Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tryston Perry - Senior Software Engineer, Shopify Expert, Community Builder",
    description:
      "Professional resume and portfolio of Tryston Perry, a Senior Software Engineer and Shopify Expert based in San Diego, CA.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden w-screen overflow-y-visible">
      <body
        className={`${notoSans.variable} antialiased bg-gray-200 overflow-x-hidden w-screen overflow-y-visible`}
      >
        {children}
      </body>
    </html>
  );
}
