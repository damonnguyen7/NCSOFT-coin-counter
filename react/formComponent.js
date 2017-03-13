import React, { Component } from 'react';
import { defineCounter } from './redux/actions/index.js';
import { connect } from 'react-redux';

class FormComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this.updateInputValue = this.updateInputValue.bind(this);
    this.displayMinimumCoins = this.displayMinimumCoins.bind(this);
  }

  componentWillMount() {
    this.setState({
      inputValue: '',
      counterAValue: this.props.coins.coinA.counter.value,
      counterBValue: this.props.coins.coinB.counter.value,
      counterCValue: this.props.coins.coinC.counter.value,
      counterDValue: this.props.coins.coinD.counter.value
    });
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  displayMinimumCoins(e) {
    e.preventDefault();
    var totalValueOfCoins = this.state.inputValue;
    var reduxStore = this.props.coins;
    var positions = ['A', 'B', 'C', 'D'];
    var arrayOfCoins = positions.map(function(position) {
      return reduxStore['coin' + position].valueOfCoin.value;
    });

    function returnMinCoins(totalValue, arrayOfCoins) {
      var coins = arrayOfCoins.sort(function(a, b) {
        return b - a;
      });
      var results = {};
      for (var i = 0; i < coins.length; i++) {
        results[coins[i]] = 0;

      }
      coins.forEach(function(coin) {
        while (totalValue - coin >= 0) {
          totalValue = totalValue - coin;
          ++results[coin];
        }
      });
      return results;
    };

    var results = returnMinCoins(totalValueOfCoins, arrayOfCoins);

    for (var i = 0; i < positions.length; i++) {
      var position = positions[i];
      var counterValue = results[reduxStore['coin' + position].valueOfCoin.value];
      this.props.dispatch(defineCounter(position, counterValue, true));
    }
    return false;
  }

  render() {
    var inputValue = this.state.inputValue || '';
    return (
      <div className="col-xs-10 col-xs-offset-1">
        <form onSubmit={this.displayMinimumCoins}>
          <input type="text" className="form-control col-xs-12 text-align-right value-input main-form" value={this.state.inputValue} onChange={this.updateInputValue}></input>
          <input type="submit" value="calculate" className="calc-btn btn btn-default col-xs-12 main-form"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    coins: state
  }
};

export default connect(mapStateToProps)(FormComponent);
