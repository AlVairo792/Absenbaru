import React, { useState, useEffect } from "react";
import AttendanceButton from "./AttendanceButton";

const HeroClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour12: false });

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="text-6xl md:text-8xl font-extrabold tracking-tight">
        {formattedTime}
      </div>
      <AttendanceButton />
    </section>
  );
};

export default HeroClock;