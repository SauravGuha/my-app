import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Create your blogs",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="m-0 p-0">
        <div className="flex min-h-screen w-full justify-center bg-neutral-100 font-sans text-neutral-900">
          <div className="flex min-h-screen w-full max-w-[813px] flex-col bg-white">
            <Header />

            <main className="flex flex-1 flex-col px-6">{children}</main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
