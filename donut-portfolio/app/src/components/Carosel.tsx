"use client";
import React, { useEffect, useState } from 'react';
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

// https://dev.to/rakumairu/simple-react-carousel-24m0

type Props = {
  caroselItems: any[],
  autoscrollSpeed?: number
}
function Carosel({ caroselItems, autoscrollSpeed }: Props) {
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
    <div id='carosel container' className='bg-rose'>
      <div id='carosel wrapper' className='flex items-center bg-grape'>
        <IoArrowBackCircleOutline size={30}
          onClick={handleBack}
          className='' />

        <div id='carosel content wrapper' className='flex mx-3 w-20 relative overflow-hidden'>
          <div id='carosel items' className='flex transition-transform duration-300'
            style={{ transform: `translateX(-${curIndex * (100 / caroselItems.length)}%)` }}>
            {caroselItems.map((value, index) => {
              return (
                <div key={index}
                  className='flex justify-center items-center align-middle size-20 bg-blue-50'>
                  <h1 className='text-amaranth'>{value}</h1>
                </div>
              );
            })}
          </div>
        </div>

        <IoArrowForwardCircleOutline size={30}
          onClick={handleForward} />
      </div>
    </div>
  );
}

export default Carosel