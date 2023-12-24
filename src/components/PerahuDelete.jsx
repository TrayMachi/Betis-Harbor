import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PerahuDelete = () => {
  const { idPerahu } = useParams();
  const [responseMessage, setResponseMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSellBoat = async () => {
    const apiUrl = `https://oprec-betis-be.up.railway.app/perahu/${idPerahu}`;
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDU1NWI4MS1lYzFkLTRmMzctODFkYy1iMWIwYmQ5OWRkNTciLCJpZCI6ImVkNTU1YjgxLWVjMWQtNGYzNy04MWRjLWIxYjBiZDk5ZGQ1NyIsInVzZXJuYW1lIjoiVHJpc3RhbkFncmEiLCJpYXQiOjE3MDI2NTg0NTMsImV4cCI6MTcwNTI1MDQ1M30.PaWFWe0rAKT-WcUzCimcXWHhWKYo1UlHQ7QJ_2Lmme0";

    try {
      const response = await axios.delete(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setResponseMessage(response.data.message);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <button onClick={handleSellBoat}
      className="font-semibold bg-[#e33437] p-3 rounded border border-black my-5"
      >
        Sell Boat
      </button>
      {responseMessage && <p>Response Message: {responseMessage}</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default PerahuDelete;
