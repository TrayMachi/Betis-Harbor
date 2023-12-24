import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import WaterBg from "./assets/Water.png";
import PerahuDelete from "./components/PerahuDelete";

function DetailPage() {
  const { idPerahu } = useParams();
  const [boatData, setBoatData] = useState(null);
  const [error, setError] = useState(null);

  const containerStyle = {
    backgroundImage: `url(${WaterBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  };

  useEffect(() => {
    const apiUrl = `https://oprec-betis-be.up.railway.app/perahu/${idPerahu}`;
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDU1NWI4MS1lYzFkLTRmMzctODFkYy1iMWIwYmQ5OWRkNTciLCJpZCI6ImVkNTU1YjgxLWVjMWQtNGYzNy04MWRjLWIxYjBiZDk5ZGQ1NyIsInVzZXJuYW1lIjoiVHJpc3RhbkFncmEiLCJpYXQiOjE3MDI2NTg0NTMsImV4cCI6MTcwNTI1MDQ1M30.PaWFWe0rAKT-WcUzCimcXWHhWKYo1UlHQ7QJ_2Lmme0";

    axios
      .get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setBoatData(response.data.perahu);
      })
      .catch((error) => {
        setError(error);
      });
  }, [idPerahu]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!boatData) {
    // If boatData is still loading, you can render a loading indicator
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar />
      <div
        className="relative overflow-hidden bg-no-repeat p-12"
        style={containerStyle}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={overlayStyle}
        >
          <div className="my-40 mx-20">
            <div className="p-5 bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-md mb-10 bg-[#f5fccd] grid grid-cols-2 text-[#12486b]">
              <div className="col-span-1">
                <strong>{boatData.name}</strong> - Capacity: {boatData.capacity}
                <br />
                <strong>Bought at:</strong> {boatData.bought_at}
                <br />
                <strong>Updated at:</strong> {boatData.updated_at}
                <br />
                <strong>Description: </strong> {boatData.description}
                <br />
                <strong>Color: </strong> {boatData.color}
                <br />
                <strong>Status: </strong>{" "}
                {boatData.is_sailing ? "Sailing" : "Not Sailing"}
              </div>
              <div className="col-span-1 flex justify-end items-center"></div>
              <div >
                <PerahuDelete />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
