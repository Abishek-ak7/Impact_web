import Image from "next/image";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Second from "./components/Second";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Second />
    </div>
  );
}
