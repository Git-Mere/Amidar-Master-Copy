/*
// File name             : Stage.js
// Project name          : Amidar
// The course name       : GAM100
// The term              : fall/2020
// Author                : Primary : Dong-A choi
//                         Secondary : Seungheon Jeon 
// Copyright information : “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
*/

const MAIN_MENU = 0;
const PLAY = 1;
const GAME_OVER = 2;
const BONUS_STAGE = 3;
const SCORE_BOARD = 4;

class MainMenu{
  constructor() {
    
  }
  
  update(){

  }
  
  draw(){  
    push()
    textAlign(CENTER)
    push()
    fill(231,227,0)
    text("-    AMIDAR    -", width/2, 200)
    pop()
    push()
    fill(0,227,0)
    text("PUSH START BUTTON", width/2, 310)
    pop()
    push()
    fill(231,0,0)
    text("ONE OR TWO PLAYERS", width/2 + 8, 380)
    pop()
    push()
    fill(0,227,222)
    text("1ST BONUS AFTER 30000 PTS", width/2, 470)
    pop()
    push()
    fill('white')
    text("AND BONUS EVERY 70000 PTS", width/2, 550)
    text("0", width / 2 - 170, 40)
    pop()
    push()
    fill('white')
    text("KONAMI  1982", width/2 + 20, 640)
    
    pop()
    pop()
    
    image(mark, 160, 620)
    
  }
}

class Play {
  constructor(){
    
  }
  
  update(){
    
  }

  draw(){
    push()
    fill(0,227,0)
  text("JUMP", 365, 700)
    pop()
  rectDraw(); 
  sangbeom();
  image(mapdata, 13, 22, 575, 640) 

  c1.draw()
  c1.update()
  
  coinDraw();  

  e1.draw()
  e2.draw()
  e3.draw()
  e4.draw()
  e5.draw()
  e6.draw()
  e1.update()
  e2.update()
  e3.update()
  e4.update()
  e5.update()
  e6.update()
  se1.draw()
  se1.update()
  
  if(characterLife >= 3){
  image(resource[0], 70, 60, 17, 17)
  }
  if(characterLife >= 2){
  image(resource[0], 50, 60, 17, 17)}
    

  image(resource[1], 530, 60, 17, 17)

  if(jumpCount == 3){
  image(resource[2], 510, 680, 17, 17)
  }
  if(jumpCount >= 2){
  image(resource[2], 490, 680, 17, 17)}
  if(jumpCount >= 1){
  image(resource[2], 470, 680, 17, 17)
  } 


    
  }
}

class GameOver{
  constructor(){
    
  }
  
  update(){
    
  }
  
  draw(){
      image(resource[1], 530, 60, 17, 17)
       push()
    fill(0,227,0)
  text("JUMP", 365, 700)
    if(jumpCount == 3){
  image(resource[2], 510, 680, 17, 17)
  }
  if(jumpCount >= 2){
  image(resource[2], 490, 680, 17, 17)}
  if(jumpCount >= 1){
  image(resource[2], 470, 680, 17, 17)
  } 
    pop()
    push()
    textAlign(CENTER)
    fill(231,0,0)
    text("PLAYER ONE", width/2, 440)
    text("GAME  OVER", width/2, 500)
    pop()
    
  }
}
class ScoreBoard{
  constructor(){

  }

  update(){

  }

  draw(){
    let textX = width/2 - 10;
    let textY = 300;
    let gradeX = textX - 200
    let ptsX = textX + 20

    push()
    textSize(20)
    push();
    fill(0,227,222);
    text("1ST", gradeX, textY - 120);
    text("2ND", gradeX, textY - 75);
    text("10000 PTS", gradeX+ 140, textY- 120);
    push()
    textAlign(RIGHT)
    text(score, textX+40, textY-75);
    pop()
    text("PTS", ptsX + 40, textY - 75);

    fill('white');
    text("3RD", gradeX, textY - 30);
    text("4TH", gradeX, textY + 15);
    text("0 PTS", ptsX, textY -30);
    text("0 PTS", ptsX, textY + 15);

    fill('yellow');
    text("5TH", gradeX, textY + 60);
    text("6TH", gradeX, textY + 105);
    text("0 PTS", ptsX, textY + 60);
    text("0 PTS", ptsX, textY + 105);

    fill(0,227,0);
    text("7TH", gradeX, textY + 150);
    text("8TH", gradeX, textY + 195);
    text("0 PTS", ptsX, textY + 150);
    text("0 PTS", ptsX, textY + 195);
    push()
    textSize(20)
    textAlign(CENTER)
    text("- SCORE RANKING - ",width/2, 110)
    pop()

    fill(231,0,0);
    text("9TH", gradeX, textY + 240);
    text("10TH", gradeX, textY + 285);
    text("0 PTS", ptsX, textY + 240);
    text("0 PTS", ptsX, textY + 285);

    pop();
    pop()
    push()
    fill('white')
    text("KONAMI  1982", width/2-100, 640)

    pop()
    image(mark, 160, 620)
    push()
    textSize(20)
    fill(0,227,222)
    text("♥", 485, 180)
    text("♥", 460, 180)
    text("♥", 510, 180)
    text("♥", 485, 225)
    text("♥", 460, 225)
    text("♥", 510, 225)
    pop()
        push()
    textSize(20)
    fill('white')
    text("♥", 485, 270)
    text("♥", 460, 270)
    text("♥", 510, 270)
    text("♥", 485, 315)
    text("♥", 460, 315)
    text("♥", 510, 315)
    pop()
        push()
    textSize(20)
    fill('yellow')
    text("♥", 485, 360)
    text("♥", 460, 360)
    text("♥", 510, 360)
    text("♥", 485, 405)
    text("♥", 460, 405)
    text("♥", 510, 405)
    pop()
     push()
    textSize(20)
    fill(0,227,0)
    text("♥", 485, 450)
    text("♥", 460, 450)
    text("♥", 510, 450)
    text("♥", 485, 495)
    text("♥", 460, 495)
    text("♥", 510, 495)
    pop()
         push()
    textSize(20)
    fill(231,0,0)
    text("♥", 485, 540)
    text("♥", 460, 540)
    text("♥", 510, 540)
    text("♥", 485, 585)
    text("♥", 460, 585)
    text("♥", 510, 585)
    pop()
  }
}