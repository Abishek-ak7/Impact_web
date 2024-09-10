import Image from "next/image";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import Third from "./components/Third";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Second />
      <Third/>
    </div>
  );
}
