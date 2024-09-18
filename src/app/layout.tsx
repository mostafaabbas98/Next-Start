import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Start",
  description: "Next.js 14 starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
