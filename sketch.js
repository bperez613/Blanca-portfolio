let mySound;
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('El Malo.mp3');
  soundTwo = loadSound('Aventura-Obsession.mp3')
  soundThree = loadsound('Aventura - Mi Corazoncito ( Letra - Lyrics).mp3')
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  background(220);
  text('Song three', 10, 20);
}

function canvasPressed() {
  mySound.play();
}
{
cnv.mousePressed(canvasPressed);
  background(220);
  text('Song two', 10, 20);
}
function canvasPressed() {
  soundTwo.play();
}
{
cnv.mousePressed(canvasPressed);
  background(220);
  text('Song three', 10, 20);
}
function canvasPressed() {
  soundThree.play();
}
