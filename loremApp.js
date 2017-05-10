var loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var loremWords = loremText.replace(/[\.,]/g, '').toLowerCase().split(' ');

var currentWord = 0;

console.log(loremWords);

function generateWordElement(word, useEm) {
  var wordElem = document.createElement('span');
  wordElem.classList.add('word');

  var wordElemText = document.createTextNode(word);
  var elemToPutTextInto = wordElem;
  if (useEm) {
    var emElem = document.createElement('em');
    wordElem.appendChild(emElem);
    elemToPutTextInto = emElem;
  }

  elemToPutTextInto.appendChild(wordElemText);

  return wordElem;
}

function handleAddWordButtonClick(event) {
  var word = loremWords[currentWord];
  var useEm = !((currentWord + 1) % 4);
  var wordElem = generateWordElement(word, useEm);

  var container = event.currentTarget.parentNode.parentNode;
  var wordsContainer = container.querySelector('.words-container');

  wordsContainer.appendChild(wordElem);

  currentWord = (currentWord + 1) % loremWords.length;
}

var addWordButtons = document.getElementsByClassName('add-word-button');
for (var i = 0; i < addWordButtons.length; i++) {
  addWordButtons[i].addEventListener('click', handleAddWordButtonClick);
}
