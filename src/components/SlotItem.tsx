// src/components/SlotItem.jsx
import React from 'react';

const SlotItem = ({ slot }) => {
  // Calculate position: 1 unit = 1 hour. Tailwind's height classes (h-X) are 0.25rem * X
  // We'll use a custom height style based on duration.
  const heightStyle = {
    height: `${slot.duration * 4}rem`, // Assuming a baseline of 4rem per hour (h-16 in Tailwind)
    top: `${slot.hour * 4}rem`, // Position based on the start hour
  };
  
  // Custom styles for repetitive tag
  const repetitiveStyle = slot.isRepetitive ? "ring-2 ring-offset-2 ring-white" : "";
  
  return (
    <div
      className={`absolute w-full p-2 text-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${slot.color} ${repetitiveStyle}`}
      style={heightStyle}
    >
      <div className="font-bold text-sm">
        {slot.name}
      </div>
      <div className="text-xs opacity-80 mt-1">
        {slot.hour}:00 - {Math.floor(slot.hour + slot.duration)}:{((slot.hour + slot.duration) % 1) * 60 || '00'}
      </div>
      {slot.isRepetitive && (
        <span className="absolute top-1 right-2 text-xs bg-black bg-opacity-30 px-1 py-0.5 rounded-full">
          Repetitive
        </span>
      )}
    </div>
  );
};

export default SlotItem;