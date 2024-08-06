function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
/*
totalCost = 16;
console.log(totalCost);
*/


//defining a function using a function expression
const plantNeedsWater = function (day) {
  if( day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday')); //Should log false
