import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const pbCasino = localFont({
  src: [
    {
      path: "../public/fonts/PBCasino-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PBCasino-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PBCasino-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pb-casino",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Чакалък за Playstation 5 с Кумбата!",
  description: "Спечели Playstation 5 с няколко лесни стъпки.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Чакалък за Playstation 5 с Кумбата!",
    description: "Спечели Playstation 5 с няколко лесни стъпки.",
    images: ["/featured_image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Чакалък за Playstation 5 с Кумбата!",
    description: "Спечели Playstation 5 с няколко лесни стъпки.",
    images: ["/featured_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body className={`${pbCasino.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
