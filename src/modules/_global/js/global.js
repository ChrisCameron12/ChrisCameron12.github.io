
(function () {
  'use strict';

  // Global variables
  var squiz = {
    'fn': {},
    'vars': {},
    'language': "English"
  };

  //hide all mandarin text by default//
  const siteContent = document.querySelectorAll(".mandarin");
  for (let i = 0; i < siteContent.length; i++) {
    siteContent[i].hidden = true;
  }

}());


const checkTest = document.getElementById("mandarin");
const changeEng = document.getElementById("english");
changeEng.checked = true;


checkTest.onclick = function (squiz) {
  debugger;
  if (changeEng.checked == true) {
    changeEng.checked = false
  };
  if (checkTest.checked == true) {
    squiz.language = checkTest.value;

    if (squiz.language == "Mandarin") {

      const mandarin = document.querySelectorAll(".mandarin");
      const english = document.querySelectorAll(".english");
      for (let i = 0; i < mandarin.length; i++) {
        if (mandarin[i].lang == "ch") {
          mandarin[i].hidden = false;
        }
      }
      for (let i = 0; i < english.length; i++) {
        if (english[i].lang == "en") {
          english[i].hidden = true;
        }
      }
    };

  }
};

changeEng.onclick = function (squiz) {

  checkTest.checked = false;
  if (changeEng.checked == true) {
    squiz.language = checkTest.value;
    if (squiz.language == "Mandarin") {
      const mandarin = document.querySelectorAll(".mandarin");
      const english = document.querySelectorAll(".english");
      for (let i = 0; i < english.length; i++) {
        if (english[i].lang == "en") {
          english[i].hidden = false;
        }

        if (mandarin[i].lang == "ch") {

          mandarin[i].hidden = true;
        }

      }
    }
  }

}

//coundown//
const countDownDate = new Date("3 Dec, 2022 15:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("mins").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}, 1000);
//end-countdown//

//mobile nav//
document.getElementById("opensidenav").addEventListener('click', openSideNav);
document.getElementById("closesidenav").addEventListener('click', closeSideNav);
document.getElementById("mobile-nav-links").addEventListener('click', closeSideNav);

function openSideNav() {
  document.getElementById("sidenav").style.width = "100%";
}

function closeSideNav() {
  document.getElementById("sidenav").style.width = "0%";
}

//fade-in on scroll//
let elementsArray = document.querySelectorAll(".tile");
window.addEventListener('scroll', fadeIn);
function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 200;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}

fadeIn();