import "@/styles/globals.css";
import Navbar from "./Components/navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
