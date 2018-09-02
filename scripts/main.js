// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// $(window).scroll(function(){
//   $(".body").css("opacity", 1 - $(window).scrollTop() / 250);
// });

var button = document.getElementById('btnhome');
button.onclick = function() {
  document.getElementById('home').scrollIntoView()
}

var button = document.getElementById('btnabout');
button.onclick = function() {
  document.getElementById('about').scrollIntoView()
}

var button = document.getElementById('btninterests');
button.onclick = function() {
  document.getElementById('interests').scrollIntoView()
}

var button = document.getElementById('btncontact');
button.onclick = function() {
  document.getElementById('contact').scrollIntoView()
}

// var myHeading = document.querySelector('h3');
// myHeading.onmouseover = function() {
//   document.querySelector('h3').style.color = "blue";
// }


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vivian.jpg') {
      myImage.setAttribute ('src','images/rose.jpg');
    } else {
      myImage.setAttribute ('src','images/vivian.jpg');
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
  
  