import React from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";

export const Rate = () => {
  const { id } = useParams();
  const accomodation = data.find((item) => item.id === id);

  const rate = accomodation.rating;
  let displayRate = [];

  const star = <span className="emptyStar">&#9734;</span>;
  const fullStar = <span className="fullStar">&#9733;</span>;

  for (let i = 0; i <= 5; i++) {
    if (i < rate) {
      displayRate.push(fullStar);
    } else {
      displayRate.push(star);
    }

    // si i est inferieur a la rate alors ajouté une etoile remplie
    //sinon ajouté une etoile pas remplie
  }

  return <div className="rate">{displayRate}</div>;
};
