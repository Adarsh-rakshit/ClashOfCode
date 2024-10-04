"use client";
import { useState, useEffect } from "react";

export default function Cards({ contestName, Schedule, duration, difficulty }) {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const date = new Date(Schedule);
    setFormattedDate(date.toLocaleDateString());
    setFormattedTime(date.toLocaleTimeString());
  }, [Schedule]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 px-10 py-6 rounded-3xl w-full max-w-5xl mx-auto mt-5 space-y-4 md:space-y-0 md:space-x-4 shadow-[0_5px_10px_rgba(8,_112,_184,_0.7)] text-black dark:text-white border-neutral-200">
      <div className="text-lg font-semibold text-white">{formattedDate}</div>
      <div>
        <img src="https://your-logo-url.com/logo.png" alt="Site Logo" className="h-12 w-12 object-contain" />
      </div>
      <div className="text-lg font-semibold text-white">{contestName}</div>
      <div className="text-lg font-semibold text-white">{formattedTime}</div>
      <div className="text-lg font-semibold text-white">{`${duration} mins`}</div>
      <div className={`text-lg font-semibold ${difficulty === "Hard" ? "text-red-500" : "text-green-500"}`}>
        {difficulty}
      </div>
    </div>
  );
}
