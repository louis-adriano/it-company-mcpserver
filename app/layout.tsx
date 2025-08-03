import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LOU IT - IT Solutions & MCP Server",
  description: "Modern IT solutions company with Model Context Protocol server for AI integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}