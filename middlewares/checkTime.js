function checkTime(req, res, next) {

  const currentHouar = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  console.log(`Sei entrato alle: ${currentHouar}:${currentMinutes}`);

  // todo per permettere la continuazione del codice
  next();
}

module.exports = checkTime;
