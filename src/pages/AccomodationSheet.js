import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Rate } from "../components/Rate/Rate";
import Dropdown from "../components/Dropdown/Dropdown";

/* 

React Router
useNavigate => renvoie une fonction qui prend en paramètre la future route
      Exemple : const navigate = useNavigate()  ..... navigate('/maRoute/123')

useParams => Renvoie les paramètres passés dans la route
      Exemple : const params = useParams() ..... // params = { id : 123 }
*/

const AccomodationSheet = () => {
  const { id } = useParams();
  const accomodation = data.find((item) => item.id === id);
  console.log(accomodation);

  return (
    <>
      <Carrousel data={accomodation.pictures} />
      <div className="infos">
        <div className="firstLigne">
          <h1 className="accomodationTitle">{accomodation.title}</h1>
          <div className="hostInfos">
            <p className="hostName">{accomodation.host.name}</p>

            <div
              className="hostImg"
              style={{ backgroundImage: `url(${accomodation.host.picture})` }}
            ></div>
          </div>
        </div>
        <h3 className="accomodationLocation">{accomodation.location}</h3>
        <div className="secondLigne">
          <div className="tags">
            <ul className="tagList">
              {accomodation.tags.map((tag) => (
                <li className="tagItem">{tag}</li>
              ))}
            </ul>
          </div>
          <Rate />
        </div>
      </div>
      <div className="dropdown-container">
        <Dropdown title="description" content={accomodation.description} />
        <Dropdown title="Equipement" content={accomodation.equipement} />
      </div>
    </>
  );
};

export default AccomodationSheet;