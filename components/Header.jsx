import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-6">
      <h1 className="text-2xl font-bold">Selamat Datang, Al Vairo</h1>
      <div className="flex items-center gap-4">
        <span className="text-red-500 font-semibold">Hadir Hari Ini</span>
        <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;