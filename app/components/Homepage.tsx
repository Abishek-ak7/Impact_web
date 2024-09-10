"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import EnlargeCenterCarousel from './carousel';

export default function Homepage() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" bg-blue-500">
      <div className='flex flex-col items-center justify-center'>
        <div className='flex bg-yellow-300  mt-[5%] w-1/5 p-2 text-black gap-1 text-center rounded-full font-bold text-lg  justify-between items-center'>
          <h1 className='bg-slate-100  w-1/3 py-2 rounded-full'>Magazine</h1>
          <h1 className='bg-slate-100  w-1/3 py-2 rounded-full'>Podcast</h1>
          <h1 className='bg-slate-100 w-1/3 py-2 rounded-full'>Events</h1>
        </div>
        </div>
        <h2 className="text-5xl md:text-7xl mt-[5%] font-bold text-white text-center mb-6 md:mb-8">
          Spotlight
        </h2>
        <EnlargeCenterCarousel/>
      </div>
  );
}
