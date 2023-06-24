import React, { useState } from 'react';
import Image from 'next/image';
import avatarImage from '../images/avatar.png';
import { MobileNavItem } from '@/components/Header';

const Slideshow = () => {
  const slides = [
    '/files/images/1.png',
    '/files/images/2.png',
    '/files/images/3.png',
    '/files/images/4.png',
    '/files/images/5.png'
    // add your slides here...
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="flex flex-col content-center items-center justify-center">
    <div className="relative h-60 md:w-80 mt-12">
      {slides.map((slide, index) => (
        <div
        key={index}
        className={`mt-6 w-1/2 h-1/2 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
        >
        <Image
            src={slide}
            alt=""
            fill
            style={{  objectFit: 'cover' }}
            className='w-1/3 justify-center flex h-full'

            />
        </div>
      ))}
      <br/>

    </div>
    <nav className="mt-6">
              <div className="my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
              </div>
              <div><button
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"

      onClick={nextSlide}>Next slide</button>
</div>

            </nav>
      </div>
  );
}

export default Slideshow;
