import localFont from "next/font/local";
import { TabsDemo } from "./Components/Tabs";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({thisweekdata,nextweekdata,resimages}) {
  return (
    <div className="min-h-screen antialiased mx-10">
      <TabsDemo thisweek={thisweekdata} nextweek={nextweekdata} resimages={resimages}/>
    </div>
  );
}

export async function getStaticProps() {
  try {
    // Use a relative URL to call the API
    const res = await fetch(`http://localhost:3000/api/code`); 
    const response = await res.json();
    const thisweekdata = response.responsethisweek;
    const nextweekdata = response.responsenextweek;  
    const imagefinder = await fetch(`http://localhost:3000/api/urlfetcher`);
    const resimages = await imagefinder.json();

    if (!res.ok) {
      throw new Error("Failed to fetch contests");
    }
    return {
      props: {
        thisweekdata,
        nextweekdata,
        resimages
      },
      revalidate: 60, // Optional: Revalidate every hour
    };
  } catch (error) {
    console.error("Error fetching contests:", error);

    return {
      props: {
        thisweekdata: [],
        nextweekdata: [],
        resimages : {} // Return empty array in case of error
      },
    };
  }
}

