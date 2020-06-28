var numTiles = document.querySelectorAll(".tile").length;

for (var i = 0; i < numTiles; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    animateTile(buttonInnerHTML);

  })
}

function playSound(soundPath) {

  var audio = new Audio(soundPath);
  audio.play();
}

function animateTile(key) {

  key = key.toLowerCase();

  var activeTile = document.querySelector("." + key);
  activeTile.classList.add("pressed");

  setTimeout(function() {
    activeTile.classList.remove("pressed");
  }, 100);

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  animateTile(event.key);

})


function makeSound(key) {

  switch (key) {
    case "A":
      playSound("Sounds/A.wav");
      break;

    case "B":
      playSound("Sounds/B.wav");
      break;

    case "C":
      playSound("Sounds/C.wav");
      break;

    case "D":
      playSound("Sounds/D.wav");
      break;

    case "E":
      playSound("Sounds/E.wav");
      break;

    case "F":
      playSound("Sounds/F.wav");
      break;

    case "G":
        playSound("Sounds/G.wav");
        break;

    case "a":
      playSound("Sounds/A.wav");
      break;

    case "b":
      playSound("Sounds/B.wav");
      break;

    case "c":
      playSound("Sounds/C.wav");
      break;

    case "d":
      playSound("Sounds/D.wav");
      break;

    case "e":
      playSound("Sounds/E.wav");
      break;

    case "f":
      playSound("Sounds/F.wav");
      break;

    case "g":
        playSound("Sounds/G.wav");
        break;

    default:
      console.log(buttonInnerHTML);

  }

}

// This website was created for learning purposes only.
// None of the sounds belong to me and are used for learning purposes.
// None of the images belong to me and are used for learning purposes.
