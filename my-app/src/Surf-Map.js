import React, { Component } from 'react';
import Map from './Map';

class SurfMap extends Component {

  AnyReactComponent = ({ text }) => <div>{text}</div>;

  render() {
    return (
      <div className="col-lg-8">
        <div id="search-card-two" className="card">
          <div className="bodyheaders">
            <h5 className="card-header">Surf Map:</h5>
          </div>
          <div id="map" className="my-3 ml-2 surfmap">
            <Map 
            surfSpot={this.props.surfSpot}
            surfConditions={this.props.surfConditions}
            mapLocation={this.props.mapLocation}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SurfMap