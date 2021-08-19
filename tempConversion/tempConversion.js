const ftoc = function(x) {
  return Math.round(((x-32)/1.8) * 10)/10;
};

const ctof = function(x) {
  return Math.round(((x*1.8)+32) * 10)/10;
};

module.exports = {
  ftoc,
  ctof
};
