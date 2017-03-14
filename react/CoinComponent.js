import React, { Component } from 'react';
import { defineCoin, defineCounter } from './redux/actions/index.js';
import { connect } from 'react-redux';

class CoinComponent extends Component {
  constructor() {
    super();
    this.state = {};
    this.displayCoinInput.bind = this.displayCoinInput.bind(this);
    this.setInputValueA = this.setInputValueA.bind(this);
    this.setInputValueB = this.setInputValueB.bind(this);
    this.setInputValueD = this.setInputValueD.bind(this);
    this.setInputValueC = this.setInputValueC.bind(this);
    this.stopProp = this.stopProp.bind(this);
    this.clearCounter = this.clearCounter.bind(this);
  }

  componentWillMount() {
    this.setState({
      inputValueA: this.props.coins.coinA.valueOfCoin.value,
      inputValueB: this.props.coins.coinB.valueOfCoin.value,
      inputValueC: this.props.coins.coinC.valueOfCoin.value,
      inputValueD: this.props.coins.coinD.valueOfCoin.value
    });
  }

  displayCoinInput() {
    var target = event.srcElement;
    this.props.dispatch(defineCoin(target.id, this.state['inputValue' + target.id], true));
    this.clearCounter();
  }

  defineCoinOnSubmit(position, proxy, event) {
    event.preventDefault();
    this.props.dispatch(defineCoin(position, Number(this.state['inputValue' + position]), false));
  }

  stopProp(e) {
    e.stopPropagation();
  }

  clearCounter() {
    var positions = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < positions.length; i++) {
      var position = positions[i];
      this.props.dispatch(defineCounter(position, 0, false));
    }
  }

  setInputValueA(e) {
    var isNumber = Number(e.target.value);
    if (!isNaN(isNumber)) {
      this.setState({
        inputValueA: e.target.value
      });
    } else {
      alert('Input value must be a number!');
    }
  }

  setInputValueB(e) {
    var isNumber = Number(e.target.value);
    if (!isNaN(isNumber)) {
      this.setState({
        inputValueB: e.target.value
      });
    } else {
      alert('Input value must be a number!');
    }
  }

  setInputValueC(e) {
    var isNumber = Number(e.target.value);
    if (!isNaN(isNumber)) {
      this.setState({
        inputValueC: e.target.value
      });
    } else {
      alert('Input value must be a number!');
    }
  }

  setInputValueD(e) {
    var isNumber = Number(e.target.value);
    if (!isNaN(isNumber)) {
      this.setState({
        inputValueD: e.target.value
      });
    } else {
      alert('Input value must be a number!');
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 xs-square">
            <div className="position-a text-center" onClick={this.displayCoinInput}>
              {
                //If show is true and counter value is greater than 0 ? show counter else return null
                this.props.coins.coinA.counter.show && this.props.coins.coinA.counter.value > 0 ?
                <div className="div-counter-value-container">
                  <div className="div-counter-value" id="A">{this.props.coins.coinA.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form
                this.props.coins.coinA.valueOfCoin.show ?
                <form className='position-a-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'A')}>
                  <input type="text" value={this.state.inputValueA} onClick={this.stopProp} onChange={this.setInputValueA} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-success col-xs-12" onClick={this.stopProp} />
                </form> : <div className="div-coin-value" id="A" onClick={this.displayCoinInput}>{this.props.coins.coinA.valueOfCoin.value}</div>
              }
            </div>
          </div>
          <div className="col-xs-6 xs-square">
            <div className="position-b text-center" onClick={this.displayCoinInput}>
              {
                //If show is true and counter value is greater than 0 ? show counter else return null
                this.props.coins.coinB.counter.show && this.props.coins.coinB.counter.value > 0 ?
                <div className="div-counter-value-container">
                  <div className="div-counter-value" id="B">{this.props.coins.coinB.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form
                this.props.coins.coinB.valueOfCoin.show ?
                <form className='position-b-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'B')}>
                  <input type="text" value={this.state.inputValueB} onClick={this.stopProp} onChange={this.setInputValueB} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-danger col-xs-12" onClick={this.stopProp} />
                </form> : <div className="div-coin-value" id="B" onClick={this.displayCoinInput}>{this.props.coins.coinB.valueOfCoin.value}</div>
              }
            </div>
          </div>
          <div className="col-xs-6 xs-square">
            <div className="position-c text-center" onClick={this.displayCoinInput}>
              {
                //If show is true and counter value is greater than 0 ? show counter else return null
                this.props.coins.coinC.counter.show && this.props.coins.coinC.counter.value > 0 ?
                <div className="div-counter-value-container">
                  <div className="div-counter-value" id="C">{this.props.coins.coinC.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form
                this.props.coins.coinC.valueOfCoin.show ?
                <form className='position-c-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'C')}>
                  <input type="text" value={this.state.inputValueC} onClick={this.stopProp} onChange={this.setInputValueC} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-primary col-xs-12" onClick={this.stopProp} />
                </form> : <div className="div-coin-value" id="C" onClick={this.displayCoinInput}>{this.props.coins.coinC.valueOfCoin.value}</div>
              }
            </div>
          </div>
          <div className="col-xs-6 xs-square">
            <div className="position-d text-center" onClick={this.displayCoinInput}>
              {
                //If show is true and counter value is greater than 0 ? show counter else return null
                this.props.coins.coinD.counter.show && this.props.coins.coinD.counter.value > 0 ?
                <div className="div-counter-value-container">
                  <div className="div-counter-value" id="D">{this.props.coins.coinD.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form
                this.props.coins.coinD.valueOfCoin.show ?
                <form className='position-d-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'D')}>
                  <input type="text" value={this.state.inputValueD} onClick={this.stopProp} onChange={this.setInputValueD} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-warning col-xs-12" onClick={this.stopProp} />
                </form> : <div className="div-coin-value" id="D" onClick={this.displayCoinInput}>{this.props.coins.coinD.valueOfCoin.value}</div>
              }
            </div>
          </div>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  coins: state
});

export default connect(mapStateToProps)(CoinComponent);
