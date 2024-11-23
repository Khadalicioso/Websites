import React from "react";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car7.png";
import car8 from "../../assets/car8.png";
import car9 from "../../assets/car9.png";

const carList = [
  {
    name: "SSC Tuatara",
    price: "108,767,701.82",
    image: car1,
    aosDelay: "0",
  },
  {
    name: "SSC Ultimate Aero",
    price: "15,894,137.03",
    image: car2,
    aosDelay: "500",
  },
  {
    name: "SSC Aero XT",
    price: "47,414,445.92",
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "Rimac Nevera",
    price: "12,277,903,708.97",
    image: car4,
    aosDelay: "0",
  },
  {
    name: "Rimac Concept One",
    price: "54,694,289.91",
    image: car5,
    aosDelay: "500",
  },
  {
    name: "Rimac C_Two",
    price: "114,442,237.52",
    image: car6,
    aosDelay: "1000",
  },
  {
    name: "Koenigsegg Jesko Absolut",
    price: "189,786,836.04",
    image: car7,
    aosDelay: "0",
  },
  {
    name: "Koenigsegg Agera RS",
    price: "619,612,567.45",
    image: car8,
    aosDelay: "500",
  },
  {
    name: "Koenigsegg Gemera",
    price: "845,717,507.15",
    image: car9,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Car Showcase
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
        Prepare to be dazzled by a stunning collection of vehicles, from classic beauties to cutting-edge concepts.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-blue-500 p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-blue-500 font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>₱{data.price}/Month</p>
                    <a href="#">Details</a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  Available
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;