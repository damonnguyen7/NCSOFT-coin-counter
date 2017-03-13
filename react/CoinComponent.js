import React, { Component } from 'react';
import { defineCoin, defineCounter } from './redux/actions/index.js';
import { connect } from 'react-redux';

class CoinContainer extends Component {
  constructor() {
    super();
    this.state = {};
    this.displayCoinInput.bind = this.displayCoinInput.bind(this);
    this.setInputValueA = this.setInputValueA.bind(this);
    this.setInputValueB = this.setInputValueB.bind(this);
    this.setInputValueD = this.setInputValueD.bind(this);
    this.setInputValueC = this.setInputValueC.bind(this);
    this.stopProp = this.stopProp.bind(this);
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
  }

  defineCoinOnSubmit(position, proxy, event) {
    event.preventDefault();
    this.props.dispatch(defineCoin(position, Number(this.state['inputValue' + position]), false));
  }

  stopProp(e) {
    e.stopPropagation();
  }

  setInputValueA(e) {
    this.setState({
      inputValueA: e.target.value
    });
  }

  setInputValueB(e) {
    this.setState({
      inputValueB: e.target.value
    });
  }

  setInputValueC(e) {
    this.setState({
      inputValueC: e.target.value
    });
  }

  setInputValueD(e) {
    this.setState({
      inputValueD: e.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-6 xs-square">
            <div className="position-a text-center" onClick={this.displayCoinInput}>
              {
                //display counter:
                this.props.coins.coinA.counter.show && this.props.coins.coinA.counter.value > 0 ?
                <div className="span-counter-value-container">
                  <div className="span-counter-value">{this.props.coins.coinA.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form:
                this.props.coins.coinA.valueOfCoin.show ?
                <form className='position-a-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'A')}>
                  <input type="text" value={this.state.inputValueA} onClick={this.stopProp} onChange={this.setInputValueA} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-default col-xs-12" onClick={this.stopProp} />
                </form> : <div className="span-coin-value" id="A" onClick={this.displayCoinInput}>{this.props.coins.coinA.valueOfCoin.value}</div>
              }
            </div>
          </div>
          <div className="col-xs-6 xs-square">
            <div className="position-b text-center" onClick={this.displayCoinInput}>
              {
                //display counter:
                this.props.coins.coinB.counter.show && this.props.coins.coinB.counter.value > 0 ?
                <div className="span-counter-value-container">
                  <div className="span-counter-value" id="B">{this.props.coins.coinB.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form:
                this.props.coins.coinB.valueOfCoin.show ?
                <form className='position-b-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'B')}>
                  <input type="text" value={this.state.inputValueB} onClick={this.stopProp} onChange={this.setInputValueB} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-default col-xs-12" onClick={this.stopProp} />
                </form> : <div className="span-coin-value" id="B" onClick={this.displayCoinInput}>{this.props.coins.coinB.valueOfCoin.value}</div>
              }
            </div>
          </div>
          <div className="col-xs-6 xs-square">
            <div className="position-c text-center" onClick={this.displayCoinInput}>
              {
                //display counter:
                this.props.coins.coinC.counter.show && this.props.coins.coinC.counter.value > 0 ?
                <div className="span-counter-value-container">
                  <div className="span-counter-value" id="C">{this.props.coins.coinC.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form:
                this.props.coins.coinC.valueOfCoin.show ?
                <form className='position-c-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'C')}>
                  <input type="text" value={this.state.inputValueC} onClick={this.stopProp} onChange={this.setInputValueC} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-default col-xs-12" onClick={this.stopProp} />
                </form> : <div className="span-coin-value" id="C" onClick={this.displayCoinInput}>{this.props.coins.coinC.valueOfCoin.value}</div>
              }
            </div>
          </div>
          <div className="col-xs-6 xs-square">
            <div className="position-d text-center" onClick={this.displayCoinInput}>
              {
                //display counter:
                this.props.coins.coinD.counter.show && this.props.coins.coinD.counter.value > 0 ?
                <div className="span-counter-value-container">
                  <div className="span-counter-value" id="D">{this.props.coins.coinD.counter.value}</div>
                </div> : null
              }
              {
                //display coin value or form:
                this.props.coins.coinD.valueOfCoin.show ?
                <form className='position-d-input col-xs-6 col-xs-offset-3' onSubmit={this.defineCoinOnSubmit.bind(this, 'D')}>
                  <input type="text" value={this.state.inputValueD} onClick={this.stopProp} onChange={this.setInputValueD} className="form-control input-sm col-xs-3 text-center" />
                  <input type="submit" value="ok" className="btn btn-default col-xs-12" onClick={this.stopProp} />
                </form> : <div className="span-coin-value" id="D" onClick={this.displayCoinInput}>{this.props.coins.coinD.valueOfCoin.value}</div>
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

export default connect(mapStateToProps)(CoinContainer);
