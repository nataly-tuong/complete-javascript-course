let country = "United States of America";
let continent = "North America";
let population = "340.1";

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "English";

console.log(population / 2);
console.log(population++);
console.log(population > 6);
console.log(population < 33);
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// Challenge #1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);

const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

// Challenge #2
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Challenge #3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else {
  console.log("Koalas win the trophy");
}

// Challenge #4
const bill = 275;

const tip = (bill<=300 && bill>50) ? bill*0.15 :
bill*0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}');