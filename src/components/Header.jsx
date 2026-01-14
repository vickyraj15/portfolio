import React from "react";

const Header = () => {
  return (
    <div className="w-full h-14 bg-gray-800 text-white flex items-center justify-between px-6 shadow">
      <h1 className="text-xl font-semibold ">Vicky Raj</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-blue-800 ">Home</li>
        <li className="cursor-pointer hover:text-blue-600">About</li>
        <li className="cursor-pointer hover:text-blue-600">Services</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>
    </div>
  );
};
export default Header;
