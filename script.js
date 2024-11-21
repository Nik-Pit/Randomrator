"use strict";
//Naming variables
const names = [
  "Mike",
  "Linda",
  "Charlie",
  "Patricia",
  "Oliver",
  "Sophia",
  "Elon",
  "Amelia",
  "Bruce",
  "Natasha",
];
const verbs = [
  "is painting",
  "is eating",
  "is building",
  "is destroying",
  "is admiring",
  "is coding",
  "is riding",
  "is inventing",
  "is hugging",
  "is fixing",
];
const objects = [
  "a toothbrush",
  "a spaceship",
  "a snowman",
  "a slice of pizza",
  "a time machine",
  "a dinosaur",
  "a rubber duck",
  "an umbrella",
  "a robot",
  "a pillow",
];

//Creating functions
function generateRandomSentence() {
  const subject = names[Math.floor(Math.random() * names.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  let sample = `${subject} ${verb} ${object}.`;

  return sample;
}
//Give functionality
let sentence = document.getElementById("this");
let button = document.getElementById("button");
button.addEventListener("click", () => {
  sentence.innerHTML = generateRandomSentence();
});
