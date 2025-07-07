import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Tryston Perry - Senior Software Engineer, Shopify Expert, Community Builder",
  description:
    "Professional resume and portfolio of Tryston Perry, a Senior Software Engineer and Shopify Expert based in San Diego, CA.",
  icons: {
    icon: "/me.jpeg",
    shortcut: "/me.jpeg",
    apple: "/me.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Sorts+Mill+Goudy:ital@0;1&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
