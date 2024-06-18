import React from "react";

const Greeting = () => {
  const today = new Date();
  const date = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="text-gray-dark flex flex-col gap-4 p-6 my-5 rounded-md bg-gray-light border-2">
      <p className="text-5xl font-medium ">Hello!</p>
      <p className="text-2xl">Today is {date}</p>
    </div>
  );
};

export default Greeting;
