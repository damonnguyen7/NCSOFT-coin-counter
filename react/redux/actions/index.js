export const defineCoin = function(position, value, show) {
  // console.log('positon: ', position, 'value: ', value, 'show: ', show);
  return {
    type: 'DEFINE_COIN_' + position,
    value: value,
    show: show
  };
}

export const defineCounter = function(position, value, show) {
  return {
    type: 'DEFINE_COUNTER_' + position,
    value: value,
    show: show
  };
}
