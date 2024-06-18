import React from "react";
import { Button } from "primereact/button";

const CustomButton = ({ content }) => {
  return (
    <div>
      <Button
        type="button"
        outlined
        className="h-2rem w-2rem p-3 bg-blue text-gray-light rounded-xl"
      >
        {content}
      </Button>
    </div>
  );
};

export default CustomButton;
