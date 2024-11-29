/*
// File name             : sprite.js
// Project name          : Amidar
// The course name       : GAM100
// The term              : fall/2020
// Author                : Seungheon Jeon
// Copyright information : “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
*/

class sprite{
  constructor(speed, animation, x, y, input, score){
    this.animation = animation;
    this.len = this.animation.length
    this.x = x
    this.y = y
    this.speed = speed;
    this.index = 0;
    this.input = input;
    this.score = score
  }
  
  show(){
  image(this.animation[this.index], this.x-15,this.y-15, 30, 30)}
  
  jumpshow(){
    image(this.animation[this.input], this.x-15, this.y-15, 30, 40)}
  
  bottomshow(){
    image(this.animation[this.index], this.x-15, this.y-15, 30, 20)}
  scoreshow(){
    image(this.animation[this.score], this.x-5, this.y-5, 15, 15)}
  
  

  
  animate_p(){
    if((keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW)) == true && (this.animation == left_p || this.animation == right_p)){
      playerindex += 0.05
      this.index = floor(playerindex%4)
    }
    
    else if((keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)) && this.animation == front_p){    
      playerindex += 0.05
      this.index = floor(playerindex%2)
  }   }
  
  animate_e(){
    if(this.animation == move_e){
    enemyindex += 0.01
    this.index = floor(enemyindex%4)
    }
    
    else{
      enemyindex += 0.01
    this.index = floor(enemyindex%2)
      
    }
    
  }
  deathanimation_p(){
    
    if(deathindex < 2){deathindex += 0.05}
    this.index = floor(deathindex)
  }
}











function makearray(){
    let enemyframe = spritedata.enemy;
  let playerframe = spritedata2.character;
  let tracerframe = spritedata3.tracer;
  let weakframe = spritedata5.weak;
  let resource1 = spritedata4.resource;
  

   for(let i = 0; i <= 1; i++){
    
    let pos = playerframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    front_p.push(img);
    }
  for(let i = 2; i <= 5; i++){
    
    let pos = playerframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    left_p.push(img);
    }
  for(let i = 6; i <= 9; i++){
    
    let pos = playerframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    right_p.push(img);
    }
  for(let i = 10; i <= 12; i++){
    
    let pos = playerframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    death_p.push(img);
    }  
  
  
  

  for(let i = 0; i <= 3; i++){
    
    let pos = enemyframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    move_e.push(img);
    }
  for(let i = 4; i <= 7; i++){
    
    let pos = enemyframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    jump_e.push(img);
    }

  for(let i = 6; i <= 7; i++){
    
    let pos = enemyframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    hang_e.push(img);
    }

  for(let i = 8; i <= 9; i++){
    
    let pos = enemyframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    fall_e.push(img);
    }

  for(let i = 10; i <= 11; i++){
    
    let pos = enemyframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    bottom_e.push(img);
    }
  
  for(let i = 12; i <= 13; i++){
    
    let pos = enemyframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    death_e.push(img);
    }
  
  

    for(let i = 0; i <= 3; i++){
    
    let pos = tracerframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    move_t.push(img);
    }
  
    for(let i = 4; i <= 7; i++){
    
    let pos = tracerframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    jump_t.push(img);
    }
    for(let i = 8; i <= 9; i++){
    
    let pos = tracerframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    death_t.push(img);
    }

    for(let i = 0; i <= 3; i++){
    
    let pos = weakframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    move_w.push(img);
    }
  
    for(let i = 4; i <= 7; i++){
    
    let pos = weakframe[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    blinking_w.push(img);
    }
  

  for(let i = 0; i <= 2; i++){
    let pos = resource1[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    resource.push(img);
  }
  for(let i = 3; i <= 7; i++){
    let pos = resource1[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    scorearray.push(img);
  }
  
}