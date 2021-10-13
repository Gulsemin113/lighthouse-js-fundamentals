const ages = [
  ['Suzie', 1983, 2021],
  ['Mirana', 1983, 2021],
  ['Ferdinand', 1988, 2021]
];

function ageCalculator(name,yearOfBirth,currentYear){
  let age = currentYear - yearOfBirth;
  let notice = name + " is " + age + " years old.";
  return notice;
}
console.log(ageCalculator("Suzie", 1983, 2021));
console.log(ageCalculator("Miranda", 1983, 2021));
console.log(ageCalculator("Ferdinand", 1988, 2021));