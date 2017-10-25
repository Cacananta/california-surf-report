import React, { Component } from 'react';

class SurfConditions extends Component {
  constructor() {
    super()

    this.overallCondition = this.overallCondition.bind(this);
    this.warningCondition = this.warningCondition.bind(this);
  }

  overallCondition(condition) {
    return (
    condition === 'pf' ? 'poor-fair' : condition === 'f' ? 'fair' : condition
    )
  }

  warningCondition(warning) {
    return (
      warning.length === 0 ? 'No warnings. Surf on!' : warning
    )
  }

  render() {
    return (
      <div >
        <div className="container report-pop-up">
          <div className="card col-12 surf-conditions">
            <div className="card-block">
              <h4 className="card-title">{this.props.surfSpot.spot_name}</h4>
              <p className="card-text"><strong>Surf size: </strong>3 feet</p>
            </div>
            <div>
            <ul className="list-group list-group-flush col-12 condition-list"><p><strong>Shape Details:</strong></p>
              <li className="list-group-item p-0 m-0"><p className="m-1"><strong>Swell: </strong>poor-fair</p></li>
              <li className="list-group-item p-0 m-0"><p className="m-1"><strong>Tide: </strong></p></li>
              <li className="list-group-item p-0 m-0"><p className="m-1"><strong>Wind: </strong></p></li>
            </ul>
            </div>
            <div>
              <h5 className="my-2 overall"><strong>Overall Conditions: </strong>Poor-fair</h5>
            </div>
            <p className="my-1.5"><strong>Warnings: </strong>None...Surf on!</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SurfConditions;