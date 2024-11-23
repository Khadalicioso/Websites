import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { SlHome } from "react-icons/sl";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaMoneyBill className="text-5xl text-blue-500 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Looking for the best deals? Look no further. We've got the lowest prices guaranteed.",
    aosDelay: "0",
  },
  {
    name: "Fast Cars",
    icon: (
      <GiCarWheel className="text-5xl text-blue-500 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "They're more than just vehicles; they're adrenaline-fueled machines that ignite our passion for speed.",
    aosDelay: "500",
  },
  {
    name: "Trusted Company",
    icon: (
      <SlHome className="text-5xl text-blue-500 group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "We've been a trusted partner in Car Rental Industry for 100 years, delivering quality, service, product that exceeds expectations. Our commitment to value, innovation, customer satisfaction has earned us the loyalty of our clients.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Discover Our Value
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark  hover:bg-blue-500 duration-300 text-white hover:text-black rounded-lg"
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-blue-500 group-hover:text-black duration-300"
                >
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;