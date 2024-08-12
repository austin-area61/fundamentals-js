//Global variable scope
const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

/*logCitySkyline();*/
console.log(logCitySkyline());

//Local variable scope
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves);
