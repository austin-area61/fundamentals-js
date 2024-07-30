const kelvin = 293; //created a constant for kelvin
let celsius = 293 - 273;//convert Kelvin to Celsius by subtracting 273 from the kelvin variable. 
let fahrenheit = celsius * (9/5) + 32;//calculated ahrenheit, then stored the answer in a variable named fahrenheit.
fahrenheit = Math.floor(fahrenheit);//Used the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
