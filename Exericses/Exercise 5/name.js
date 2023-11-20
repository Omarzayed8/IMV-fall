let green = document.querySelector("#red");
 let plum = document.querySelector("#blue");
 let blue = document.querySelector("#orange");
 let container = document.querySelector("#interactionContainer");

 green.addEventListener("click", function () {
    container.style.backgroundColor = "red";
  });
  
  plum.addEventListener("click", function () {
    container.style.backgroundColor = "blue";
  });
  
  blue.addEventListener("click", function () {
    container.style.backgroundColor = "orange";
  });
//loop
let name = "Hello";
let size = 20;
let loopcontainer = document.querySelector('#loopContainer');
for (let step = 0; step < 4; step++) {
    let textBox = document.createElement("p");
    textBox.innerHTML = name;
    textBox.style.fontSize = size + "px";
    loopcontainer.appendChild(textBox);
    size++;

}
//increase
const textElement = document.getElementById("increaseText");
let fontSize = 25;
const maxSize = 100;
const timeInterval = 1000;
const fontSizeIncrement = 4;
function increaseFontSize() {
    if (fontSize < maxSize) {
        fontSize += fontSizeIncrement;
        textElement.style.fontSize = fontSize + "px";
    }
}
setInterval(increaseFontSize, timeInterval);
//conditions 
const square = document.getElementById("square");
document.addEventListener("mousemove", (event) => {
    changeColorBasedOnMousePosition(square, event);
});
function changeColorBasedOnMousePosition(element, event) {
    const x = event.clientX;
    const y = event.clientY;

    let r, g, b;

    const loopContainer = document.getElementById("loopContainer");
    const timeContainer = document.getElementById("timeContainer");
    const inputContainer = document.getElementById("inputContainer");
    const consoleContainer = document.getElementById("consoleContainer");
    const interactionContainer = document.getElementById("interactionContainer");
    const conditionContainer = document.getElementById("conditionContainer");

    if (x >= loopContainer.getBoundingClientRect().left &&
        x <= loopContainer.getBoundingClientRect().right &&
        y >= loopContainer.getBoundingClientRect().top &&
        y <= loopContainer.getBoundingClientRect().bottom) {
        r = 255;
        g = 0;
        b = 0;
    } else if (x >= timeContainer.getBoundingClientRect().left &&
        x <= timeContainer.getBoundingClientRect().right &&
        y >= timeContainer.getBoundingClientRect().top &&
        y <= timeContainer.getBoundingClientRect().bottom) {
        r = 0;
        g = 255;
        b = 0;
    } else if (x >= inputContainer.getBoundingClientRect().left &&
        x <= inputContainer.getBoundingClientRect().right &&
        y >= inputContainer.getBoundingClientRect().top &&
        y <= inputContainer.getBoundingClientRect().bottom) {
        r = 0;
        g = 0;
        b = 255;
    } else if (x >= consoleContainer.getBoundingClientRect().left &&
        x <= consoleContainer.getBoundingClientRect().right &&
        y >= consoleContainer.getBoundingClientRect().top &&
        y <= consoleContainer.getBoundingClientRect().bottom) {
        r = 255;
        g = 255;
        b = 0;
    } else if (x >= interactionContainer.getBoundingClientRect().left &&
        x <= interactionContainer.getBoundingClientRect().right &&
        y >= interactionContainer.getBoundingClientRect().top &&
        y <= interactionContainer.getBoundingClientRect().bottom) {
        r = 0;
        g = 255;
        b = 255;
    } else if (x >= conditionContainer.getBoundingClientRect().left &&
        x <= conditionContainer.getBoundingClientRect().right &&
        y >= conditionContainer.getBoundingClientRect().top &&
        y <= conditionContainer.getBoundingClientRect().bottom) {
        r = 2;
        g = 255;
        b = 6;
    } else {
        // default color white
        r = 255;
        g = 255;
        b = 255;
    }

    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
//input
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent REFRESH
    const inputField = document.getElementById("inputText");
    const charCount = document.getElementById("charCount");

    charCount.textContent = inputField.value.length;
});

console.log("Finally")
