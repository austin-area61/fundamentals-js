const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[3]);//prints undefined in the console


//updating elements inside arrays
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';


let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);


condiments = ['Mayo'];
console.log(condiments);// you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.

utensils[3] = 'Spoon';
console.log(utensils);


const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
newGroceryList = groceryList.shift();

groceryList.unshift('popcorn');
console.log(groceryList);


//Arrays and functs
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
