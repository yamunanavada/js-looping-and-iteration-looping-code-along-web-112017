// Code your solutions in this file

function printBadges(arr){
  for (let i = 0; i < arr.length; i++){
    console.log(`Welcome ${arr[i]}! You are employee #${i+1}.`);
  }
  return arr;
};

function flip () {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let count = 0;
  while(flip()){
    count++
  }
  return `You got ${count} tails in a row!`
};
