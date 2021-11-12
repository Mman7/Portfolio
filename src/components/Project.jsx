import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { project_data } from "./JS/project_data";

export default function Project() {
  return (
    <div className="project">
      <h1 className="title">Project</h1>
      <Swiper className="swiper-container" spaceBetween={50} slidesPerView={1}>
        {project_data.map((prj) => (
          <SwiperSlide className="swipe-item" key={prj.id}>
            <a href={prj.LinkTopProject} target="_blank">
              <img src={prj.ImgSrc} alt={prj.alt} />
            </a>
            <h1>{prj.ProjectTitle}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
