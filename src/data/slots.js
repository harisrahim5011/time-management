// src/data/slots.js
export const initialSlots = [
  {
    id: 1,
    name: "Morning Run",
    day: "Monday", // Can be "Monday", "Tuesday", etc. or "Daily"
    hour: 6, // 6 AM
    duration: 1, // 1 hour
    color: "bg-green-500",
    isRepetitive: true,
  },
  {
    id: 2,
    name: "Work Session",
    day: "Daily",
    hour: 9, // 9 AM
    duration: 4, // 4 hours
    color: "bg-blue-600",
    isRepetitive: true,
  },
  {
    id: 3,
    name: "Client Meeting",
    day: "Wednesday",
    hour: 14, // 2 PM
    duration: 1.5, // 1.5 hours
    color: "bg-yellow-500",
    isRepetitive: false,
  },
  // Add more slots as needed
];

export const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];