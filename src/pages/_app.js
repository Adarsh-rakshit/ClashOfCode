import "@/styles/globals.css";
import Navbar from "./Components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center mb-20">
        <Navbar/>
      </div>
      <Component {...pageProps} />
    </>
  );
}
