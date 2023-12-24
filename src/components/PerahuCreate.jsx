import React, { useState } from "react";
import axios from "axios";

const PerahuMaker = () => {
  const [error, setError] = useState(null);

  const handleBuyBoat = async () => {
    const apiUrl = "https://oprec-betis-be.up.railway.app/perahu"; 
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDU1NWI4MS1lYzFkLTRmMzctODFkYy1iMWIwYmQ5OWRkNTciLCJpZCI6ImVkNTU1YjgxLWVjMWQtNGYzNy04MWRjLWIxYjBiZDk5ZGQ1NyIsInVzZXJuYW1lIjoiVHJpc3RhbkFncmEiLCJpYXQiOjE3MDI2NTg0NTMsImV4cCI6MTcwNTI1MDQ1M30.PaWFWe0rAKT-WcUzCimcXWHhWKYo1UlHQ7QJ_2Lmme0";

    const boatData = {
      name: "Your Boat Name",
      description: "Your Boat Description",
      capacity: 10, 
      color: "BLUE", 
    };

    try {
      const response = await axios.post(apiUrl, boatData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("Response Message:", response.data.message);
      console.log("Purchased Boat ID:", response.data.perahu.id);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:outline-none dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-white">
      <button onClick={handleBuyBoat}>Buy Boat</button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default PerahuMaker;
