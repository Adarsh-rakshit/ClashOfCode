"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./reusables/Button";

export function Cards({ contestName, Schedule, duration, difficulty,imageUrl,ContestUrl}) {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const date = new Date(Schedule);
    setFormattedDate(date.toLocaleDateString());
    setFormattedTime(date.toLocaleTimeString());
  }, [Schedule]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-900 px-10 py-6 rounded-3xl w-full max-w-5xl mx-auto mt-5 space-y-4 md:space-y-0 md:space-x-4 shadow-[0_5px_10px_rgba(8,_112,_184,_0.7)] text-black dark:text-white border-neutral-200">
      <div>
      <Image
      src={imageUrl}
      width={50}
      height={50}
      alt="Picture of the author"
    />
      </div>
      <div className="text-lg font-semibold text-white">{contestName}</div>
      <div className="text-lg font-semibold text-white">{formattedDate}</div>
      <div className="text-lg font-semibold text-white">{formattedTime}</div>
      <div className="text-lg font-semibold text-white">{`${duration} mins`}</div>
      <div className={`text-lg font-semibold ${(() => {
          switch (difficulty) {
            case "advanced":
              return "text-red-500";
            case "intermediate":
              return "text-orange-500";
            case "beginner":
              return "text-green-500";
            default:
              return "text-gray-500"; // Default case
          }
        })()
        }`}>
        {difficulty}
      </div>
      <Button contestUrl={ContestUrl}/>
    </div>
  );
}

export default Cards;