import React from 'react';
import axios from 'axios';
import './App.css';
import ArtistList from './Artist/ArtistList';
import ArtistSingle from './Artist/ArtistSingle';
import ArtistForm from './Artist/ArtistForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      artists: [],
      currentArtist: {},
    }
    this.updateCurrentArtist = this.updateCurrentArtist.bind(this);
  }

  componentDidMount(){
    const url = 'http://localhost:4000/artists';

    axios.get(url)
      .then((response) => {
        this.setState({artists: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  updateCurrentArtist (item) {
    this.setState({
      currentArtist: item,
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
        <nav>
          <div className="nav-wrapper grey darken-4">
            <a href="/" className="brand-logo">Artists To Know</a>
          </div>
        </nav>
        </div>
        <div className="row">
          <div className="col s3"><ArtistList artists={this.state.artists} 
          updateCurrentArtist={this.updateCurrentArtist} />
          </div>
          <div className="col s9"><ArtistSingle artist={this.state.currentArtist}/></div>
        </div>
        <div className="row">
          <div className="col s12"><ArtistForm /></div>
        </div>
      </div>
    );
  }
}

export default App;