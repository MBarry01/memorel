import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const FEATURED_MEMORIALS = [
  {
    id: '1',
    imageUrl: 'https://media.istockphoto.com/id/172195980/fr/photo/sinterrogeant-sur.jpg?s=612x612&w=0&k=20&c=NVugoCf28wVAQzXQFjtZY8II2eLS9MsFUI9huGyqAUg=',
    title: 'Malick Faye'
  },
  {
    id: '1',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1681995475147-e8dc096cc6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Mary Spielberg'
  },
  {
    id: '9',
    imageUrl: 'https://images.unsplash.com/photo-1561195959-1fb4d201c25f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbW1lJTIwdmlldXglMjBub2lyfGVufDB8fDB8fHww',
    title: 'Jaris Stephane'
  },
  
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1551966775-a4ddc8df052b',
    title: 'M. Laurent'
  },
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1551693886-e05efa0d1216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwMXx8fGVufDB8fHx8fA%3D%3D',
    title: 'Area Kabinguilé'
  },
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1629310054224-7bfc3c16d17e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Ridouane Amara'
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    title: 'Sophie'
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1535213679542-f42b6f164647?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvbW1lJTIwdmlldXh8ZW58MHx8MHx8fDA%3D',
    title: 'Chun Li'
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1509695603202-4d89aeab6d14?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Rudolph M'
  },
  {
    id: '5',
    imageUrl: 'https://www.radiofrance.fr/s3/cruiser-production/2023/02/25ba793f-942b-4655-b008-fcdc0faffe7e/1200x680_reencodedfatimage_reencodedfatimage-gettyimages-956703136-1.jpg',
    title: 'Leopold Sedar Senghor'
  },
  {
    id: '6',
    imageUrl: 'https://img.20mn.fr/Srm8kBVMRn6Xp61S1G5g5g/1444x920_prince-concert-paris-30-juin-2011',
    title: 'Prince'
  },
];

export function Carousel() {
  return (
    <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          }
        }}
        className="w-full h-full"
      >
        {FEATURED_MEMORIALS.map((memorial) => (
          <SwiperSlide key={memorial.id}>
            <div className="relative w-full h-full group cursor-pointer">
              <img
                src={memorial.imageUrl}
                alt={memorial.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-white text-2xl font-semibold">
                    {memorial.title}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}