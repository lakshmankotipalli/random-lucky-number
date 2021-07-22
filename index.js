function genLuckyNum (min, max) {
  if (typeof (max) !== 'number' && typeof (min) !== 'number') {
    min = 0;
    max = 0;
  }
  return (Math.random() * (max - min)) + min;
}

module.exports = genLuckyNum;