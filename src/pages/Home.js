import React from "react";
import { Card } from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
import data from "../data.json";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homeContent">
      <div className="backgroundOpacity">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="bg-gray">
        <div className="accomodations" id="allAccomodations">
          {data.map((item) => (
            <Card
              title={item.title}
              cover={item.cover}
              key={item.id}
              onClick={() => navigate(`/fiche-logement/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
