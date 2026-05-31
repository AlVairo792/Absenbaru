import React from "react";
import Header from "./components/Header";
import HeroClock from "./components/HeroClock";
import StatsPanel from "./components/StatsPanel";

function App() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen text-white font-sans">
      <Header />
      <main className="px-8 py-12 flex flex-col items-center gap-12">
        <HeroClock />
        <StatsPanel />
      </main>
    </div>
  );
}

export default App;