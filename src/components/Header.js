import React from "react";
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';

function Header() {
  return (
    <header className="bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img className="h-8 mr-2" src={logo} alt="Logo" />
          <span className="text-white font-bold text-xl">Cabs</span>
        </div>
        <div className="flex items-center">
          <img className="h-8 rounded-full mr-2" src={profile} alt="Profile" />
          <span className="text-white">Kajal</span>
        </div>
      </div>
    </header>
  );
}

export default Header;