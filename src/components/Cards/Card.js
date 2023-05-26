import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Card = ({ image, name, adresse, description, site }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">Adresse: {adresse}</p>
          <a href={site} className="card-link">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
