import React from "react";

import { useState } from "react";

const About = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="about">
      <div className="banner"></div>
      <div className="accordion">
        {aboutData.map((item, i) => (
          <div className="item">
            <div className="titleContainer" onClick={() => toggle(i)}>
              <h2 className="title">{item.title}</h2>
              <svg
                width="25"
                height="15"
                viewBox="0 0 25 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  transform: selected === i ? "rotate(0deg)" : "rotate(180deg)",
                }}
                className="arrow-down"
              >
                <path
                  d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className={selected === i ? "content show" : "content"}>
              <div className="elem">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const aboutData = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Securité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default About;
