import React, { useState } from "react";

export const Dropdown = ({ content, title }) => {
  const [toggle, setToggle] = useState(false);

  const toggleState = () => setToggle(!toggle);

  return (
    <div className="dropdown" key={{ title }}>
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

      {toggle && (
        <div>
          <p className="toggleContent" aria-hidden={toggle ? "true" : "false"}>
            {Array.isArray(content)
              ? content.map((item) => <p>{item}</p>)
              : content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
