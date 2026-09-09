"use client";
import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// https://dev.to/rakumairu/simple-react-carousel-24m0

type Props = {
  caroselItems: any[]
  children: React.ReactNode
  autoscrollSpeed?: number
  width?: number
  height?: number
}
function Carosel({ caroselItems, children, autoscrollSpeed, width = 500, height = 300}: Props) {
  const [curIndex, setCurIndex] = useState(0);

  // automatic scrolling
  useEffect(() => {
    if (autoscrollSpeed) {
      const interval = setInterval(() => {
        setCurIndex(prev =>
          prev >= caroselItems.length - 1 ? 0 : prev + 1
        );
      }, autoscrollSpeed);

      return () => clearInterval(interval);
    }
  }, [autoscrollSpeed, caroselItems.length]);


  function handleBack() {
    setCurIndex((prev) => {
      if (curIndex <= 0) {
        return caroselItems.length - 1;
      } else {
        return prev - 1;
      }
    });
  }

  function handleForward() {
    //console.log('Carosel.tsx/handleForward() => Index: ' + curIndex);
    setCurIndex((prev) => {
      if (curIndex >= caroselItems.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });

  }

  return (
    <div id='carosel container' className='text-amaranth'>
      <div id='carosel wrapper' className='flex justify-center items-center'
      style={{height: height + 'px'}}>
        <IoArrowBackCircleOutline size={30}
          onClick={handleBack}
          className='cursor-pointer hover:text-rose transition-colors duration-200' />

        <div id='carosel content wrapper' className='flex items-center content-center mx-3 relative overflow-hidden'
        style={{width: width + 'px', height: '100%'}}>
          <div id='carosel items' className='flex transition-transform duration-300'
            style={{ transform: `translateX(-${curIndex * (100 / caroselItems.length)}%)` }}>
            {children}
          </div>
        </div>

        <IoArrowForwardCircleOutline size={30}
          onClick={handleForward} 
          className='cursor-pointer hover:text-rose transition-colors duration-200'/>
      </div>
    </div>
  );
}

export default Carosel