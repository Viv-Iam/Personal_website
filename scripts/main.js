// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// $(window).scroll(function(){
//   $(".body").css("opacity", 1 - $(window).scrollTop() / 250);
// });

var button = document.querySelector('button');
button.onclick = function() {
  console.log("ClICKED");
  document.getElementById("about").scrollIntoView()
  // document.getElementById("btnhome").value = document.getElementById("home").value;
  // document.getElementById("btnhome").value = document.getElementById("home").value;
  // document.getElementById("btnhome").value = document.getElementById("home").value;
}

function myFunction() {
  document.getElementById("btnabout").value = document.getElementById("home").value;
}

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
  
  