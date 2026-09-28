import type { Metadata, Viewport } from "next";
import { site } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.brand} — ${site.tagline.join(" ")}`,
  description: `${site.invitation.join(" ")} In-person events in your city and online events from anywhere, every Monday.`,
};

export const viewport: Viewport = {
  themeColor: "#F2F2F0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
