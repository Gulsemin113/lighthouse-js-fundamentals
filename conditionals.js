const cold = false;

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

const temperature = 12;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}



const whichSchool  = function (age) {
  // For ages 1 to 12 returns Elementary School
  if(age >= 13 && age < 19){
    console.log("Secondary School");
    //For ages 13 to 18 returns Secondary School
  }else if(age >= 19 && age <= 100){
    console.log(" LightHouse Labs");
    //For ages 19 to let's say 100 returns Lighthouse Labs
  }else if (age >= 1 && age < 13){
    console.log("Elementary School");
  }
}
 
console.log("I am 19. Which school should I go to?");
console.log(whichSchool(19));



