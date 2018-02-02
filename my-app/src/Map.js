import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


//https://github.com/istarkov/google-map-react <-- Google Map API repo

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 30, width: 30, top: -20, left: -30,    
  }}>
    {text}
  </div>
);

class Map extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
        <GoogleMapReact
          center={{
            lat: this.props.mapLocation.lat,
            lng: this.props.mapLocation.lng
          }}
          zoom={this.props.mapLocation.zoom}
        >
          <AnyReactComponent
            lat= {this.props.mapLocation.lat}
            lng={this.props.mapLocation.lng}
            text={<p id="picture-text"><img src="https://westernthm.files.wordpress.com/2011/11/surfing1.jpg" height="40px" alt="surfer"></img>{this.props.surfSpot.spot_name}</p>}
            /> 
        </GoogleMapReact>
    );
  }
}

export default Map;