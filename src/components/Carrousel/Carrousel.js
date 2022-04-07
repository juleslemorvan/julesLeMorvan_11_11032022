import { useState } from "react";

export const Carrousel = ({ data }) => {
  const [currImg, setCurrImg] = useState(0);

  const prevImg = () => {
    if (currImg === 0) {
      setCurrImg(data.length - 1);
    } else {
      setCurrImg((prev) => prev - 1);
    }
  };
  const nextImg = () => {
    if (currImg === data.length - 1) {
      setCurrImg(0);
    } else {
      setCurrImg((prev) => prev + 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${data[currImg]})` }}
      >
        {data.length > 1 && (
          <div className="left">
            <svg
              className="leftArrow"
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={prevImg}
            >
              <path
                d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                fill="white"
              />
            </svg>
          </div>
        )}
        <div className="center"></div>
        {data.length > 1 && (
          <div className="right">
            <svg
              width="48"
              height="80"
              viewBox="0 0 48 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={nextImg}
            >
              <path
                d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
