import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Foldara",
  description: "Precision-engineered biologics for the next generation of medicine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
