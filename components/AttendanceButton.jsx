import React, { useState } from "react";

const AttendanceButton = () => {
  const [clockedIn, setClockedIn] = useState(false);

  const handleClick = () => setClockedIn(!clockedIn);

  return (
    <button
      onClick={handleClick}
      className={`px-16 py-4 text-xl font-bold rounded-lg transition-all duration-300 ease-in-out 
        ${clockedIn ? "bg-white text-[#FF0033]" : "bg-[#FF0033] text-white"} 
        hover:glow-red`}
    >
      {clockedIn ? "CLOCK OUT" : "CLOCK IN"}
    </button>
  );
};

export default AttendanceButton;