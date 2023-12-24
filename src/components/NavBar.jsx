import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed flex justify-center top-0 w-full items-center bg-opacity-30 bg-gradient-to-b from-[#174a5e] to-[#183e48] text-white p-7 z-10">
      <div className="flex items-center">
        <a href="/" className="text-white text-3xl font-semibold">
          Betis Harbor
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
