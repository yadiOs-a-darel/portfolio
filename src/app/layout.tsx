import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./navbar";


export const metadata: Metadata = {
  title: "portfolio",
  description: "Generated by darel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='text-white bg-white font-stretch-100%'
      >
        <div className="md:flex">
            <NavBar />
          </div>
        {children}
      </body>
    </html>
  );
}
