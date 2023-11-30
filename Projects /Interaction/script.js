const next = document.querySelector("#next-button");
const popupResponse = document.querySelector("#pop-up");
const popupDiv = document.querySelector(".pop-up-wrapper");
const bgWrapper = document.querySelector(".bg-wrapper");
const cubes = document.querySelectorAll(".cubes");
const countdownElement = document.getElementById("countdown"); // Add this line

const startResponse = ['These are items that represent the Palestinian culture ', 'You will have to look for the key of return', 
'The symbol of the key holds significant meaning in the context of the Nakba, as numerous Palestinians retained the keys to their homes when they were compelled to leave in 1948. This act of preserving keys has become a widespread representation of the longing and hope for return ' ];
const gameEndResponse = ['Congratulations! You found the keys of return'];
const loseResponse = ['Time is up! You lost. Refresh the page to retry.'];

let click = -1, track = 0;
let timer;
let countdown = 10; // Set your countdown time in seconds

next.addEventListener("click", sResponse);
bgWrapper.addEventListener("click", validate);

function startTimer() {
  timer = setInterval(function () {
    countdown--;
    countdownElement.textContent = countdown; // Update the countdown value in the HTML
    if (countdown <= 0) {
      clearInterval(timer);
      endGame(false); // Call endGame with false to indicate loss
    }
  }, 1000); // Update the timer every 1000 milliseconds (1 second)
}

function sResponse() {
  click++;
  popupResponse.innerHTML = startResponse[click];
  if (click ===3) {
    popupDiv.style.display = "none";
    for (let i = 0; i < cubes.length; i++) {
      cubes[i].style.display = "flex";
    }
    startTimer(); // Start the countdown when the cubes are displayed
  }
}

function validate(event) {
  if (event.target.id !== "keys") {
    alert("Wrong");
  } else {
    track++;
    event.target.style.background = "var(--green)";
    if (track === 4) {
      clearInterval(timer);
      endGame(true);
    }
  }
}

function endGame(isWin) {
  next.removeEventListener("click", sResponse);
  popupDiv.style.display = "flex";
  clearInterval(timer);
  if (isWin) {
    popupResponse.innerHTML = gameEndResponse;
    next.innerHTML = "Learn more about palestine ";
      next.addEventListener("click", function () {
        popupResponse.innerHTML = '<a href="https://decolonizepalestine.com/">Click here to learn more</a>';
        next.style.display = "none";
    });
  } else {
    popupResponse.innerHTML = loseResponse;
    next.style.display = "none";
  }
}
