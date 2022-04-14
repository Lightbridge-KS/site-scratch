// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// Click then alert
// document.querySelector("html").addEventListener('click', function () {
//     alert("Ouch I've been clicked")
// })


let myHTML = document.querySelector("h1");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");

// Alert when click H1
myHTML.addEventListener("click", () => {
  alert("You've clicked at " + myHeading.textContent);
});

// Change Image
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/octocat.png") {
    myImage.setAttribute("src", "images/octocat2.png");
  } else {
    myImage.setAttribute("src", "images/octocat.png");
  }
};

// Set User Name

function greet(name) {
  return "Hi there, " + name;
}

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName(); // prompt again until user set it
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = greet(myName);
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = greet(storedName);
}

myButton.onclick = function () {
  setUserName();
};
