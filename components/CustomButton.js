import React from "react";
import { Button } from "primereact/button";

const CustomButton = ({ content, onclickEvent }) => {
  return (
    <div>
      <Button
        type="button"
        label={content}
        outlined
        className="h-2rem w-2rem p-2 md:p-3 bg-blue text-gray-light rounded-xl"
        onClick={onclickEvent}
      ></Button>
    </div>
  );
};

export default CustomButton;
