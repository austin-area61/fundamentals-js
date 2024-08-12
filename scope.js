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
/*
Tightly scoping your variables will greatly improve code in several ways:
It will make your code more legible since the blocks will organize your code into discrete sections.
It makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line!
It’s easier to maintain your code, since your code will be modular.
It will save memory in your code because it will cease to exist after the block finishes running.
*/
