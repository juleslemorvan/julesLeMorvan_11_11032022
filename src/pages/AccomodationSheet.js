import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { Carrousel } from "../components/Carrousel/Carrousel";
import { Rate } from "../components/Rate/Rate";
import Dropdown from "../components/Dropdown/Dropdown";

const AccomodationSheet = () => {
  const { id } = useParams();
  const accomodation = data.find((item) => item.id === id);

  return (
    <>
      <Carrousel data={accomodation.pictures} key={accomodation.title} />
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
                <li className="tagItem" key={accomodation.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Rate />
          <div className="hostInfosMobile">
            <p className="hostName">{accomodation.host.name}</p>

            <div
              className="hostImg"
              style={{ backgroundImage: `url(${accomodation.host.picture})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="dropdown-container">
        <Dropdown title="description" content={accomodation.description} />
        <Dropdown title="Equipement" content={accomodation.equipments} />
      </div>
    </>
  );
};

export default AccomodationSheet;
