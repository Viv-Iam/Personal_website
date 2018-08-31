var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onmouseover = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SAM_0235.JPG') {
      myImage.setAttribute ('src','images/SAM_0234.JPG');
    } else {
      myImage.setAttribute ('src','images/SAM_0235.JPG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' you is cool';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  