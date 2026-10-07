import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Daniel Oliech | Web Developer & ICT Professional",
    template: "%s | Daniel Oliech",
  },

  description:
    "Daniel Oliech is a Web Developer, ICT Professional and Trainer based in Kenya. Explore his portfolio, web applications, information systems and digital solutions.",

  keywords: [
    "Daniel Oliech",
    "Daniel Ayuka",
    "Web Developer Kenya",
    "Website Developer Kenya",
    "ICT Professional Kenya",
    "ICT Trainer Kenya",
    "Next.js Developer",
    "React Developer Kenya",
    "TypeScript Developer",
    "Website Design Kenya",
    "Web Applications Kenya",
    "Information Systems Kenya",
  ],

  authors: [
    {
      name: "Daniel Oliech",
    },
  ],

  creator: "Daniel Oliech",
  publisher: "Daniel Oliech",

  applicationName: "Daniel Oliech Portfolio",

  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },

  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Daniel Oliech Portfolio",
    title: "Daniel Oliech | Web Developer & ICT Professional",
    description:
      "Professional portfolio of Daniel Oliech — Web Developer, ICT Professional and Trainer based in Kenya.",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 1200,
        alt: "Daniel Oliech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Daniel Oliech | Web Developer & ICT Professional",
    description:
      "Professional portfolio of Daniel Oliech — Web Developer, ICT Professional and Trainer based in Kenya.",
    images: ["/images/profile.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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