// Random phrase generator

// Define word lists
const creditscore = ["600", "650", "700", "750", "800", "850"];

// Pick a random word from a list
const pickRandomWord = (listOfWords) => {
  const randomNum = Math.floor(Math.random() * listOfWords.length);
  return listOfWords[randomNum];
};

// Generate a random phrase
function generateRandomPhrase() {
  return {
    creditscore: pickRandomWord(creditscore),
  };
}

// Display a random phrase on the page
function displayPhrase() {
  const { creditscore} = generateRandomPhrase();

  const creditscoreElem = document.querySelector(".creditscore");
  creditscoreElem.innerText = creditscore;
}

// Set up event listener on button
function listenToClicks() {
  const button = document.querySelector(".generate-phrase");
  button.addEventListener("click", () => {
    displayPhrase();
  });
}

// Call listenToClicks to start listening for button clicks
listenToClicks();