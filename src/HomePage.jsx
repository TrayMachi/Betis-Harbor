import React from "react";
import WaterBg from "./assets/Water.png";

function HomePage() {
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
    <div
      className="relative overflow-hidden bg-no-repeat p-12 text-center"
      style={containerStyle}
    >
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={overlayStyle}
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h1 className="mb-auto text-9xl font-semibold">Betis</h1>
            <h2 className="mb-12 text-7xl font-semibold">Harbor</h2>
            <button
              type="button"
              className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:outline-none dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
              <a href="/perahu">Start Sailing!</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
