import deals from "../data/deals";
import "../style/Deals.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Deals() {
  return (
    <section className="deals-section">

      <div className="deals-header">

        <h2>🔥 Deals of the Day</h2>

        <button>View All</button>

      </div>

      <Swiper

        modules={[Autoplay, Navigation]}

        spaceBetween={20}

        slidesPerView={5}

        navigation={true}

        loop={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 5,
          },
        }}

      >

        {deals.map((item) => (

          <SwiperSlide key={item.id}>

            <div className="deal-card">

              <div className="deal-image">
                <img src={item.image} alt={item.name} />
              </div>

              <h3>{item.name}</h3>

              <p>{item.discount}</p>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}

export default Deals;