"use client";
import { useState, useEffect, useRef } from "react";
import ReservationDetailSidebar from "./ReservationDetailSidebar";
import { Toast } from "primereact/toast";

const ReservationDetail = () => {
  const [reservations, setReservations] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedReservation, setSelectedReservation] = useState(null);

  const toast = useRef(null);

  useEffect(() => {
    const storedReservations =
      JSON.parse(localStorage.getItem("reservations")) || [];
    setReservations(storedReservations);
  }, []);

  const showInfo = () => {
    toast.current.show({
      severity: "success",
      summary: "Reservation is deleted",
      life: 4000,
      className: "",
    });
  };

  const handleReservationDetail = (reservation) => {
    setVisible(true);
    setSelectedReservation(reservation);
  };

  const handleCancelReservation = () => {
    const updatedReservations = reservations.filter(
      (res) => res !== selectedReservation
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    setVisible(false);
    showInfo();
  };

  return (
    <div className="bg-gray mt-12 px-5 py-8 text-blue rounded-md">
      <h1 className="text-4xl font-semibold border-2 p-5 flex justify-center bg-gray-dark text-gray-light border border-gray-200 shadow-xl">
        Reservations
      </h1>
      {reservations.length === 0 ? (
        <p>No reservations found.</p>
      ) : (
        <ul>
          {reservations.map((reservation, index) => (
            <li
              key={index}
              className="bg-gray-light my-7 px-5 py-10 flex justify-between rounded-md border border-gray-200 shadow-xl "
              onClick={() => handleReservationDetail(reservation)}
            >
              <div className="flex flex-col gap-3">
                {/* {console.log(reservation)} */}
                <h2 className="text-3xl font-medium">
                  {reservation.barber.name}
                </h2>
                <p className="text-lg">
                  <strong>Service:</strong> {reservation.service.name}
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center mr-3">
                <p className="text-xl">{reservation.date}</p>

                <i className="pi pi-clock">
                  <span className="ml-1">{reservation.time}</span>
                </i>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedReservation && (
        <ReservationDetailSidebar
          visible={visible}
          selectedReservation={selectedReservation}
          setVisible={setVisible}
          handleCancelReservation={handleCancelReservation}
        />
      )}
      <Toast ref={toast} />
    </div>
  );
};

export default ReservationDetail;
