const question1 =
  "When you were working in the diagram, what felt confusing or unclear?";
const question2 =
  "Walk me through what you expected to happen vs. what actually happened?";
const question3 =
  "What would make the call handling diagram easier for you to use or grasp/learn?";
const question4 =
  "If you could change anything about how this works, what would it be?";
const question5 =
  "Imagine there was a simpler way to get started, what would that look like to you?";
const question6 =
  "When you first set up, what matters more to you: getting started quickly, or being able to customize every detail?";
const question7 =
  "After finishing the onboarding steps, how ready do/did you feel to forward your calls?";
const question8 =
  "What would have helped you feel more ready to forward your calls?";
const question9 = "What surprised you (good or bad) while setting this up?";
const question10 =
  "If you were explaining this setup to someone, what part would be the hardest to describe?";

const questions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];

function getRandomQuestions(num) {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

const button = document.getElementById("generate-btn");
const container = document.getElementById("questions-container");

button.addEventListener("click", () => {
  const newQuestions = getRandomQuestions(2);

  container.style.display = "flex";

  // clear container + insert new <p> for each question
  container.innerHTML = "";
  newQuestions.forEach((q) => {
    const p = document.createElement("p");
    p.classList.add("question");
    p.textContent = q;
    container.appendChild(p);
  });

  // update button text
  button.textContent = "Generate More";
});
