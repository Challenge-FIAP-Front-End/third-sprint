import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Carousel() {
  return (
    <Swiper
      className='w-full'
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      style={{
        "--swiper-navigation-color": "white",
        "--swiper-pagination-color": "white",
      } as React.CSSProperties}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='h-[60vh] object-contain'><img className="w-full" src="https://lh3.googleusercontent.com/p/AF1QipN5uk_BOiykD_2Nx28G8RbxvGJ9Phov914JRus0=s1360-w1360-h1020" alt="Oficina 1" /></SwiperSlide>
      <SwiperSlide className='h-[60vh] object-contain'><img className='w-full' src="https://lh3.googleusercontent.com/p/AF1QipNAg_f6SwF5EVrFKE9u52deNNxexWw98_OoRC2z=s1360-w1360-h1020" alt="Oficina 2" /></SwiperSlide>
      <SwiperSlide className='h-[60vh] object-contain'><img className='w-full' src="https://lh3.googleusercontent.com/p/AF1QipMYxKemQELJuoF7kHhAPF0kbB3sPqQhHPu-7fDO=s1360-w1360-h1020" alt="Oficina 3" /></SwiperSlide>
    </Swiper>
  )
}

export default Carousel