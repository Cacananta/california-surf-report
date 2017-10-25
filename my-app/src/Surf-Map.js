import React, { Component } from 'react';
import Map from './Map';

class SurfMap extends Component {

  AnyReactComponent = ({ text }) => <div>{text}</div>;

  render() {
    return (
      <div className="col-lg-8">
        <div className="card cardonesearch">
          <div className="bodyheaders">
            <h5 className="card-header">Surf Map:</h5>
          </div>
          <div className="my-3 ml-2 surfmap" id="map">
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