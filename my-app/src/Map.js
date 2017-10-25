import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


//https://github.com/istarkov/google-map-react <-- Google Map API repo

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {

  render() {
    return (
      <GoogleMapReact
        center={{
          lat: this.props.mapLocation.lat,
          lng: this.props.mapLocation.lng
          }}
        zoom={this.props.mapLocation.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        /> */}
      </GoogleMapReact>
    );
  }
}

export default Map;