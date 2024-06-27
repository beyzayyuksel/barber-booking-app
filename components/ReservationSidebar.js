"use client";
import { useParams } from "next/navigation";
import { useState, useRef } from "react";
import { recommendedBarbers } from "@/app/page";
import { Toast } from "primereact/toast";
import { Sidebar } from "primereact/sidebar";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Button from "primereact/button";

const ReservationSidebar = ({ visible, onHide, selectedService }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const toast = useRef(null);

  const { id } = useParams();
  const barber = recommendedBarbers.find(
    (barber) => barber.id === parseInt(id)
  );

  const showToast = () => {
    toast.current.show({
      severity: "success",
      summary: "Reservation made successfully",
      detail: (
        <div>
          <Link href="/booking">view the reservation</Link>
        </div>
      ),
    });
  };

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
    showToast();
  };

  return (
    <div>
      <Sidebar
        visible={visible}
        onHide={onHide}
        position="right"
        className="px-2 bg-gray"
      >
        {visible && (
          <div className="">
            <div>
              <h3 className="text-3xl border-b-2 mb-6">Reservation</h3>
              <h4 className="text-center font-bold text-blue">{barber.name}</h4>
            </div>
            <div className="flex flex-col gap-2">
              <Calendar
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.value)}
                inline
                className="flex justify-center mt-2 border border-gray-200 shadow-xl"
              />
              <Dropdown
                value={selectedTime}
                options={timeOptions}
                onChange={(e) => setSelectedTime(e.value)}
                placeholder="Select a time"
                className="border border-gray-200 shadow-xl rounded-md"
              />
            </div>
            <div className="mt-4">
              {selectedService && (
                <>
                  <p>
                    <strong>Service:</strong> {selectedService.name}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {selectedDate ? selectedDate.toLocaleDateString() : ""}
                  </p>
                  <p>
                    <strong>Time:</strong> {selectedTime}
                  </p>
                </>
              )}
            </div>
            <div className="flex justify-end">
              <CustomButton
                content={"Confirm Reservation"}
                onclickEvent={handleConfirmReservation}
              />
            </div>
          </div>
        )}
      </Sidebar>
      <div>
        <Toast ref={toast} />
      </div>
    </div>
  );
};

export default ReservationSidebar;
