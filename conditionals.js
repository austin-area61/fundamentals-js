let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

//truthy and falsy statements
let wordCount = 14;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

let tool = 'marker';

// Using short circuit evaluation to assign writingUtensil variable
let writingUtensil = tool || 'pen';
/*
if({
  
}
*/
console.log(`The ${writingUtensil} is mightier than the sword.`);

//ternary operator
let isLocked = false;
/*
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
*/
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
/*
if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}
*/
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';
favoritePhrase ==='Love That!' ? console.log('I love that!') : console.log("I don't love that!");
/*
if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
*/
