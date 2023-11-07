import "./services.css";
import serviceData from "./service-data";

import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Services = () => {
  return (
    <div className="s-container custom-container">
      <div className="flex-s-container">
        <div className="lead-text">
          <small>WE CAN HELP</small>
          <h1>Services</h1>
        </div>
        <p className="s-description">
          Why Choose LQS HealthCare Services Ltd? Our dedicated team of
          compassionate caregivers is committed to enhancing the lives of our
          residents through personalised care and attention.
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={false}
        navigation={true}
        loop={true}
        modules={[Autoplay, Navigation]}
        className="mt-5"
      >
        <div className="s-description-card mt-5">
          {serviceData.map((data) => (
            <SwiperSlide className="cards">
              <span>{data.icon}</span>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
              <BsArrowRight className="arrow-icon" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Services;
