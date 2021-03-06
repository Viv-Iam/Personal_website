/*=============================================================
                          ondblclick image
=============================================================*/
var myImage = document.querySelector('#imgvvn');

myImage.ondblclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/vivian.jpg') {
    myImage.setAttribute('src', 'images/vvn-mest.jpg');
  } else {
    myImage.setAttribute('src', 'images/vivian.jpg');
  }
}

/*=============================================================
                          onclick top buttons
=============================================================*/

// var button = document.querySelector('btnhome');
// button.onclick = function () {
//   var myButtonId = button.document.getAttribute(id);

//   if(myButtonId === 'btnhome') {
//     console.log('CLICKED');
//     document.getElementById('home').scrollIntoView()
//   }
// }

var button = document.getElementById('btnhome');
button.onclick = function () {
  document.getElementById('home').scrollIntoView()
}

var button = document.getElementById('btnabout');
button.onclick = function () {
  document.getElementById('about').scrollIntoView()
}

var button = document.getElementById('btninterests');
button.onclick = function () {
  document.getElementById('interests').scrollIntoView()
}

var button = document.getElementById('btncontact');
button.onclick = function () {
  document.getElementById('contact').scrollIntoView()
}

/*=============================================================
                          onmouseover interest
=============================================================*/
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }



var element = document.getElementById('mentorship');
element.onmouseover = function () {
  document.getElementById('mentorship').style.display = "none";
  document.getElementById('sport').style.display = "unset";
}

/*=============================================================
                          onclick theme button
=============================================================*/
var changeTheme = document.getElementById('btntheme');
changeTheme.onclick = function () {
  document.getElementById('html').style.backgroundColor = "#23B6B9";
  document.getElementById('home').style.backgroundColor = "#ED9A8C";
  document.getElementById('buttons').style.backgroundColor = "inherit";
  document.getElementById('btnhome').style.backgroundColor = "#23B6B9";
  document.getElementById('btnhome').style.borderColor = "#23B6B9";
  document.getElementById('btnabout').style.backgroundColor = "#23B6B9";
  document.getElementById('btnabout').style.borderColor = "#23B6B9";
  document.getElementById('btninterests').style.backgroundColor = "#23B6B9";
  document.getElementById('btninterests').style.borderColor = "#23B6B9";
  document.getElementById('btncontact').style.backgroundColor = "#23B6B9";
  document.getElementById('btncontact').style.borderColor = "#23B6B9";
  document.getElementById('btntheme').style.backgroundColor = "#23B6B9";
  document.getElementById('btntheme').style.borderColor = "#23B6B9";
  document.getElementById('contact').style.backgroundColor = "#ED9A8C";
  document.getElementById('icons').style.display= "none";
  document.getElementById('icons1').style.display = "unset";
  document.getElementById('about-bg-diagonal').style.borderLeftColor = "#23B6B9";
  document.getElementById('interest-bg-diagonal').style.borderRightColor = "#23B6B9";

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