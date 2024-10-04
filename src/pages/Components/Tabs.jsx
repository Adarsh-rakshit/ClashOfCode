"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Cards from "./Cards";
export function TabsDemo({thisweek,nextweek}) {
  const tabs = [
    {
      title: "This Week",
      value: "This Week",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          {thisweek.length > 0 ? (
            thisweek.map((contest, index) => (
              <Cards
                key={index}
                contestName={contest.ContestName}
                Schedule={contest.Schedule}
                duration={contest.Duration}
                difficulty={contest.difficulty}
              />
            ))
          ) : (
            <p>No contests this week.</p>
          )}
        </div>
      ),
    },
    {
      title: "Next Week",
      value: "Next Week",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        {nextweek.length > 0 ? (
          nextweek.map((contest, index) => (
            <Cards
              key={index}
              contestName={contest.ContestName}
              Schedule={contest.Schedule}
              duration={contest.Duration}
              difficulty={contest.difficulty}
            />
          ))
        ) : (
          <p>No contests this week.</p>
        )}
      </div>
      ),
    },
  ];

  return (
    (<div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>)
  );
}

