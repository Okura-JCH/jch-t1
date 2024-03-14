'use client'
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const items = [
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "最初のヘッドライン",
      description: "最初の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "二番目のヘッドライン",
      description: "二番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "三番目のヘッドライン",
      description: "三番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "四番目のヘッドライン",
      description: "四番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "五番目のヘッドライン",
      description: "五番目の説明文です。このテキストはサンプルです。",
    },
    {
      imageUrl: "https://placehold.jp/300x300.png",
      headline: "六番目のヘッドライン",
      description: "六番目の説明文です。このテキストはサンプルです。",
    },
    // 他のセットを追加
  ];

  return (
    <div className="mt-4 mb-4 ml-8 mr-8 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">人気のやつ</h2>
      <Swiper
        spaceBetween={100}
        centeredSlides
        slidesPerView={4}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Link 
              href={{
                pathname: "/details",
                query: item,
              }}
              passHref
            >
              <div className="flex flex-col items-center space-y-4 cursor-pointer mb-8">
                <Image src={item.imageUrl} width={300} height={300} alt="画像の説明" />
                <div className="space-y-2 w-full max-w-xs">
                  <h3 className="text-xl font-bold">{item.headline}</h3>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 className="text-2xl font-bold mb-4">新着とか</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ld:grid-cols-5 gap-4 m-8">
      {items.map((item, index) => (
        <Link 
          key={index} 
          href={{
            pathname: "/details",
            query: item, // ここでitemのデータをクエリパラメータとして渡す
          }}
          passHref
        >
          <div className="flex flex-col items-center space-y-4">
            <Image src={item.imageUrl} width={300} height={300} alt="画像の説明" />
            <div className="space-y-2 w-full max-w-72">
              <h2 className="text-xl font-bold">{item.headline}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}
