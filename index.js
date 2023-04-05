// Random phrase generator

// Define word lists
const creditscore = ["600", "650", "700", "750", "800", "850"];
const loanterm = ["15 years", "20 years", "30 years", "40 years"];
const downpayment = ["5%", "10%", "15%", "20%", "25%"];

// Pick a random word from a list
const pickRandomWord = (listOfWords) => {
  const randomNum = Math.floor(Math.random() * listOfWords.length);
  return listOfWords[randomNum];
};

// Generate a random phrase
function generateRandomPhrase() {
  return {
    creditscore: pickRandomWord(creditscore),
    loanterm: pickRandomWord(loanterm),
    downpayment: pickRandomWord(downpayment),
  };
}

// Display a random phrase on the page
function displayPhrase() {
  const { creditscore, loanterm, downpayment } = generateRandomPhrase();

  const creditscoreElem = document.querySelector(".creditscore");
  creditscoreElem.innerText = creditscore;

  const loantermElem = document.querySelector(".loanterm");
  loantermElem.innerText = loanterm;

  const downpaymentElem = document.querySelector(".downpayment");
  downpaymentElem.innerText = downpayment;
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