import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MTG Card Viewer",
  description: "3D Magic card viewer",
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
