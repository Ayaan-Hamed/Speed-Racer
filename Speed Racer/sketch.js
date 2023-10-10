var db, f, p, g, bg
function preload () {
bg = loadImage ("./Speed Racer assets/background.png")
}





function setup () {
createCanvas (windowWidth, windowHeight)
db = firebase.database ()
g = new Game ()
g.start ()
}



function draw () {
  background (bg)

}

function windowResized () {
  resizeCanvas (windowWidth, windowHeight)
}