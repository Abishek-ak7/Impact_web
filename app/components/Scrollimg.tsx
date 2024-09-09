import { useState, useEffect } from 'react';
import Image from 'next/image';
import img2 from "../components/images/homeimg2.png";
import img1 from "../components/images/homeimg1.png";
import img3 from "../components/images/homeimg3.png";

export default function DynamicScrollImages() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-12 overflow-x-auto">
      {/* Left Image */}
      <div
        className={`col-span-1 relative z-10 transition-transform duration-500 ${
          scrollPosition > 100 ? 'translate-y-6 blur-sm' : ''
        }`}
      >
        <Image
          src={img1}
          alt="Spotlight Image 1"
          width={300}
          height={200}
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* Center Image */}
      <div
        className={`col-span-1 relative z-20 transition-transform duration-500 ${
          scrollPosition > 100 ? 'scale-110' : ''
        }`}
      >
        <Image
          src={img2}
          alt="Spotlight Image 2"
          width={300}
          height={200}
          className="rounded-lg w-full h-auto"
        />
      </div>

      {/* Right Image */}
      <div
        className={`col-span-1 relative z-10 transition-transform duration-500 ${
          scrollPosition > 100 ? 'translate-y-6 blur-sm' : ''
        }`}
      >
        <Image
          src={img3}
          alt="Spotlight Image 3"
          width={300}
          height={200}
          className="rounded-lg w-full h-auto"
        />
      </div>
    </div>
  );
}
