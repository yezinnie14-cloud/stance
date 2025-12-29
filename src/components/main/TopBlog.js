import "./TopBlog.scss";
import { IoIosArrowForward } from "react-icons/io";

const TopBlog = () => {
  return (
    <section id="hello">
      <div className="hello-box">
        <div className="txt">
          <h2>
            반갑습니다! <br />
            PACEY 입니다
          </h2>
          <p>
            트렌드 리더를 위한 운동화 쇼핑몰 , 페이시를 소개합니다
            <span>
              <IoIosArrowForward />
            </span>
          </p>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default TopBlog;
