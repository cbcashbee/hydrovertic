let slideIndex = 2;

let grafkilder = [
  "../images/grafbar.png",
  "../images/graflinje.png",
  "../images/grafomrade.png"
];

// Simpelt array med billedkilder, kan udvides efter behov
console.log(grafkilder)

showSlides(slideIndex);

// frem/tilbage knapperne
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Billedekontrol
function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i;
  let graferne = document.getElementsByClassName("graferne");
  let prikker = document.getElementsByClassName("prik");
  if (n > graferne.length) {slideIndex = 1}
  else if (n<1) {slideIndex = graferne.length}
  for (i = 0; i < graferne.length; i++) {
    graferne[i].style.display = "none";
  }
  for (i = 0; i < prikker.length; i++) {
    prikker[i].className = prikker[i].className.replace("active", "");
  }
  graferne[slideIndex-1].style.display = "block";
  prikker[slideIndex-1].className += " active";
}

// Hent alle elementer med klassen "tilbage" og tilføj en eventlytter til hvert af dem
let tilbageknap = document.getElementsByClassName("tilbage");
for (let i = 0; i < tilbageknap.length; i++) {
  tilbageknap[i].addEventListener("click", function() {
    plusSlides(-1);
  });
}

// Hent alle elementer med klassen "frem" og tilføj en eventlytter til hvert af dem
let fremknap = document.getElementsByClassName("frem");
for (let i = 0; i < fremknap.length; i++) {
  fremknap[i].addEventListener("click", function() {
    plusSlides(1);
  });
}
