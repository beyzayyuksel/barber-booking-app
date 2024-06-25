"use client";
import { useState, useEffect } from "react";
import CarouselDetail from "@/components/Carousel";
import Searchbar from "@/components/SearchBar";
import { useSearchParams } from "next/navigation";
import { recommendedBarbers } from "@/app/page";

const FilteredBarbers = () => {
  const [filteredBarbers, setFilteredBarbers] = useState(recommendedBarbers);
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("search");

  useEffect(() => {
    if (searchTerm === null || searchTerm.trim() === "") {
      setFilteredBarbers(recommendedBarbers);
    } else {
      const filtered = recommendedBarbers.filter((barber) =>
        barber.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBarbers(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="mt-8">
      <Searchbar barbers={recommendedBarbers} />

      <CarouselDetail categories={filteredBarbers}></CarouselDetail>
    </div>
  );
};

export default FilteredBarbers;
