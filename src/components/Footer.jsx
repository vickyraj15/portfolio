import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-white/30 min-h-32 w-full bg-indigo-950 text-white px-8">
      <div className="px-4 py-6 border-b border-white/30">
        <h1 className="text-2xl font-black">Vicky Raj | Portfolio</h1>
      </div>
      <div className="px-4 py-8 border-b border-white/30 grid grid-cols-4 gap-4">
        <div>
          <h4 className="font-semibold text-xl mb-4">Contact</h4>
          <ul>
            <li>Vicky Raj</li>
            <li>Patna, Bihar</li>
            <li>Pincode : 801303</li>
            <li>Email: vickyraj707025@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-4">Expertise</h4>
          <ul>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>MERN Stack</li>
            <li>Java & C++</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-4">Pages</h4>
          <ul>
            <li>Home </li>
            <li>About </li>
            <li>Contact </li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-xl mb-4">Links</h4>
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <p className="px-4 py-6">
        All rights reserved 2025 &copy; Vicky Raj | Portfolio
      </p>
    </div>
  );
};

export default Footer;
