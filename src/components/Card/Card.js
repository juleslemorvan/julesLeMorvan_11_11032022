import React from "react";

export const Card = ({ title, cover, onClick }) => {
  return (
    <div className="Card-Container">
      <div
        style={{ backgroundImage: `url(${cover})` }}
        onClick={onClick}
        className="card"
      >
        <h1 className="cardTitle">{title}</h1>
      </div>
    </div>
  );
};
