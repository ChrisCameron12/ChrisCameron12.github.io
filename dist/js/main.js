(self["webpackChunkv2"] = self["webpackChunkv2"] || []).push([[179],{

/***/ 579:
/***/ (function() {

"use strict";
// CSS


/***/ }),

/***/ 816:
/***/ (function() {

(function () {
  'use strict'; // Global variables

  var squiz = {
    'fn': {},
    'vars': {},
    'language': "English"
  }; //hide all mandarin text by default//

  var siteContent = document.querySelectorAll(".mandarin");

  for (var i = 0; i < siteContent.length; i++) {
    siteContent[i].hidden = true;
  }
})();

var checkTest = document.getElementById("mandarin");
var changeEng = document.getElementById("english");
changeEng.checked = true;

checkTest.onclick = function () {
  if (changeEng.checked == true) {
    changeEng.checked = false;
  }

  ;

  if (checkTest.checked == true) {
    squiz.language = checkTest.value;

    if (squiz.language == "Mandarin") {
      var mandarin = document.querySelectorAll(".mandarin");
      var english = document.querySelectorAll(".english");

      for (var i = 0; i < mandarin.length; i++) {
        if (mandarin[i].lang == "ch") {
          mandarin[i].hidden = false;
        }

        if (english[i].lang == "en") {
          english[i].hidden = true;
        }
      }
    }

    ;
  }
};

changeEng.onclick = function () {
  checkTest.checked = false;

  if (changeEng.checked == true) {
    if (squiz.language == "Mandarin") {
      var mandarin = document.querySelectorAll(".mandarin");
      var english = document.querySelectorAll(".english");

      for (var i = 0; i < english.length; i++) {
        if (english[i].lang == "en") {
          english[i].hidden = false;
        }

        if (mandarin[i].lang == "ch") {
          mandarin[i].hidden = true;
        }
      }
    }
  }
}; //coundown//


var countDownDate = new Date("3 Dec, 2022 15:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(distance % (1000 * 60) / 1000);
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("mins").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000); //end-countdown//
//mobile nav//

document.getElementById("opensidenav").addEventListener('click', openSideNav);
document.getElementById("closesidenav").addEventListener('click', closeSideNav);
document.getElementById("mobile-nav-links").addEventListener('click', closeSideNav);

function openSideNav() {
  document.getElementById("sidenav").style.width = "100%";
}

function closeSideNav() {
  document.getElementById("sidenav").style.width = "0%";
} //fade-in on scroll//


var elementsArray = document.querySelectorAll(".tile");
window.addEventListener('scroll', fadeIn);

function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 200;

    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
} //when user clicks image//


window.onload = function () {
  document.addEventListener('click', function (event) {
    if (event.target.matches('.modal-open')) {
      openImageGallery(event);
    }

    if (event.target.matches('.close')) {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
  }, false);
}; // When the user clicks anywhere outside of the modal, close it


window.onclick = function (event) {
  var modal = document.getElementById("myModal");

  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function openImageGallery(event) {
  //const lightboxImages = document.querySelectorAll('.image-modal-content img');
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

  var modalElement = function modalElement(element) {
    return document.querySelector(".imgmodal ".concat(element));
  };

  modalElement('img').src = event.target.src;
} // Get the <span> element that closes the modal


var span = document.getElementsByClassName("close")[0]; // When the user clicks on <span> (x), close the modal

span.onclick = function () {
  modal.style.display = "none";
}; // dom level event (good practice)
// let btn = document.querySelector('#btn');
// btn.onclick = function() {
//     alert('Clicked!');
// };


fadeIn();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(579), __webpack_exec__(816));
/******/ }
]);
//# sourceMappingURL=main.js.map