import React from "react";

const testimonialData = [
  {
    name: "Franz Jeremy",
    image: "",
    description: "Renting from Car-Rent-On was a breeze! The car was clean, well-maintained, and perfect for our road trip. The staff was incredibly helpful and accommodating. I'll definitely be renting from them again in the future.",
    aosDelay: "0",
  },
  {
    name: "Mark Angelo",
    image: "",
    description: "I was blown away by the exceptional service at Car-Rent-On. The booking process was easy, and the car was ready to go when we arrived. We had a fantastic experience and would highly recommend them to anyone looking for a reliable car rental company.",
    aosDelay: "300",
  },
  {
    name: "John Powell",
    image: "",
    description: "I rented a car from Car-Rent-On for a week and had an amazing time. The car was in great condition, and the staff was friendly and professional. I especially appreciated the flexibility and convenience of their rental process. I'll definitely be a repeat customer!",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              Our Clients' Experiences
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
            Discover firsthand how our products or services have transformed the lives of our valued clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
