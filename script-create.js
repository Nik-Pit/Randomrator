"use strict";

// Select elements
const form = document.getElementById("sentence-form");
const output = document.getElementById("output");

// Select input elements
const nameInput = document.getElementById("name");
const verbInput = document.getElementById("verb");
const objectInput = document.getElementById("object");

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get user input
  const name = nameInput.value.trim();
  const verb = verbInput.value.trim();
  const object = objectInput.value.trim();

  const resetInput = () => {
    nameInput.value = "";
    verbInput.value = "";
    objectInput.value = "";
    output.textContent = "";
  };

  if (name && verb && object) {
    const customSentence = `${name} ${verb} ${object}.`;
    output.textContent = `Your Sentence: ${customSentence}`;

    const reset = document.createElement("button");
    reset.classList.add("reset");
    reset.innerText = "Reset";

    if (!output.querySelector(".reset")) {
      output.appendChild(reset);
    }

    reset.addEventListener("click", resetInput);
  } else {
    output.textContent = "Please fill out all fields to create a sentence.";
  }
});
