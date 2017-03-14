import React, { Component } from 'react';

import CoinComponent  from './coinComponent.js';
import FormComponent from './formComponent.js';

class CoinCounterContainer extends Component {
  render() {
    return (
      <div className="container main-container">
        <div className="row">
          <h1 className="col-xs-12 text-center main-title">Coin Counter</h1>
          <div className="col-xs-12">
            <CoinComponent />
          </div>
          <div className="col-xs-12">
            <FormComponent />
          </div>
        </div>
      </div>
    );
  }
}


export default CoinCounterContainer;
