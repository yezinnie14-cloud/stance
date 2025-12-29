import "./BannerSection.scss";
import React, { useCallback, useEffect, useRef, useState } from "react";

// 이미지 import
import banner01 from "../../assets/images/banner/banner-1.jpg";
import banner02 from "../../assets/images/banner/banner-2.jpg";
import banner03 from "../../assets/images/banner/banner-3.jpg";
import banner04 from "../../assets/images/banner/banner-4.jpg";
import banner05 from "../../assets/images/banner/banner-5.jpg";

const banners = [
  { img: banner01, x: "65% 85%" },
  { img: banner02, x: "60%" },
  { img: banner03, x: "85%" },
  { img: banner04, x: "50%" },
  { img: banner05, x: "35%" },
];

const SLIDE_DURATION = 8000; 

const BannerSection = () => {
  const [current, setCurrent] = useState(0); 
  const total = banners.length;
  const timerRef = useRef(null);

  const startAutoSlide = useCallback(() => {

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, SLIDE_DURATION);
  }, [total]);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startAutoSlide]);


  const goTo = (index) => {
    startAutoSlide();
    setCurrent(index);
  };

  const handleNext = () => {
    startAutoSlide();
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    startAutoSlide();
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleProgressClick = (index) => {
    if (index === current) return;
    goTo(index);
  };


  return (
    <section className="banner">
      <div
        className="banner-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((b, idx) => (
          <div
            key={idx}
            className="banner-slide"
            style={{
              backgroundImage: `url(${b.img})`,
              backgroundPosition: b.x || "50% 50%",
            }}
          />
        ))}
      </div>

      <div className="banner-overlay" />

      <div className="banner-content">
        <h1>
          <span className="title-top">PACEY</span>
          <span className="title-box">RUN YOUR</span>
          <span className="title-box">FACE</span>
        </h1>
        <p className="title-sub">러닝부터 일상까지, 하나로.</p>
        <span className="banner-link">더보기 →</span>
      </div>


      <div className="banner-progress-wrap">
        <div className="banner-progress">
          {banners.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`banner-progress-item ${
                idx === current ? "is-active" : ""
              }`}
              onClick={() => handleProgressClick(idx)}
            />
          ))}
        </div>
        <div className="banner-count">
          <span className="current">{current + 1}</span>
          <span className="slash"> / </span>
          <span className="total">{total}</span>
          <span className="plus">＋</span>
        </div>
      </div>


      <button className="arrow left" onClick={handlePrev}>
        ＜
      </button>
      <button className="arrow right" onClick={handleNext}>
        ＞
      </button>
    </section>
  );
};

export default BannerSection;
