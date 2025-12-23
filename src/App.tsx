// src/App.jsx
import React, { useState } from 'react';
import DailyGrid from './components/DailyGrid';
import {initialSlots, daysOfWeek} from './data/slots';

function App() {
  const [slots, setSlots] = useState(initialSlots);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-blue-700">
          Weekly Time Manager Prototype
        </h1>
        <p className="text-gray-500 mt-2">24-Hour Slots & Repetitive Schedule</p>
      </header>

      {/* Main Grid Container - Horizontally scrollable */}
      <div className="flex overflow-x-auto border border-gray-300 rounded-lg bg-white shadow-xl">
        
        {/* Time Axis (Fixed) */}
        <div className="sticky left-0 w-16 bg-white border-r border-gray-200 shadow-sm z-10">
          <div className="h-12 border-b"></div> {/* Space for Day Header */}
          <div className="h-384"> 
            {/* Hour markers are rendered inside DailyGrid, 
                but this column provides the empty space */}
          </div>
        </div>

        {/* Daily Grids */}
        {daysOfWeek.map((day) => (
          <DailyGrid key={day} day={day} slots={slots} />
        ))}
      </div>
      
      <footer className="mt-8 text-center text-gray-400 text-sm">
        *Prototype: The height of the grid is fixed at 96rem for 24 hours (16 * 6 = 96rem)
      </footer>
    </div>
  );
}

export default App;