import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { rapid_resp, eval_resp } from "../../data";
import Rapid from "./Rapid";

// Import Swiper styles
import "swiper/css";

function Responsive_Table({ type }) {
  //   return <div>Responsive_table</div>;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {type === "rapid"
        ? rapid_resp.map((element) => {
            return (
              <SwiperSlide>
                <Rapid {...element} />
              </SwiperSlide>
            );
          })
        : eval_resp.map((element) => {
            return (
              <SwiperSlide>
                <Rapid {...element} />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
}

export default Responsive_Table;
