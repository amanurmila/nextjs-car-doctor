"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import image1 from "../../public/assets/images/banner/1.jpg";
import image2 from "../../public/assets/images/banner/2.jpg";
import image3 from "../../public/assets/images/banner/3.jpg";
import image4 from "../../public/assets/images/banner/4.jpg";
import image5 from "../../public/assets/images/banner/5.jpg";

const HomeBanner = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-11/12 mx-auto">
      <Slider {...settings}>
        <div className="relative">
          <div>
            <Image src={image1} alt="img-1"></Image>
          </div>
          <div className="absolute image1-bg w-full h-full border text-white top-0 right-0">
            <div className="w-full h-full flex items-center justify-end font-bold pr-10">
              <div className="w-80 flex flex-col gap-4">
                <h2 className="text-4xl">Best Price to Repair</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, sint.
                </p>
                <div className="flex gap-3">
                  <button className="btn text-white bg-orange-600 hover:bg-transparent hover:outline-1 btn-sm">
                    View Details
                  </button>
                  <button className="btn outline-1 bg-transparent text-white hover:bg-orange-600 btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <Image src={image2} alt="img-1"></Image>
          </div>
          <div className="absolute image2-bg w-full h-full border text-white top-0 left-0">
            <div className="w-full h-full flex items-center justify-start font-bold pl-10">
              <div className="w-80 flex flex-col gap-4">
                <h2 className="text-4xl">Best Price to Repair</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, sint.
                </p>
                <div className="flex gap-3">
                  <button className="btn text-white bg-orange-600 hover:bg-transparent hover:outline-1 btn-sm">
                    View Details
                  </button>
                  <button className="btn outline-1 bg-transparent text-white hover:bg-orange-600 btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <Image src={image3} alt="img-1"></Image>
          </div>
          <div className="absolute image1-bg w-full h-full border text-white top-0 right-0">
            <div className="w-full h-full flex items-center justify-end font-bold pr-10">
              <div className="w-80 flex flex-col gap-4">
                <h2 className="text-4xl">Best Price to Repair</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, sint.
                </p>
                <div className="flex gap-3">
                  <button className="btn text-white bg-orange-600 hover:bg-transparent hover:outline-1 btn-sm">
                    View Details
                  </button>
                  <button className="btn outline-1 bg-transparent text-white hover:bg-orange-600 btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <Image src={image5} alt="img-1"></Image>
          </div>
          <div className="absolute image2-bg w-full h-full border text-white top-0 left-0">
            <div className="w-full h-full flex items-center justify-start font-bold pl-10">
              <div className="w-80 flex flex-col gap-4">
                <h2 className="text-4xl">Best Price to Repair</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, sint.
                </p>
                <div className="flex gap-3">
                  <button className="btn text-white bg-orange-600 hover:bg-transparent hover:outline-1 btn-sm">
                    View Details
                  </button>
                  <button className="btn outline-1 bg-transparent text-white hover:bg-orange-600 btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <Image src={image4} alt="img-1"></Image>
          </div>
          <div className="absolute image1-bg w-full h-full border text-white top-0 right-0">
            <div className="w-full h-full flex items-center justify-end font-bold pr-10">
              <div className="w-80 flex flex-col gap-4">
                <h2 className="text-4xl">Best Price to Repair</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, sint.
                </p>
                <div className="flex gap-3">
                  <button className="btn text-white bg-orange-600 hover:bg-transparent hover:outline-1 btn-sm">
                    View Details
                  </button>
                  <button className="btn outline-1 bg-transparent text-white hover:bg-orange-600 btn-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeBanner;
