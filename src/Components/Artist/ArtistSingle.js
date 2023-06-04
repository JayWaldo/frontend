import React from 'react';

const ArtistSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img async src="public/jaredOPT.jpg" alt=''/>
            <span className="card-title">{props.artist.firstName} {props.artist.lastName}</span>
          </div>
          <div className="card-content">
            <p>Role: {props.artist.instrument}  | Genre: {props.artist.genre}</p>
            <p>Brand: {props.artist.instrumentBrand}</p>
            <p>Speed: {props.artist.speed} | Technical: {props.artist.technical} | Rythmic: {props.artist.rythmic}</p>
          </div>
          <div className="card-action">
            Band: {props.artist.band}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ArtistSingle; 