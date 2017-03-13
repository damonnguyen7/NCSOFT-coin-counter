import React, { Component } from 'react';
import { connect } from 'react-redux';

import CoinContainer  from './CoinComponent.js';

class CoinCounterContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      coins: this.props.coins
    });
  }

  render() {
    return (
      <div className="container main-container">
        <div className="row">
          <h1 className="col-xs-12 text-center">Coin Counter</h1>
          <div className="col-xs-12">
            <CoinContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    coins: state
  }
};

export default connect(mapStateToProps)(CoinCounterContainer);
