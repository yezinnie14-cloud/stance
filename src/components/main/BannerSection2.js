import Banner2Img1 from "../../assets/images/banner2/running-1.jpg";
import Banner2Img2 from "../../assets/images/banner2/running-2.jpg";
import "./BannerSection2.scss";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const BannerSection2 = () => {
  return (
    <section id="banner2">
      <div className="images">
        <div className="box1">
          <img src={Banner2Img1} alt="배너2이미지1" />
          <h2>
            Not only for running. <br />
            Made for living.
          </h2>
        </div>
        <div className="box2">
          <img src={Banner2Img2} alt="배너2이미지2" />
          <h2>
            Soft on the run.
            <br />
            Strong in daily life.
          </h2>
        </div>
      </div>
      <div className="btn">
        <div className="prev">
          <IoIosArrowBack />
        </div>
        <div className="next">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="indi-bottom">
        <div className="indicator">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="indi-txt">
            <p>
              더 보러가기 <IoIosArrowForward />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection2;
