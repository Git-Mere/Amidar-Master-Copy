/*
// File name             : Classes.js
// Project name          : Amidar
// The course name       : GAM100
// The term              : fall/2020
// Author                : Primary : Sangbeom Kim  
//                         Secondary : Seungheon Jeon
// Copyright information : “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
*/

class hori {
  constructor(x1, x2, y) {
    this.x1 = x1
    this.x2 = x2
    this.y = y
  }
  draw() {
    line(this.x1, this.y, this.x2, this.y)
    
    if (this.x1 <= c1.x && this.x2 >= c1.x && this.y == c1.y) {
      horizontal = true
    }
    if (this.x1 < c1.x && this.x2 > c1.x && this.y == c1.y) {
      vertical = false
    }
    if (this.x1 == c1.x && this.y == c1.y) {
      if (keyIsDown(RIGHT_ARROW)) {
        c1.x += 2
      } else
      if (keyIsDown(UP_ARROW) && c1.y != 100) {
        c1.y -= 2
      } else
      if (keyIsDown(DOWN_ARROW) && c1.y != 620) {
        c1.y += 2
      }
    }
    if (this.x2 == c1.x && this.y == c1.y) {
      if (keyIsDown(LEFT_ARROW)) {
        c1.x -= 2
      } else
      if (keyIsDown(UP_ARROW) && c1.y != 100) {
        c1.y -= 2
      } else
      if (keyIsDown(DOWN_ARROW) && c1.y != 620) {
        c1.y += 2
      }
    }
  }
  update() {
    if (e1.y != 100 && e1.y != 620) {
      if (this.x1 == e1.x && this.y == e1.y) {
        e1.rightturn = true
      }
      if (this.x2 == e1.x && this.y == e1.y) {
        e1.leftturn = true
      }
    }
    if (e2.y != 100 && e2.y != 620) {
      if (this.x1 == e2.x && this.y == e2.y) {
        e2.rightturn = true
      }
      if (this.x2 == e2.x && this.y == e2.y) {
        e2.leftturn = true
      }
    }
    if (e3.y != 100 && e3.y != 620) {
      if (this.x1 == e3.x && this.y == e3.y) {
        e3.rightturn = true
      }
      if (this.x2 == e3.x && this.y == e3.y) {
        e3.leftturn = true
      }
    }
    if (e4.y != 100 && e4.y != 620) {
      if (this.x1 == e4.x && this.y == e4.y) {
        e4.rightturn = true
      }
      if (this.x2 == e4.x && this.y == e4.y) {
        e4.leftturn = true
      }
    }
    if (e5.y != 100 && e5.y != 620) {
      if (this.x1 == e5.x && this.y == e5.y) {
        e5.rightturn = true
      }
      if (this.x2 == e5.x && this.y == e5.y) {
        e5.leftturn = true
      }
    }
    if (e6.y != 100 && e6.y != 620) {
      if (this.x1 == e6.x && this.y == e6.y) {
        e6.rightturn = true
      }
      if (this.x2 == e6.x && this.y == e6.y) {
        e6.leftturn = true
      }
    }
  }
}

class vert {
  constructor(x, y1, y2) {
    this.x = x
    this.y1 = y1
    this.y2 = y2
  }
  draw() {
    line(this.x, this.y1, this.x, this.y2)
    
    if (this.y1 <= c1.y && this.y2 >= c1.y && this.x == c1.x) {
      vertical = true
    }
    if (this.y1 < c1.y && this.y2 > c1.y && this.x == c1.x) {
      horizontal = false
    }
  }
}

class character {
  constructor(x, y, animation) {
    this.x = x
    this.y = y
    this.animation = animation
  }
  draw() {
   let player = new sprite(0, this.animation, this.x, this.y);

    player.x = this.x;
    player.y = this.y


      if(keyIsDown(LEFT_ARROW)&&horizontal == true && vertical == false){
  this.animation = left_p
}else if(keyIsDown(RIGHT_ARROW)&&horizontal == true && vertical == false){
  this.animation = right_p
}else if(keyIsDown(UP_ARROW)&&horizontal == false && vertical == true){
  this.animation = front_p
}else if(keyIsDown(DOWN_ARROW)&&horizontal == false && vertical == true){
  this.animation = front_p
}
    
    if(dead == true){
      this.animation = death_p
      player.deathanimation_p()
      player.show()
      
    }
      player.animate_p();
    player.show()
  }
  update() {
    if (collide == false && dead == false) {
      if (horizontal == true && vertical == false) {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= 2
        }
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += 2
        }
      } else
      if (vertical == true && horizontal == false) {
        if (keyIsDown(UP_ARROW) && this.y) {
          this.y -= 2
        }
        if (keyIsDown(DOWN_ARROW) && this.y) {
          this.y += 2
        }
      }
      if (this.x == 150 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 250 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 350 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 450 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 150 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
      if (this.x == 250 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
      if (this.x == 350 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
      if (this.x == 450 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
    }
    if (collide == true && power == true) {
      if (horizontal == true && vertical == false) {
        if (keyIsDown(LEFT_ARROW)) {
          this.x -= 2
        }
        if (keyIsDown(RIGHT_ARROW)) {
          this.x += 2
        }
      } else
      if (vertical == true && horizontal == false) {
        if (keyIsDown(UP_ARROW) && this.y) {
          this.y -= 2
        }
        if (keyIsDown(DOWN_ARROW) && this.y) {
          this.y += 2
        }
      }
      if (this.x == 150 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 250 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 350 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 450 && this.y == 100 && keyIsDown(DOWN_ARROW)) {
        this.y += 2
      }
      if (this.x == 150 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
      if (this.x == 250 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
      if (this.x == 350 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
      if (this.x == 450 && this.y == 620 && keyIsDown(UP_ARROW)) {
        this.y -= 2
      }
    }
  }
}

function sangbeom(){
    h1.draw()
  h1_2.draw()
  h1_3.draw()
  h1_4.draw()
  h1_5.draw()
  h2.draw()
  h2_2.draw()
  h2_3.draw()
  h2_4.draw()
  h2_5.draw()
  h3.draw()
  h4.draw()
  h5.draw()
  h6.draw()
  h7.draw()
  h8.draw()
  h9.draw()
  h10.draw()
  h11.draw()
  h12.draw()
  h13.draw()
  h14.draw()
  h15.draw()
  h16.draw()
  h17.draw()
  h18.draw()
  h19.draw()
  h20.draw()
  h21.draw()
  h22.draw()
  h23.draw()
  h24.draw()
  h25.draw()
  h1.update()
  h1_2.update()
  h1_3.update()
  h1_4.update()
  h1_5.update()
  h2.update()
  h2_2.update()
  h2_3.update()
  h2_4.update()
  h2_5.update()
  h3.update()
  h4.update()
  h5.update()
  h6.update()
  h7.update()
  h8.update()
  h9.update()
  h10.update()
  h11.update()
  h12.update()
  h13.update()
  h14.update()
  h15.update()
  h16.update()
  h17.update()
  h18.update()
  h19.update()
  h20.update()
  h21.update()
  h22.update()
  h23.update()
  h24.update()
  h25.update()
  v1.draw()
  v1_2.draw()
  v1_3.draw()
  v1_4.draw()
  v1_5.draw()
  v1_6.draw()
  v2.draw()
  v2_2.draw()
  v2_3.draw()
  v2_4.draw()
  v2_5.draw()
  v2_6.draw()
  v2_7.draw()
  v2_8.draw()
  v2_9.draw()
  v2_10.draw()
  v3.draw()
  v3_2.draw()
  v3_3.draw()
  v3_4.draw()
  v3_5.draw()
  v3_6.draw()
  v3_7.draw()
  v3_8.draw()
  v3_9.draw()
  v3_10.draw()
  v4.draw()
  v4_2.draw()
  v4_3.draw()
  v4_4.draw()
  v4_5.draw()
  v4_6.draw()
  v4_7.draw()
  v4_8.draw()
  v4_9.draw()
  v4_10.draw()
  v4_11.draw()
  v5.draw()
  v5_2.draw()
  v5_3.draw()
  v5_4.draw()
  v5_5.draw()
  v5_6.draw()
  v5_7.draw()
  v5_8.draw()
  v5_9.draw()
  v5_10.draw()
  v6.draw()
  v6_2.draw()
  v6_3.draw()
  v6_4.draw()
  v6_5.draw()
}

function sangbeom2(){
   c1 = new character(300, 620, front_p)
  e1 = new enemy1(50, 100, move_e)
  e2 = new enemy1(150, 100, move_e)
  e3 = new enemy1(250, 100, move_e)
  e4 = new enemy1(350, 100, move_e)
  e5 = new enemy1(450, 100, move_e)
  e6 = new enemy1(550, 100, move_e)
  se1 = new enemy2(550, 620, move_t)
  h1 = new hori(50, 150, 100)
  h1_2 = new hori(150, 250, 100)
  h1_3 = new hori(250, 350, 100)
  h1_4 = new hori(350, 450, 100)
  h1_5 = new hori(450, 550, 100)
  h2 = new hori(50, 150, 620)
  h2_2 = new hori(150, 250, 620)
  h2_3 = new hori(250, 350, 620)
  h2_4 = new hori(350, 450, 620)
  h2_5 = new hori(450, 550, 620)
  h3 = new hori(50, 150, 200)
  h4 = new hori(50, 150, 300)
  h5 = new hori(50, 150, 380)
  h6 = new hori(50, 150, 460)
  h7 = new hori(50, 150, 560)
  h8 = new hori(150, 250, 160)
  h9 = new hori(150, 250, 240)
  h10 = new hori(150, 250, 340)
  h11 = new hori(150, 250, 520)
  h12 = new hori(250, 350, 200)
  h13 = new hori(250, 350, 300)
  h14 = new hori(250, 350, 380)
  h15 = new hori(250, 350, 440)
  h16 = new hori(250, 350, 560)
  h17 = new hori(350, 450, 160)
  h18 = new hori(350, 450, 240)
  h19 = new hori(350, 450, 340)
  h20 = new hori(350, 450, 460)
  h21 = new hori(350, 450, 520)
  h22 = new hori(450, 550, 200)
  h23 = new hori(450, 550, 300)
  h24 = new hori(450, 550, 420)
  h25 = new hori(450, 550, 560)
  v1 = new vert(50, 100, 200)
  v1_2 = new vert(50, 200, 300)
  v1_3 = new vert(50, 300, 380)
  v1_4 = new vert(50, 380, 460)
  v1_5 = new vert(50, 460, 560)
  v1_6 = new vert(50, 560, 620)
  v2 = new vert(150, 100, 160)
  v2_2 = new vert(150, 160, 200)
  v2_3 = new vert(150, 200, 240)
  v2_4 = new vert(150, 240, 300)
  v2_5 = new vert(150, 300, 340)
  v2_6 = new vert(150, 340, 380)
  v2_7 = new vert(150, 380, 460)
  v2_8 = new vert(150, 460, 520)
  v2_9 = new vert(150, 520, 560)
  v2_10 = new vert(150, 560, 620)
  v3 = new vert(250, 100, 160)
  v3_2 = new vert(250, 160, 200)
  v3_3 = new vert(250, 200, 240)
  v3_4 = new vert(250, 240, 300)
  v3_5 = new vert(250, 300, 340)
  v3_6 = new vert(250, 340, 380)
  v3_7 = new vert(250, 380, 440)
  v3_8 = new vert(250, 440, 520)
  v3_9 = new vert(250, 520, 560)
  v3_10 = new vert(250, 560, 620)
  v4 = new vert(350, 100, 160)
  v4_2 = new vert(350, 160, 200)
  v4_3 = new vert(350, 200, 240)
  v4_4 = new vert(350, 240, 300)
  v4_5 = new vert(350, 300, 340)
  v4_6 = new vert(350, 340, 380)
  v4_7 = new vert(350, 380, 440)
  v4_8 = new vert(350, 440, 460)
  v4_9 = new vert(350, 460, 520)
  v4_10 = new vert(350, 520, 560)
  v4_11 = new vert(350, 560, 620)
  v5 = new vert(450, 100, 160)
  v5_2 = new vert(450, 160, 200)
  v5_3 = new vert(450, 200, 240)
  v5_4 = new vert(450, 240, 300)
  v5_5 = new vert(450, 300, 340)
  v5_6 = new vert(450, 340, 420)
  v5_7 = new vert(450, 420, 460)
  v5_8 = new vert(450, 460, 520)
  v5_9 = new vert(450, 520, 560)
  v5_10 = new vert(450, 560, 620)
  v6 = new vert(550, 100, 200)
  v6_2 = new vert(550, 200, 300)
  v6_3 = new vert(550, 300, 420)
  v6_4 = new vert(550, 420, 560)
  v6_5 = new vert(550, 560, 620)
  
}