"use client";
import { useState } from "react";
import Image from "next/image";
import { services } from "/data";
import CustomButton from "./CustomButton";
import ReservationSidebar from "./ReservationSidebar";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [visible, setVisible] = useState(false);

  const handleVisibility = (service) => {
    setSelectedService(service);
    setVisible(true);
  };

  return (
    <div>
      <div className="mt-8 pt-8 border-t-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex md:gap-10 gap-2 items-center bg-gray-light p-4 mb-5 rounded-md text-blue border border-gray-400 shadow-lg"
          >
            <div className="relative w-28 h-28 flex-none">
              <Image src={service.imageUrl} fill className="rounded-md"></Image>
            </div>
            <div className="flex flex-col gap-2 md:gap-5 w-full flex-initial">
              <div className="leading-tight md:leading-normal">
                <h3 className="text-xl font-medium">{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-2xl">${service.price}</p>
                <CustomButton
                  content={"Reservation"}
                  onclickEvent={() => handleVisibility(service)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReservationSidebar
        visible={visible}
        onHide={() => setVisible(false)}
        selectedService={selectedService}
      />
    </div>
  );
};

export default Services;
