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
