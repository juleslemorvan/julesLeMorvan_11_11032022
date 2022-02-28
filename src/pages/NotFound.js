import React from "react";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="content">
        <h1 className="title">404</h1>
        <br />
        <p className="content">Oups! La page que vous demandez n'éxiste pas.</p>
        <a href="/" className="anchor">
          Retourner sur la page d'accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
