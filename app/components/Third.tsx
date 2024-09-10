import Image from "next/image"
import lumos from './images/lumos_white 1.png'

export default function Third() {
  return (
    <div className="bg-yellow-300 h-screen">
        <h1 className="text-white text-7xl font-bold text-center p-20 font-darker">Our Initiatives</h1>
        <div className="flex mx-auto p-10 items-center justify-around">
        <Image src={lumos} alt="lumos logo" className="w-1/6 h-1/6"/>
        <p className="text-white text-2xl w-1/2 font-medium font-darker">Articles written by students have connected each person from diverse backgrounds, 
            creating a deep connection between students through the words that have been expressed in the pages of Lumos, an Impact Magazine.
             Moreover the magazine not only covers the various aspects of career,
             but also dwells in the broader world, exploring different cultures and ideologies.</p>

        </div>

    </div>
  )
}
