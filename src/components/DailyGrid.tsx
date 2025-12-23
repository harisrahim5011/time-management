// src/components/DailyGrid.jsx
import React from 'react';
import SlotItem from './SlotItem';

// Helper to create an array of 24 hours (0 to 23)
const hours = Array.from({ length: 24 }, (_, i) => i);

const DailyGrid = ({ day, slots }) => {
  // Filter slots for the specific day or those marked as 'Daily'
  const daySlots = slots.filter(
    (slot) => slot.day === day || slot.day === 'Daily'
  );

  return (
    <div className="flex-1 min-w-[150px] border-r border-gray-200">
      <h3 className="sticky top-0 p-3 text-center font-semibold text-lg bg-gray-50 border-b">
        {day}
      </h3>
      
      {/* Container for the 24-hour timeline */}
      <div className="relative p-2 h-[96rem] min-h-full">
        
        {/* Render the 24 hourly lines and labels */}
        {hours.map((hour) => (
          <div
            key={hour}
            className="flex h-16 border-t border-gray-100 relative"
          >
            {/* Time Label (Sticky for better visibility) */}
            <div className="absolute -left-16 w-16 text-xs text-gray-400 -mt-2">
              {hour}:00
            </div>
          </div>
        ))}

        {/* Render the actual slots */}
        {daySlots.map((slot) => (
          <SlotItem key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
};

export default DailyGrid;