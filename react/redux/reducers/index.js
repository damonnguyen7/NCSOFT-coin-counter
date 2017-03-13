var coinAInitialState = {
  valueOfCoin: {
    value: 25,
    show: false
  },
  counter: {
    value: 0,
    show: false
  }
};

var coinBInitialState = {
  valueOfCoin: {
    value: 10,
    show: false
  },
  counter: {
    value: 0,
    show: false
  }
};

var coinCInitialState = {
  valueOfCoin: {
    value: 5,
    show: false
  },
  counter: {
    value: 0,
    show: false
  }
};

var coinDInitialState = {
  valueOfCoin: {
    value: 1,
    show: false
  },
  counter: {
    value: 0,
    show: false
  }
};

export const coinAReducer = function(state = coinAInitialState, action) {
  switch(action.type) {
      case "DEFINE_COIN_A":
          state = {...state};
          state.valueOfCoin.value = action.value;
          state.valueOfCoin.show = action.show;
          return state;
          break;
      case "DEFINE_COUNTER_A":
          state = {...state};
          state.counter.value = action.value;
          state.counter.show = action.show;
          return state;
          break;
      default:
        return state;
  }
};

export const coinBReducer = function(state = coinBInitialState, action) {
  switch(action.type) {
      case "DEFINE_COIN_B":
          state = {...state};
          state.valueOfCoin.value = action.value;
          state.valueOfCoin.show = action.show;
          return state;
          break;
      case "DEFINE_COUNTER_B":
          state = {...state};
          state.counter.value = action.value;
          state.counter.show = action.show;
          return state;
          break;
      default:
        return state;
  }
};

export const coinCReducer = function(state = coinCInitialState, action) {
  switch(action.type) {
      case "DEFINE_COIN_C":
          state = {...state};
          state.valueOfCoin.value = action.value;
          state.valueOfCoin.show = action.show;
          return state;
          break;
      case "DEFINE_COUNTER_C":
          state = {...state};
          state.counter.value = action.value;
          state.counter.show = action.show;
          return state;
          break;
      default:
        return state;
  }
};

export const coinDReducer = function(state = coinDInitialState, action) {
  switch(action.type) {
      case "DEFINE_COIN_D":
          state = {...state};
          state.valueOfCoin.value = action.value;
          state.valueOfCoin.show = action.show;
          return state;
          break;
      case "DEFINE_COUNTER_D":
          state = {...state};
          state.counter.value = action.value;
          state.counter.show = action.show;
          return state;
          break;
      default:
        return state;
  }
};
