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


function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

//
function monitorCount( rows =5 , columns = 4) {
  return rows * columns;
};
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);
