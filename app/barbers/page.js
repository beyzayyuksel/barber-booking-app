import FilteredBarbers from "@/components/FilteredBarbers";
import React, { Suspense } from "react";

const Barbers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FilteredBarbers />
    </Suspense>
  );
};

export default Barbers;
