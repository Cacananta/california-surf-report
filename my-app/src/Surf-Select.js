import React, { Component } from 'react';
import SurfConditions from './Surf-Conditions';

class SurfSelect extends Component {
  constructor(props) {
    super(props);

    this.selectCounty = this.selectCounty.bind(this);
    this.selectSurfBreak = this.selectSurfBreak.bind(this);
  }

  selectCounty() {
    const list = document.getElementById('County-selector');
    const countySelected = list.options[list.selectedIndex].text;
    this.props.onCountyChange(countySelected);
  }

  selectSurfBreak() {
    const list = document.getElementById('Surfbreak-selector');
    const surfBreakSelected = list.options[list.selectedIndex].text;
    this.props.onSurfBreakChange(surfBreakSelected);
    // this.props.secondAxiosRequest();
  }

  render() {
    return (
      <div className="col-lg-4">
        <div className="card test search-header cardonesearch">
          <div className="bodyheaders">
            <h5 className="card-header">Search Surf Report:</h5>
          </div>
          <div className="p-2">
            <p className="selectcounty">Select County:</p>
            <select className="col-12 dropdown dropdown-toggle" id="County-selector" onChange={this.selectCounty}>
              <option className="dropdown-item">Search by County...</option>
              <option className="dropdown-item">San Diego</option>
              <option className="dropdown-item">Orange County</option>
              <option className="dropdown-item">Ventura</option>
              <option className="dropdown-item">Santa Barbara</option>
              <option className="dropdown-item">San Luis Obispo</option>
              <option className="dropdown-item">Monterey</option>
              <option className="dropdown-item">Santa Cruz</option>
              <option className="dropdown-item">San Mateo</option>
              <option className="dropdown-item">San Francisco</option>
              <option className="dropdown-item">Marin</option>
              <option className="dropdown-item">Sonoma</option>
              <option className="dropdown-item">Mendocino</option>
              <option className="dropdown-item">Humboldt</option>
              <option className="dropdown-item">Del Norte</option>
            </select>
            <p className="selectcounty">Select Surf Break:</p>
            <select className="col-12 dropdown dropdown-toggle" id="Surfbreak-selector" onChange={this.selectSurfBreak}>
              {/*POPULATE SURF BREAKS */}
               {this.props.populateSurfBreaks()} 
            </select>
          </div>
          <div className="p-2">
            <button type="button" className="btn btn-primary btn-sm col-12" onClick={this.props.combineMethods}>See Conditions</button>
          </div>
          <SurfConditions
            surfSpot={this.props.surfSpot}
            surfConditions={this.props.surfConditions}
          />
        </div>
      </div>
    )
  }
}

export default SurfSelect;