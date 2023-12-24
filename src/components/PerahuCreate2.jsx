import React, { useState } from "react";
import axios from "axios";

const PerahuMaker = () => {
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [boatData, setBoatData] = useState({
    name: "",
    description: "",
    capacity: 0,
    color: "",
  });

  const COLORS = [
    "RED",
    "ORANGE",
    "YELLOW",
    "GREEN",
    "BLUE",
    "INDIGO",
    "VIOLET",
    "WHITE",
    "BLACK",
  ];

  const handleBuyBoat = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBoatData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "https://oprec-betis-be.up.railway.app/perahu";
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDU1NWI4MS1lYzFkLTRmMzctODFkYy1iMWIwYmQ5OWRkNTciLCJpZCI6ImVkNTU1YjgxLWVjMWQtNGYzNy04MWRjLWIxYjBiZDk5ZGQ1NyIsInVzZXJuYW1lIjoiVHJpc3RhbkFncmEiLCJpYXQiOjE3MDI2NTg0NTMsImV4cCI6MTcwNTI1MDQ1M30.PaWFWe0rAKT-WcUzCimcXWHhWKYo1UlHQ7QJ_2Lmme0";


    try {
      const response = await axios.post(
        apiUrl,
        {
          name: boatData.name,
          description: boatData.description,
          capacity: boatData.capacity,
          color: boatData.color,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("API Response:", response.data);

      setShowForm(false);
      setBoatData({
        name: "",
        description: "",
        capacity: 0,
        color: "",
      });
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <button
        onClick={handleBuyBoat}
        className="text-white rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:outline-none dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
      >
        Buy Boat
      </button>

      {showForm && (
        <form onSubmit={handleFormSubmit} className="border-2 bg-blue-100 text-left">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={boatData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={boatData.description}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Capacity:
            <input
              type="number"
              name="capacity"
              value={boatData.capacity}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Color:
            <select
              name="color"
              value={boatData.color}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select a color
              </option>
              {COLORS.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}

      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default PerahuMaker;
