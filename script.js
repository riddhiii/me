const containerEl = document.querySelector(".container");
const careers = [
  "Student",
  "Engineer",
  "Learner",
  "Beginner",
  "Developer",
  "Designer",
  "Programmer",
  "Creator",
  "Innovator",
  "Thinker",
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  containerEl.innerHTML = `
  <h1>I am ${careers[careerIndex].slice(0, 1) === "I" || careers[careerIndex].slice(0, 1) === "E" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)} :)</h1>`;
  characterIndex++;
  if (characterIndex === careers[careerIndex].length + 1) {
    characterIndex = 0;
    careerIndex++;
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
  }
  setTimeout(updateText, 400);
}
