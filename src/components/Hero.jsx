import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { slides } from "../data"



function Hero() {
  return (
    <>
      <div className="h-full w-full  flex items-center justify-center p-10">
        <div className='h-full w-full bg-amber-50 rounded-2xl overflow-hidden'>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ height: '100%', width: '100%' }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className=" h-full w-full rounded-2xl">
             
            <img
              src={slide.img}
              alt={`slide-${slide.id}`}
              style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      </div>
    </>
  );
}

export default Hero;
