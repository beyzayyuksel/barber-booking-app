import { Inter } from "next/font/google";
import "./globals.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (inter.className,
          "bg-gray min-h-screen flex flex-col justify-between")
        }
      >
        <Header />
        <div className="container mx-auto w-5/6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
