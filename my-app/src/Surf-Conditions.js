import React, { Component } from 'react';

class SurfConditions extends Component {

  render() {
    return (

      (this.props.surfConditionsShow && this.props.surfConditionsShow)

        ?

        (this.props.locationError && this.props.locationError)

          ?

          <div >
            <div className="container report-pop-up">
              <div className="card col-12 surf-conditions">
                <div className="card-block">
                  <h3 id="bummer-surf-spot" className="card-title">{this.props.surfSpot.spot_name}</h3>
                  <h3 id="bummer">Bummer! There's no surf information for this break.</h3>
                </div>
              </div>
            </div>
          </div>

          :

          <div >
            <div id="report-pop-up" className="container">
              <div className="card col-12 surf-conditions">
                <div className="card-block">
                  <h3 id="surf-spot-name" className="card-title">{this.props.surfConditions && this.props.surfConditions[0].spot_name}</h3>
                  <h4 id="card-text-h4" className="card-text"><strong>Surf size: </strong>{this.props.surfConditions && this.props.surfConditions[0].size < 2 ? this.props.surfConditions && this.props.surfConditions[0].size + ' foot' : this.props.surfConditions && this.props.surfConditions[0].size + ' feet'}</h4>
                </div>
                <div>
                  <ul className="list-group list-group-flush col-12"><p id="shape-details"><strong>Shape Details:</strong></p>
                    <li id="swell" className="list-group-item p-0 m-0"><p className="m-1"><strong>Swell:  </strong>{this.props.surfConditions && this.props.surfConditions[0].shape_detail.swell}</p></li>
                    <li id="tide" className="list-group-item p-0 m-0"><p className="m-1"><strong>Tide:  </strong>{this.props.surfConditions && this.props.surfConditions[0].shape_detail.tide}</p></li>
                    <li id="wind" className="list-group-item p-0 m-0"><p className="m-1"><strong>Wind:  </strong>{this.props.surfConditions && this.props.surfConditions[0].shape_detail.wind}</p></li>
                  </ul>
                </div>
                <div>
                  <h3 id="report-h3"className="my-2"><strong>Overall Conditions: </strong>{this.props.surfConditions && this.props.surfConditions[0].shape_full}</h3>
                </div>
                <p className="my-1.5 warning-info"><strong id="surf-warning" className="warning-label">Warnings: </strong>{this.props.surfConditions && this.props.surfConditions[0].warnings.length === 0 ? "No Warnings. Surf on!" : this.props.surfConditions && this.props.surfConditions[0].warnings}</p>
              </div>
            </div>
          </div>

        :
        
        <div></div>

    )
  }
}

export default SurfConditions;