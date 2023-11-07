import { Link } from "react-router-dom";
import "./hero.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel carousel-bg1">
            <p
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              WE MAKE A DIFFERENCE IN YOUR LIVES
            </p>
            <h1
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="c-title"
            >
              Delivering Peace of Mind With Our Care
            </h1>
            <Link to="/about">
              <button
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="2000"
                className="button c-btn mt-5"
              >
                WHO WE ARE
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel carousel-bg2">
            <p>WE MAKE A DIFFERENCE IN YOUR LIVES</p>
            <h1 className="c-title">Your Loved Ones Are in Good Hands</h1>
            <Link to="/about">
              <button className="button c-btn mt-5">WHO WE ARE</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel carousel-bg3">
            <p>WE MAKE A DIFFERENCE IN YOUR LIVES</p>
            <h1 className="c-title">Find True Beauty Of Sunset Years</h1>
            <Link to="/about">
              <button className="button c-btn mt-5">WHO WE ARE</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
