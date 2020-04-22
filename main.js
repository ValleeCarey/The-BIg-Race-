let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true
let runnersAge = 18

if (runnersAge > 18 && registeredEarly) {
raceNumber += 1000
};

if (runnersAge > 18 && registeredEarly) {
console.log(`You will race at 9:30am ${raceNumber}`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00am ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will race at 12:30pm ${raceNumber}`)
} else {
  console.log('See registration desk')
};
