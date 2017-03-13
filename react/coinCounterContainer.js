import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    console.log('state from redux store: ', this.state.coins);
    return (
      <div className="container main-container">
        <div className="row">
          <h1 className="col-xs-12 text-center">Coin Counter</h1>
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
