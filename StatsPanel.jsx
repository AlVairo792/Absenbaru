import React from "react";

const StatsPanel = () => {
  return (
    <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="glass-card p-6 flex flex-col items-center justify-center">
        <span className="text-red-500 text-xl font-bold">35h</span>
        <span className="text-white text-sm mt-2">Total Jam Kerja Minggu Ini</span>
      </div>
      <div className="glass-card p-6 flex flex-col items-center justify-center">
        <span className="text-white text-lg font-semibold">3 Hari Terakhir</span>
        <ul className="mt-2 text-sm text-gray-300 space-y-1">
          <li>Senin: Hadir</li>
          <li>Selasa: Hadir</li>
          <li>Rabu: Izin</li>
        </ul>
      </div>
      <div className="glass-card p-6 flex flex-col items-center justify-center">
        <span className="text-white text-lg font-semibold">Status Mingguan</span>
        <div className="mt-4 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-red-500 rounded-full transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;