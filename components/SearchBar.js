"use client";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Link from "next/link";

const Searchbar = ({ barbers }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleFilter = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleFilter}
      className="flex justify-between items-center gap-2 mb-6"
    >
      <InputText
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search barbers..."
        className="p-4 grow border border-gray"
      />
      <Link
        href={{
          pathname: "/barbers",
          query: { search: searchTerm },
        }}
      >
        <Button type="submit" className="p-4 text-gray-light bg-blue">
          <i className="pi pi-search text-2xl"></i>
        </Button>
      </Link>
    </form>
  );
};

export default Searchbar;
