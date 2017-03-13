import React, { Component } from 'react';
import { connect } from 'react-redux';

import CoinContainer  from './coinComponent.js';
import FormComponent from './formComponent.js';

class CoinCounterContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({
      store: this.props.store
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
          <div className="col-xs-12">
            <FormComponent />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    store: state
  }
};

export default connect(mapStateToProps)(CoinCounterContainer);
