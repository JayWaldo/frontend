import React from 'react';

const ArtistList = (props) => {
  return ( 
  <div>
    <ul className="collection with-header">
      <li className="collection-header"><h4>Artists</h4></li>
        {props.artists.map((item) => (
        <a href="#!" className="collection-item" key={item._id}
        onClick={props.updateCurrentArtist.bind(this,item)}>{item.firstName} {item.lastName}</a>
      ))}
    </ul>
  </div> 
  );
}
 
export default ArtistList; 