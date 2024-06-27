"use client";
import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { usePathname } from "next/navigation";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const path = usePathname();

  return (
    <div className="container mx-auto w-11/12 flex items-center justify-between min-h-24 text-blue border-b-2 ">
      <div className="text-4xl">
        <Link href="/" className="cursor-pointer">
          Barbers
        </Link>
      </div>
      <nav className="lg:flex gap-8 items-center hidden font-medium ">
        <Link
          href="/"
          className={
            path === "/"
              ? " p-2 bg-blue/50 text-gray-light rounded-md"
              : undefined
          }
        >
          Homepage
        </Link>
        <Link
          href="/booking"
          className={
            path.startsWith("/booking")
              ? " p-2 bg-blue/50 text-gray-light rounded-md border-gray-200 shadow-xl"
              : undefined
          }
        >
          Booking
        </Link>
      </nav>
      <Button
        type="button"
        icon="pi pi-bars"
        rounded
        outlined
        className="h-2rem w-2rem lg:hidden"
        onClick={() => setVisible(true)}
      ></Button>
      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        className="bg-gray p-5"
      >
        <div className="pt-5">
          <nav className="flex flex-col text-blue font-medium gap-5">
            <Link
              href="/"
              onClick={() => setVisible(false)}
              className="border-b-2 pb-2"
            >
              <i className="pi pi-home text-lg pr-1"></i>
              Homepage
            </Link>
            <Link
              href="/booking"
              onClick={() => setVisible(false)}
              className="border-b-2 pb-2"
            >
              <i className="pi pi-calendar text-lg pr-1"></i>
              Booking
            </Link>
          </nav>
        </div>
      </Sidebar>
    </div>
  );
};

export default Header;
