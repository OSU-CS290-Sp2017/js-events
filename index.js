window.addEventListener('click', function (event) {
  console.log("==The window was clicked:", event.target);
});

var firstBox = document.querySelector('.box');
firstBox.addEventListener('click', function () {
  console.log("==The first box was clicked");
});

function callOnce() {
  console.log("==inside callOnce()");
  firstBox.removeEventListener('click', callOnce);
}

firstBox.addEventListener('click', callOnce);
firstBox.onclick = function () {
  console.log("==first onclick handler was called");
}

firstBox.onclick = function () {
  console.log("==second onclick handler was called");
}

function handleBoxClick (event) {
  // console.log("box clicked:", event);
  event.currentTarget.classList.toggle('highlighted');
  console.log("==inside handleBoxBlick, target:", event.target);
  console.log("==inside handleBoxBlick, currentTarget:", event.currentTarget);
}

var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', handleBoxClick);
}

function handleButtonClick (event) {
  console.log("==button clicked, target:", event.target);
  event.stopPropagation();
}

var buttons = document.getElementsByClassName('in-box-button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleButtonClick);
}

var googleLink = document.getElementById('google-link');
googleLink.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("==Google link clicked:", event.currentTarget);
});

function delegatedListener (event) {
  console.log("==delegated event currentTarget:", event.currentTarget);
  console.log("==delegated event target:", event.target);
}

var boxContainer = document.getElementById('box-container');
boxContainer.addEventListener('click', delegatedListener);
