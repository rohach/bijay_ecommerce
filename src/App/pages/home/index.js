import React from "react";
import "./Home.css";
import user from "../../components/assets/image/user.jpg";
import {
  firstImage,
  lastImage,
  secondImage,
  thirdImage,
} from "../../components/functions/imageFunction";

const index = () => {
  return (
    <div className="container">
      <div className="first__container">
        <div className="first__image">
          <img
            src={firstImage.image}
            alt={firstImage.alt}
            className="slider__inner__images"
          />
        </div>
        <div className="second__image">
          <img
            src={secondImage.image}
            alt={secondImage.alt}
            className="slider__inner__images"
          />
        </div>
        <div className="slider">
          <img src={user} alt="first__image" className="slider" />
        </div>
        <div className="third__image">
          <img
            src={thirdImage.image}
            alt={thirdImage.alt}
            className="slider__inner__images"
          />
        </div>
        <div className="fourth__image">
          <img
            src={lastImage.image}
            alt={lastImage.alt}
            className="slider__inner__images"
          />
        </div>
      </div>
      <div className="second__container">
        <div className="second__container__inner">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          iste laudantium fugiat sunt blanditiis rem, a perferendis
          necessitatibus autem quia ipsum libero numquam officia odit, quaerat
          nostrum veritatis alias nihil?
        </div>
      </div>
    </div>
  );
};

export default index;
