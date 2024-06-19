"use client";
import { useParams } from "next/navigation";
import { recommendedBarbers } from "@/app/page";
import Image from "next/image";

const BarberDetail = () => {
  const { id } = useParams();
  const barber = recommendedBarbers.find(
    (barber) => barber.id === parseInt(id)
  );
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:gap-12 gap-4 text-blue">
      <div className="flex-none h-72 md:w-96 w-72 relative">
        <Image src={barber.image} alt={barber.name} fill></Image>
      </div>
      <div className="flex flex-col gap-4 md:gap-8 flex-1 md:p-6">
        <h2 className="text-4xl font-medium">{barber.name}</h2>
        <p>
          <i className="pi pi-map-marker text-lg mr-2"></i>
          {barber.address}
        </p>
      </div>
    </div>
  );
};

export default BarberDetail;
