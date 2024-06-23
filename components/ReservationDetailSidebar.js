import React from "react";
import { Sidebar } from "primereact/sidebar";
import CustomButton from "./CustomButton";

const ReservationDetailSidebar = ({
  visible,
  selectedReservation,
  setVisible,
  handleCancelReservation,
}) => {
  return (
    <div>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        className="bg-gray w-96"
      >
        <div className="my-3 mx-2">
          <h2 className="text-2xl font-medium border-b-2 pb-2">
            Reservation Details
          </h2>
          <div className="my-8 bg-gray-light px-4 py-12 border-2 rounded-md border border-gray-200 shadow-xl">
            <div className="flex justify-between text-xl font-bold pb-4">
              <h3>{selectedReservation.barber.name}</h3>
              <p> ${selectedReservation.service.price}</p>
            </div>
            <p className="flex justify-between">
              <strong>Date:</strong> {selectedReservation.date}
            </p>
            <p className="flex justify-between">
              <strong>Time:</strong> {selectedReservation.time}
            </p>
            <p className="flex justify-between">
              <strong>Service:</strong> {selectedReservation.service.name}
            </p>
          </div>
          <div className="flex justify-end">
            <CustomButton
              content={"Cancel Reservation"}
              onclickEvent={handleCancelReservation}
            />
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default ReservationDetailSidebar;
