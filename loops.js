const vacationSpots = ['Spain','Japan','North Pole'];
//console.log(vacationSpots[0])
//console.log(vacationSpots[1])
//console.log(vacationSpots[2])
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + vacationSpots[i]);
}

for (let counter = 5; counter <= 10; counter++) {
  console.log(counter);
}
//in reverse
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

const bobsFollowers = ['Janet','Makena','Joan','John'];
const tinasFollowers = ['Janet','Makena','Wojak'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
