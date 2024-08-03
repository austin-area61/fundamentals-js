function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
//calling a function
sayThanks();
sayThanks();
sayThanks();

//assigning arguments inside parameters in functions
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');

//default parameters i.e When the code calls greeting('Austin') the value of the argument is passed in and, 'Austin', will override the default parameter of 'stranger' to log 'Hello, Austin!' to the console.
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Austin') // Output: Hello, Austin!
greeting() // Output: Hello, stranger!
