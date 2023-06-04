import React from 'react';
import axios from 'axios';

class ArtistForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      firstNameInput: "",
      lastNameInput: "",
      instrumentInput: "",
      genreInput: "",
      instrumentBrandInput: "",
      bandInput: ""
    }
  }

  submitArtist(event) {
    event.preventDefault();

    const formData = {
      firstName: this.state.firstNameInput,
      lastName: this.state.lastNameInput,
      instrument: this.state.instrumentInput,
      genre: this.state.genreInput,
      instrumentBrand: this.state.instrumentBrandInput,
      band: this.state.bandInput
    }

    axios.post("http://localhost:4000/artists", formData)
    .then((response) => {
      console.log(response);
      console.log(formData);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  
  render() { 
    return ( 
      <div className="row">
        <h1 className="center">Add a new Artist</h1>
        <form className="col s12" onSubmit={this.submitArtist.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" onChange={(event) => this.setState({firstNameInput: event.target.value})} type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" onChange={(event) => this.setState({lastNameInput: event.target.value})} type="text" />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="instrument" onChange={(event) => this.setState({instrumentInput: event.target.value})} type="text" />
              <label htmlFor="instrument">Instrument</label>
            </div>
            <div className="input-field col s6">
              <input id="genre" onChange={(event) => this.setState({genreInput: event.target.value})} type="text" />
              <label htmlFor="genre">Genre</label>
            </div>
          </div>
          <div className="row">
          <div className="input-field col s6">
              <input id="instrumentBrand" onChange={(event) => this.setState({instrumentBrandInput: event.target.value})} type="text" />
              <label htmlFor="instrumentBrand">Instrument Brand / Endorsement</label>
            </div>
            <div className="input-field col s6">
              <input id="band" onChange={(event) => this.setState({bandInput: event.target.value})} type="text" />
              <label htmlFor="band">Band or Project</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type='submit' name='action'>Add Artist</button>
        </form>
      </div>
    );
  }
}
 
export default ArtistForm;