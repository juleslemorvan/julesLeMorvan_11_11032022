import React, { useState, useRef, useEffect } from "react";

export const Dropdown = ({ content, title }) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrolHeight}px`);
  }, []);

  const toggleState = () => setToggle(!toggle);

  return (
    <div className="dropdown">
      <button className="dropdown-visible" onClick={toggleState}>
        <span className="dropdownTitle">{title}</span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={toggle && "active"}
        >
          <path
            d="M1.3705 0.736755L0.0120851 2.10285L7.61003 9.69312L15.208 2.09518L13.8495 0.736756L7.61003 6.97628L1.3705 0.736755Z"
            fill="white"
          />
        </svg>
      </button>

      <div
        className={toggle ? "dropdown-toggle animated" : "dropdown-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p className="toggleContent" aria-hidden={toggle ? "true" : "false"}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default Dropdown;