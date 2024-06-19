"use client";
import React from "react";
import { Carousel } from "primereact/carousel";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Link from "next/link";

const CarouselDetail = ({ categories }) => {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const carouselItem = (item) => {
    return (
      <div className="px-4 py-4 m-3 bg-gray-light rounded-md border border-gray-200 shadow-lg transform transition-transform duration-300 hover:scale-105 text-blue">
        <div className="h-48 w-full relative">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className=" rounded-md"
          ></Image>
        </div>
        <div className="flex flex-col gap-4 py-2">
          <div>
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-gray-dark">{item.address}</p>
          </div>
          <div className="flex justify-center">
            <Link href={`/barbers/${item.id}`}>
              <CustomButton content={"Reservation"} />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Carousel
        value={categories}
        numVisible={4}
        numScroll={4}
        responsiveOptions={responsiveOptions}
        className="py-5"
        circular
        autoplayInterval={10000}
        itemTemplate={carouselItem}
      />
    </div>
  );
};

export default CarouselDetail;
