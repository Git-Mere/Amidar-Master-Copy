/*
// File name             : preload.js
// Project name          : Amidar
// The course name       : GAM100
// The term              : fall/2020
// Author                : Seungheon Jeon
// Copyright information : “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
*/

function preload(){

  spritedata = loadJSON('sprite/enemy.json')
  spritedata2 = loadJSON('sprite/character.json')
  spritedata3 = loadJSON('sprite/tracer.json')
  spritedata4 = loadJSON('sprite/resource.json')
  spritedata5 = loadJSON('sprite/weak.json')
  spritesheet = loadImage('sprite/Sprites1.png');
  mapdata = loadImage('sprite/map(no insert).png')
  font = loadFont('PressStart2P-Regular.ttf')
  mark = loadImage('sprite/mark.png')
  
  attack = loadSound('sound/attack.m4a')
  chance_attack = loadSound('sound/chance attack.mp3')
  stage_clear = loadSound('sound/clear.mp3')
  insert_coin = loadSound('sound/coin1.mp3')
  death = loadSound('sound/death.m4a')
  fall = loadSound('sound/fall.wav')
  game_over = loadSound('sound/game over.mp3')
  get_contents = loadSound('sound/get contents1.m4a')
  odd_stage = loadSound('sound/odd stage.mp3')
  siren = loadSound('sound/siren.m4a')
  start = loadSound('sound/start.mp3')
  jumpsound = loadSound('sound/jump.m4a')
}