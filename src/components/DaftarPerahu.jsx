import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import boaticon from "../assets/boat-icon.png"

const DaftarPerahu = () => {
  const [boatData, setBoatData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = "https://oprec-betis-be.up.railway.app/perahu";
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlZDU1NWI4MS1lYzFkLTRmMzctODFkYy1iMWIwYmQ5OWRkNTciLCJpZCI6ImVkNTU1YjgxLWVjMWQtNGYzNy04MWRjLWIxYjBiZDk5ZGQ1NyIsInVzZXJuYW1lIjoiVHJpc3RhbkFncmEiLCJpYXQiOjE3MDI2NTg0NTMsImV4cCI6MTcwNTI1MDQ1M30.PaWFWe0rAKT-WcUzCimcXWHhWKYo1UlHQ7QJ_2Lmme0";

    axios
      .get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setBoatData(response.data.daftarPerahu);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!boatData) {
    // Kalau sedang tidak ada perahu
    return <div>We have no boat :{"("}</div>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={1}
      height={300}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        906: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {boatData.map((boat) => (
        <SwiperSlide key={boat.id}>
          <Link to={`/perahu/${boat.id}`}>
            <div className="p-5 bg-opacity-75 backdrop-filter backdrop-blur-sm rounded-md mb-10 mx-4 bg-blue-200 grid grid-cols-2">
              <div className="col-span-1">
                <strong>{boat.name}</strong> - Capacity: {boat.capacity}
                <br />
                <strong>Bought at:</strong> {boat.bought_at}
                <br />
                <strong>Updated at:</strong> {boat.updated_at}
                <br />
                <strong>Description: </strong> {boat.description}
                <br />
                <strong>Color: </strong> {boat.color}
                <br />
                <strong>Status: </strong> {boat.is_sailing ? "Sailing" : "Not Sailing"}
              </div>
              <div className="col-span-1 flex justify-end items-center">
                <img src={boaticon} alt="Boat Icon" className="w-32 h-32" />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DaftarPerahu;
