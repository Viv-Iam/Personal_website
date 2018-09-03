// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// $(window).scroll(function(){
//   $(".body").css("opacity", 1 - $(window).scrollTop() / 250);
// });

// BUTTONS

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

// INTERESTS

// var list = document.getElementById('mentorship');
// button.onmouseover = function() {
//   var element = document.getElementById(id);
//   if (element === 'mentorship') {
//     document.getElementById('mentorship').style.display = "none";
//     document.getElementById('iot').style.display = "unset";
//   }
// }

var button = document.getElementById('mentorship');
button.onmouseover = function() {
  document.getElementById('mentorship').style.display = "none";
  document.getElementById('sport').style.display = "unset";
}

// var myHeading = document.querySelector('h3');
// myHeading.onmouseover = function() {
//   document.querySelector('h3').style.color = "blue";
// }


var myImage = document.querySelector('#imgvvn');

myImage.ondblclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vivian.jpg') {
      myImage.setAttribute ('src','images/vvn-mest.jpg');
    } else {
      myImage.setAttribute ('src','images/vivian.jpg');
    }
}

// var myButton = document.querySelector('button');
// var myHeading = document.querySelector('h1');

// function setUserName() {
//     var myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = myName + ' you is cool';
//   }

//   if(!localStorage.getItem('name')) {
//     setUserName();
//   } else {
//     var storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Mozilla is cool, ' + storedName;
//   }

//   myButton.onclick = function() {
//     setUserName();
//   }
  
  