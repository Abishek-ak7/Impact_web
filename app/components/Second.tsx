import Head from 'next/head';
import Image from 'next/image';
import Img1 from './images/image 363.png';
import Img2 from './images/image 365.png';
import Img3 from './images/Mask group.png';
import Img4 from './images/image 367.png';
import Img5 from './images/image 364.png';

export default function Second() {
  return (
  <div>
    <div className='flex w-full bg-yellow-400 h-14'>

    </div>

    <div className="bg-blue-500 text-white flex flex-row">
      <div className="flex flex-col mt-28 ml-8 min-h-screen">
        <h1 className="text-8xl font-bold tracking-widest ml-3 mt-5">Who are we?</h1>
        <p className="p-5 ml-7 text-2xl tracking-widest text-justify font-darker leading-relaxed">
          Impact is the student community of Chennai Institute of Technology, focusing on helping students along their
          career paths. Through informative podcasts, innovative events, and enchanting articles, we help students in
          exploring deep into their subjects of interest and move out of their comfort zones to delve deep into their
          career paths to be the best version of themselves. At Impact, we help students in bringing out their innate
          creativity and talent by allowing them to express themselves.
        </p>
      </div>

      <div className="relative flex justify-center mt-32 mr-10">
        {/* Container for overlapping circles */}
        <div className="relative flex flex-wrap w-[700px] h-[500px]">
          <div className="absolute w-72 h-72 rounded-full overflow-hidden top-[29%] left-[40%] z-20">
            <Image src={Img1} alt="Event Image 1" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute w-40 h-40 rounded-full overflow-hidden top-[23%] left-[29%] z-10">
            <Image src={Img2} alt="Event Image 2" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute w-80 h-80 rounded-full overflow-hidden top-[64%] left-[60%] z-15">
            <Image src={Img3} alt="Event Image 3" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute w-64 h-64 rounded-full overflow-hidden left-[69.2%] z-10">
            <Image src={Img4} alt="Event Image 4" layout="fill" objectFit="cover" />
          </div>
          <div className="absolute w-28 h-28 rounded-full overflow-hidden top-[67.5%] left-[34%] z-20">
            <Image src={Img5} alt="Event Image 5" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
