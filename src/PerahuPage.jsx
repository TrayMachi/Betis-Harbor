import React from "react";
import WaterBg from "./assets/Water.png";
import NavBar from "./components/NavBar";
import DaftarPerahu from "./components/DaftarPerahu";
import PerahuMaker from "./components/PerahuCreate";
import BoatForm from "./components/PerahuCreate2";

function PerahuPage() {
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
            <h2 className="text-center py-12 font-semibold text-white text-3xl">
              Owned Boat
            </h2>
            <div>
              <DaftarPerahu />
            </div>
            <div className="pt-20 text-center"> 
                <PerahuMaker />
            </div>
            <div className="m-15 text-center">
              <BoatForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerahuPage;
