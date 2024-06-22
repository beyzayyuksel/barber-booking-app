"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { recommendedBarbers } from "@/app/page";
import { Button } from "primereact/button";
import { Sidebar } from "primereact/sidebar";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import CustomButton from "./CustomButton";

const ReservationSidebar = ({ visible, onHide, selectedService }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const { id } = useParams();
  const barber = recommendedBarbers.find(
    (barber) => barber.id === parseInt(id)
  );

  const timeOptions = Array.from({ length: 17 }, (_, i) => {
    const hour = Math.floor(9 + i * 0.75);
    const minutes =
      i % 4 === 0 ? "00" : i % 4 === 1 ? "45" : i % 4 === 2 ? "30" : "15";
    return { label: `${hour}:${minutes}`, value: `${hour}:${minutes}` };
  });

  const handleConfirmReservation = () => {
    const reservation = {
      service: selectedService,
      date: selectedDate.toLocaleDateString(),
      time: selectedTime,
      barber: barber,
    };

    const existingReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];

    existingReservations.push(reservation);

    localStorage.setItem("reservations", JSON.stringify(existingReservations));

    console.log("Reservation Confirmed", reservation);
    onHide();
  };

  return (
    <Sidebar
      visible={visible}
      onHide={onHide}
      position="right"
      className="p-2 "
    >
      {visible && (
        <div className="">
          <div>
            <h3>Reservation</h3>
            <h4>{barber.name}</h4>
            <h4>{selectedService.name}</h4>
          </div>
          <div>
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value)}
              inline
              className="flex justify-center"
            />
            <Dropdown
              value={selectedTime}
              options={timeOptions}
              onChange={(e) => setSelectedTime(e.value)}
              placeholder="Select a time"
            />
          </div>
          <div>
            {selectedService && (
              <>
                <p>Service: {selectedService.name}</p>
                <p>
                  Date: {selectedDate ? selectedDate.toLocaleDateString() : ""}
                </p>
                <p>Time: {selectedTime}</p>
              </>
            )}
          </div>
          <div>
            <CustomButton
              content={"Confirm Reservation"}
              onclickEvent={handleConfirmReservation}
            />
          </div>
        </div>
      )}
    </Sidebar>
  );
};

export default ReservationSidebar;
