import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const Slideshow = () => {

  const images = [
    '/screenshot/screen (8).png',
    '/screenshot/screen (1).png',
    '/screenshot/screen (2).png',
    '/screenshot/screen (3).png',
    '/screenshot/screen (4).png',
    '/screenshot/screen (6).png',
    '/screenshot/screen (7).png',
    '/screenshot/screen (9).png',
    '/screenshot/screen (10).png',
    '/screenshot/screen (11).png',
    '/screenshot/screen (12).png',
    '/screenshot/screen (13).png',
    '/screenshot/screen (14).png',
    '/screenshot/screen (15).png',
    '/screenshot/screen (16).png',
    '/screenshot/screen (17).png'
  ]


  return (
    <div className="h-full lg:w-2/3 bg-red-400 bg-opacity-10 shadow-lg my-3 container mx-auto select-none lg:rounded-xl ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        pagination={true}

        slidesPerView={3}
        // spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}

        className="mySwiper mx-5"
      >
        {
          images.map((image,index)=>{

            return(
              <SwiperSlide className="rounded-lg">
                <img
                  src={image}
                  alt='screen preview of phoeniX App'
                  className="rounded-lg my-10 "
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Slideshow