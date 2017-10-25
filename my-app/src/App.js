import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import SurfSelect from './Surf-Select';
import SurfMap from './Surf-Map';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      surfData: '',
      surfBreaksByCounty: '',
      surfSpot: '',
      surfConditions: '',
      surfConditionsShow: false,
      locationError: false,
      mapLocation: {
        zoom: 5,
        lat: 36.7783,
        lng: -119.4179
      }
    }

    this.onCountyChange = this.onCountyChange.bind(this);
    this.onSurfBreakChange = this.onSurfBreakChange.bind(this);
    this.populateSurfBreaks = this.populateSurfBreaks.bind(this);
    this.secondAxiosRequest = this.secondAxiosRequest.bind(this);
    this.updateMap = this.updateMap.bind(this);
    this.combineMethods = this.combineMethods.bind(this);
  }

  componentWillMount() {
    Axios.get("http://api.spitcast.com/api/spot/all")
      .then((res) => {
        var surfData = res.data
        this.setState({
          surfData: surfData
        })
      }).catch((err) => {
        console.log(err)
      })
  }

  onSurfBreakChange(surfSpot) {
    var newSurfBreaksByCounty = [...this.state.surfBreaksByCounty];
    var surfBreak = newSurfBreaksByCounty.find(spot =>
      spot.spot_name === surfSpot)
    // console.log(surfBreak);
    this.setState({ surfSpot: surfBreak });
  }

  onCountyChange(countySelected) {
    const newSurfData = [...this.state.surfData];
    const surfBreaksByCounty = newSurfData.filter(surfBreak =>
      surfBreak.county_name === countySelected);
    this.setState({ surfBreaksByCounty: surfBreaksByCounty });
  }

  populateSurfBreaks() {
    var newSurfBreaksByCounty = [...this.state.surfBreaksByCounty]
    return (
      newSurfBreaksByCounty.length === 0 ?
        <option className="dropdown-item">Search by Break...</option>
        : newSurfBreaksByCounty.map(spot => {
          return (
            <option className="dropdown-item" key={spot.spot_id}>{spot.spot_name}</option>
          )
        })
    )
  }

  combineMethods() {
    this.secondAxiosRequest();
    this.updateMap();
    this.setState({
      surfConditionsShow: true
    })
  }

  updateMap() {
    this.setState({
      mapLocation: {
        zoom: 14,
        lat: this.state.surfSpot.latitude,
        lng: this.state.surfSpot.longitude
      }
    })
  }

  secondAxiosRequest() {
    var surfSpotId = this.state.surfSpot.spot_id
    Axios.get("http://api.spitcast.com/api/spot/forecast/" + surfSpotId + "/")
      .then((res) => {
        var surfConditions = res.data
        this.setState({
          locationError: false,
          surfConditions: surfConditions
        })
      }).catch((err) => {
        this.setState({
          locationError: true
        })
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row align-items-start">
          <SurfSelect
            onCountyChange={this.onCountyChange}
            onSurfBreakChange={this.onSurfBreakChange}
            surfBreaksByCounty={this.state.surfBreaksByCounty}
            populateSurfBreaks={this.populateSurfBreaks}
            surfSpot={this.state.surfSpot}
            secondAxiosRequest={this.secondAxiosRequest}
            surfConditions={this.state.surfConditions}
            combineMethods={this.combineMethods}
            locationError={this.state.locationError}
            surfConditionsShow={this.state.surfConditionsShow}
          />
          <SurfMap
            surfSpot={this.state.surfSpot}
            surfConditions={this.state.surfConditions}
            mapLocation={this.state.mapLocation}
          />
        </div>
      </div>

    );
  }
}

export default App;

//API key: AIzaSyCYtYxEyYJHXnD7Fe0QommruR-0PWOCah0