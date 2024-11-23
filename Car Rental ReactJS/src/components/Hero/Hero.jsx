import React, { useEffect, useState } from "react";
import carPng from "../../assets/banner-car-dark.png";
import yellowCar from "../../assets/banner-car-light.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 ">
            <p data-aos="fade-up" className="text-blue-500 text-2xl font-serif">
              Streamlined
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Car-Rent-On
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
            Car-Rent-On is more than just a car rental company; it's your gateway to unforgettable journeys. We're dedicated to providing you with the ultimate freedom and convenience on the road. Whether you're exploring the city, embarking on a weekend getaway, or embarking on a grand adventure, our diverse fleet of well-maintained vehicles is designed to cater to your every need.<br /><br />At Car-Rent-On, we prioritize customer satisfaction. Our team of experienced professionals is committed to delivering exceptional service, ensuring a seamless and enjoyable rental experience. From the moment you book to the moment you return your vehicle, we're here to assist you every step of the way.<br /><br />So, why wait? Buckle up, ignite your wanderlust, and let Car-Rent-On be your trusted companion on the road ahead.{" "}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1500"
              onClick={() => {
                AOS.refreshHard();
              }}
              className="rounded-md bg-blue-500 hover:bg-blue-500/80 transition duration-500 py-2 px-6 text-white"
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
