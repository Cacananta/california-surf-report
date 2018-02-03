import React, { Component } from 'react';
import Map from './Map';

class SurfMap extends Component {

  AnyReactComponent = ({ text }) => <div>{text}</div>;

  render() {
    return (
      <div className="col-lg-8">
        <div id="search-card-two" className="card">
          <div className="bodyheaders">
            <h5 id="surf-map-text" className="card-header">Surf Map:</h5>
          </div>
          <div id="map" className="surfmap">
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