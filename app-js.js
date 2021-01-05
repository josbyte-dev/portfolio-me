/* PARTICULAS */
particlesJS(
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#1170DF", "#233944"]
      },
      "shape": {
        "type": ["image", "triangle", "edge"],
        "stroke": {
          "width": 1,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 7
        },
        "image": {
          "src": "coding.png",
          "width": 500,
          "height": 500
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.6
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
);


/* TILT */
function mediaQ() {
  if (x.matches) {
    let element = document.getElementById("ph-box");
    element.classList.remove("photo-tilt")
  }
}
let x = window.matchMedia("(min-width: 585px)");


/* SLIDES */


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let slides2 = document.getElementsByClassName("mySlides-2");
  for (i = 0; i < slides.length && slides2.length; i++) {
    slides[i].style.display = "none";
    slides2[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  if (slideIndex > slides2.length) { slideIndex = 1 }
  slides2[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
