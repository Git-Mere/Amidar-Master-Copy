/*
// File name             : EnemyClass.js
// Project name          : Amidar
// The course name       : GAM100
// The term              : fall/2020
// Author                : Primary : Sangbeom Kim 
//                         Secondary : Seungheon Jeon 
// Copyright information : “All content © 2020 DigiPen (USA) Corporation, all rights reserved.”
*/

class enemy1 {
  constructor(x, y, animation) {
    this.x = x
    this.y = y
    this.left = false
    this.right = false
    this.up = false
    this.down = true
    this.leftturn = false
    this.rightturn = false
    this.upturn = false
    this.downturn = false
    this.goingup = false
    this.goingdown = true
    this.state = 0
    this.imagex = 0
    this.imagey = 0
    this.fall = 5
    this.collide = false
    this.dead1 = false
    this.dead2 = false
    this.deadcount = 0
    this.animation = animation
    this.count = false
    this.revive = floor(random(0, 200))
    this.revivecount = 0
    this.check = false
    this.jumpTime = 0
    this.timescore = 0
  }
  draw() {
    let enemy = new sprite(0, this.animation, this.x, this.y, randomvalue, this.timescore);
    let check = false
    enemy.x = this.imagex;
    enemy.y = this.imagey;
    if (power == true && this.count == false) {
      this.animation = move_w
      backToDeath2 += 1;

      if (backToDeath2 > 3240 && this.count == false) {
        this.animation = blinking_w
      }
      if (backToDeath2 > 3960) {
        power = false
        backToDeath2 = 0
      }
    }




    if (power == false && this.dead1 == false && collide == false && this.collide == false && this.dead2 == false && jump == false && this.count == false) {
      this.animation = move_e
    } else if (power == false && this.dead1 == false && this.dead2 == false && jump == true) {
      check = true;
      this.animation = jump_e
      enemy.jumpshow()

    } else if (this.dead1 == true && this.dead2 == false && jump == false && this.count == false && this.deadcount >= 100) {
      this.check = false
      this.animation = fall_e


    } else if (this.dead1 == true && this.dead2 == false && jump == false && this.count == false && this.deadcount <= 100) {
      this.check = true
      this.animation = scorearray
      enemy.scoreshow()


    } else if (this.dead1 == false && this.dead2 == true && jump == false && this.count == false && this.deadcount >= 100) {
      this.check = false
      this.animation = hang_e

    } else if (this.dead1 == false && this.dead2 == true && jump == false && this.count == false && this.deadcount <= 100) {
      this.check = true
      this.animation = scorearray
      enemy.scoreshow()

    } else if (power == false && this.dead1 == false && this.dead2 == false && collide == true && this.collide == true && jump == false && this.count == false) {
      this.animation = death_e

    } else if (this.count == true) {
      this.animation = bottom_e

    }

    if (check == false && this.count == false && this.check == false) {
      enemy.animate_e()
      enemy.show()
    }
    if (check == false && this.count == true) {
      enemy.animate_e()
      enemy.bottomshow()
    }

  }
  update() {



    if (abs(this.x - c1.x) <= 4 && abs(this.y - c1.y) <= 4 && this.dead1 == false && this.dead2 == false && jump == false) {
      collide = true
      this.collide = true
      if (power == false) {
        dead = true
        if (deathindex <= 0.1) {
          death.setVolume(1)
          death.play()
        }
      }
      if (collide == true && this.collide == true && power == false) {
        odd_stage.setVolume(0)
        musicstart = 150
      }

      if (power == true && (this.up == true || this.down == true)) {
        attack.play()
        this.dead1 = true
        collide = false
        this.left = false
        this.right = false
        this.up = false
        this.down = false
        this.leftturn = false
        this.rightturn = false
        this.upturn = false
        this.downturn = false
        this.goingup = false
        this.goingdown = false
      }
      if (power == true && (this.left == true || this.right == true || this.state != 0)) {
        attack.play()

        this.dead2 = true
        collide = false
        this.left = false
        this.right = false
        this.up = false
        this.down = false
        this.leftturn = false
        this.rightturn = false
        this.upturn = false
        this.downturn = false
        this.goingup = false
        this.goingdown = false
      }
    }
    if (this.dead1 == true) {
      this.imagex = this.x
      this.imagey = this.y
      collide = false
      this.collide = false
      if (this.y < 620) {
        this.deadcount += 1
        if (this.deadcount >= 100) {
          this.y += 2
          if (this.deadcount <= 101) {
            fall.setVolume(0.5)
            fall.play()
          }
        }
        if (this.y == 620) {
          this.count = true

        }
        if (this.y >= 600) {
          fall.pause()
        }
      }
      if (this.y == 620 && power == false) {
        this.revivecount += 1

        if (this.revivecount >= this.revive) {
          this.ran = floor(random(1, 2.99))
          if (this.ran == 1) {
            this.state = 0
            this.deadcount = 0
            this.collide = false
            this.dead1 = false
            collide = false
            this.y -= 2
            this.left = false
            this.right = false
            this.up = true
            this.down = false
            this.leftturn = false
            this.rightturn = false
            this.upturn = false
            this.downturn = false
            this.goingup = true
            this.goingdown = false
            this.count = false
          }
          if (this.ran == 2) {
            this.deadcount = 0
            this.collide = false
            this.dead1 = false
            collide = false
            this.left = false
            this.right = false
            this.up = false
            this.down = false
            this.leftturn = false
            this.rightturn = false
            this.upturn = false
            this.downturn = false
            this.goingup = true
            this.goingdown = false
            this.count = false
          }
        }
      }
    }
    if (this.dead2 == true) {
      this.imagex = this.x
      this.imagey = this.y
      this.deadcount += 1
      if (this.deadcount >= 100) {
        this.imagey = this.y + 10
      }
      this.state = 0
      if (power == false && this.deadcount >= 100 && this.y == 620) {
        this.imagey = this.y
        this.revivecount += 1
        if (this.revivecount >= this.revive) {
          if (this.x <= 100 && this.x > 50) {
            this.x -= 2
          }
          if (this.x == 50) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x < 150 && this.x > 100) {
            this.x += 2
          }
          if (this.x == 150) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x <= 200 && this.x > 150) {
            this.x -= 2
          }
          if (this.x == 200) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x < 250 && this.x > 200) {
            this.x += 2
          }
          if (this.x == 250) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x <= 300 && this.x > 250) {
            this.x -= 2
          }
          if (this.x == 250) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x < 350 && this.x > 300) {
            this.x += 2
          }
          if (this.x == 350) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x <= 400 && this.x > 350) {
            this.x -= 2
          }
          if (this.x == 350) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x < 450 && this.x > 400) {
            this.x += 2
          }
          if (this.x == 450) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x <= 500 && this.x > 450) {
            this.x -= 2
          }
          if (this.x == 450) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.goingup = true
            this.up = true
          } else if (this.x <= 550 && this.x > 500) {
            this.x += 2
          }
          if (this.x == 550) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y -= 2
            this.dead2 = false
            this.deadcount = 0
            this.collide = false
            this.goingup = true
            this.up = true
          }
        }
      }
      if (power == false && this.deadcount >= 100 && this.y == 100) {
        this.imagey = this.y
        this.revivecount += 1
        if (this.revivecount >= this.revive) {
          if (this.x <= 100 && this.x > 50) {
            this.x -= 2
          }
          if (this.x == 50) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x < 150 && this.x > 100) {
            this.x += 2
          }
          if (this.x == 150) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x <= 200 && this.x > 150) {
            this.x -= 2
          }
          if (this.x == 200) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x < 250 && this.x > 200) {
            this.x += 2
          }
          if (this.x == 250) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x <= 300 && this.x > 250) {
            this.x -= 2
          }
          if (this.x == 250) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x < 350 && this.x > 300) {
            this.x += 2
          }
          if (this.x == 350) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x <= 400 && this.x > 350) {
            this.x -= 2
          }
          if (this.x == 350) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x < 450 && this.x > 400) {
            this.x += 2
          }
          if (this.x == 450) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x <= 500 && this.x > 450) {
            this.x -= 2
          }
          if (this.x == 450) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.goingdown = true
            this.down = true
          } else if (this.x <= 550 && this.x > 500) {
            this.x += 2
          }
          if (this.x == 550) {
            collide = false
            this.deadcount = 0
            this.collide = false
            this.y += 2
            this.dead2 = false
            this.deadcount = 0
            this.collide = false
            this.goingdown = true
            this.down = true
          }
        }
      }
      if (power == false && this.deadcount >= 100 && this.y != 100 && this.y != 620) {
        this.deadcount = 0
        this.collide = false
        this.dead2 = false
        collide = false
        this.revivecount += 1
        this.imagey = this.y
        this.rand = floor(random(1, 4.99))
        if (this.rand == 1) {
          this.goingup = true
          this.right = true
        } else if (this.rand == 2) {
          this.goingup = true
          this.left = true
        } else if (this.rand == 3) {
          this.goingdown = true
          this.right = true
        } else if (this.rand == 4) {
          this.goingdown = true
          this.left = true
        }
      }
    }
    if (jump == false && this.collide == false && dead == false) {
      this.imagex = this.x
      this.imagey = this.y
      this.fall = 5
      this.jumpTime = 0
      if (this.goingup == true && this.y == 100) {
        this.goingup = false
        this.goingdown = true
      }
      if (this.goingdown == true && this.y == 620) {
        this.goingdown = false
        this.goingup = true
      }
      if (this.left == true && this.upturn == false && this.downturn == false && this.rightturn == false) {
        this.x -= 2
        this.up = false
        this.down = false
        this.leftturn = false
      }
      if (this.right == true && this.upturn == false && this.downturn == false && this.leftturn == false) {
        this.x += 2
        this.up = false
        this.down = false
        this.rightturn = false
      }
      if (this.up == true && this.leftturn == false && this.rightturn == false) {
        this.y -= 2
        this.left = false
        this.right = false
        this.upturn = false
      }
      if (this.down == true && this.leftturn == false && this.rightturn == false) {
        this.y += 2
        this.left = false
        this.right = false
        this.downturn = false
      }
      if ((this.up == true || this.down == true) && this.leftturn == true) {
        this.left = true
      }
      if ((this.up == true || this.down == true) && this.rightturn == true) {
        this.right = true
      }
      if (this.left == true && this.rightturn == true && this.goingdown == true) {
        this.downturn = true
      }
      if (this.right == true && this.leftturn == true && this.goingdown == true) {
        this.downturn = true
      }
      if (this.left == true && this.rightturn == true && this.goingup == true) {
        this.upturn = true
      }
      if (this.right == true && this.leftturn == true && this.goingup == true) {
        this.upturn = true
      }
      if (this.downturn == true) {
        this.y += 2
        this.down = true
        this.leftturn = false
        this.rightturn = false
      }
      if (this.upturn == true) {
        this.y -= 2
        this.up = true
        this.leftturn = false
        this.rightturn = false
      }
      if (this.y == 100 || this.y == 620) {
        this.down = false
        this.up = false
        if (this.x == 50) {
          this.state = 1
        } else if (this.x == 150 && this.state != 3) {
          this.state = 2
        } else if (this.x == 250 && this.state != 2) {
          this.state = 3
        } else if (this.x == 350 && this.state != 5) {
          this.state = 4
        } else if (this.x == 450 && this.state != 4) {
          this.state = 5
        } else if (this.x == 550) {
          this.state = 6
        }
      }
      if (this.dead1 == false && this.dead2 == false) {
        switch (this.state) {
          case 1:
            if (this.x < 150) {
              this.x += 2
            }
            if (this.x == 150 && this.y == 100) {
              this.y += 2
              this.down = true
            } else if (this.x == 150 && this.y == 620) {
              this.y -= 2
              this.up = true
            }
            break
          case 2:
            if (this.x < 350) {
              this.x += 2
            }
            if (this.x == 350 && this.y == 100) {
              this.y += 2
              this.down = true
            } else if (this.x == 350 && this.y == 620) {
              this.y -= 2
              this.up = true
            }
            break
          case 3:
            if (this.x > 50) {
              this.x -= 2
            }
            if (this.x == 50 && this.y == 100) {
              this.y += 2
              this.down = true
            } else if (this.x == 50 && this.y == 620) {
              this.y -= 2
              this.up = true
            }
            break
          case 4:
            if (this.x < 550) {
              this.x += 2
            }
            if (this.x == 550 && this.y == 100) {
              this.y += 2
              this.down = true
            } else if (this.x == 550 && this.y == 620) {
              this.y -= 2
              this.up = true
            }
            break
          case 5:
            if (this.x > 250) {
              this.x -= 2
            }
            if (this.x == 250 && this.y == 100) {
              this.y += 2
              this.down = true
            } else if (this.x == 250 && this.y == 620) {
              this.y -= 2
              this.up = true
            }
            break
          case 6:
            if (this.x > 450) {
              this.x -= 2
            }
            if (this.x == 450 && this.y == 100) {
              this.y += 2
              this.down = true
            } else if (this.x == 450 && this.y == 620) {
              this.y -= 2
              this.up = true
            }
            break
        }
      }
      if (this.y > 100 && this.y < 620) {
        this.state = 0
      }
    }
    if (this.dead1 == false && this.dead2 == false && jump == true && dead == false && collide == false) {
      this.imagey -= this.fall
      this.jumpTime += 1
      this.fall *= 0.9
      if (this.jumpTime >= 35) {
        jump = false
      }
    }
  }
}
class enemy2 {
  constructor(x, y, animation) {
    this.x = x
    this.y = y
    this.imagex = 0
    this.imagey = 0
    this.follow = false
    this.up = false
    this.down = false
    this.left = false
    this.right = false
    this.lapcount = 0
    this.followtimer = 0
    this.following = 0
    this.arrayfollow = false
    this.followx = 0
    this.followy = 0
    this.history = []
    this.dead = false
    this.dead2 = false
    this.fall = 5
    this.deadcount = 0
    this.animation = animation
    this.count = false
    this.collide = false
    this.check = false
    this.jumpTime = 0
    this.timescore = 0
  }
  draw() {
    let enemy = new sprite(0, this.animation, this.x, this.y, randomvalue, this.timescore);
    let check = false
    enemy.x = this.imagex;
    enemy.y = this.imagey;
    if (power == true && this.count == false) {
      this.animation = move_w
      backToDeath2 += 1;

      if (backToDeath2 > 2880 && this.count == false) {
        this.animation = blinking_w
      }
      if (backToDeath2 > 3600) {
        power = false
        backToDeath2 = 0
      }
    }




    if (power == false && this.dead == false && this.dead2 == false && jump == false && this.collide == false && collide == false && this.count == false) {
      this.animation = move_t
    } else if (power == false && this.dead == false && this.dead2 == false && jump == true) {
      check = true;
      this.animation = jump_t
      enemy.jumpshow()
    } else if (this.dead == true && this.dead2 == false && jump == false && this.count == false && this.deadcount >= 100) {
      this.check = false
      this.animation = fall_e


    } else if (this.dead == true && this.dead2 == false && jump == false && this.count == false && this.deadcount <= 100) {
      this.check = true
      this.animation = scorearray
      enemy.scoreshow()

    } else if (this.dead == false && this.dead2 == true && jump == false && this.count == false && this.deadcount >= 100) {
      this.check = false
      this.animation = hang_e

    } else if (this.dead == false && this.dead2 == true && jump == false && this.count == false && this.deadcount <= 100) {
      this.check = true
      this.animation = scorearray
      enemy.scoreshow()

    } else if (power == false && this.dead == false && this.dead2 == false && collide == true && jump == false && this.count == false && this.collide == true) {
      this.animation = death_t
    } else if (this.count == true) {
      this.animation = bottom_e

    }



    if (check == false && this.count == false && this.check == false) {
      enemy.animate_e()
      enemy.show()
    }

    if (check == false && this.count == true) {
      enemy.animate_e()
      enemy.bottomshow()
    }



  }

  update() {

    if (abs(this.x - c1.x) <= 4 && abs(this.y - c1.y) <= 4 && this.dead == false && this.dead2 == false && jump == false) {
      collide = true
      this.collide = true
      if (power == false) {
        dead = true
        if (deathindex <= 0.1) {
          death.setVolume(1)
          death.play()
        }
      }
      if (collide == true && this.collide == true && power == false) {
        odd_stage.setVolume(0)
        musicstart = 150
      }


      if (power == true) {
        if (this.x == 50 || this.x == 150 || this.x == 250 || this.x == 350 || this.x == 450 || this.x == 550) {
          attack.play()
          this.dead = true
        } else {
          attack.play()
          this.dead2 = true
        }
        collide = false
        this.left = false
        this.right = false
        this.up = false
        this.down = false
      }
    }
    if (this.dead == true) {
      this.imagex = this.x
      this.imagey = this.y
      if (this.y < 620) {
        this.deadcount += 1
        if (this.deadcount >= 100) {
          this.y += 2
        }
      }
      if (this.y == 620) {
        this.count = true
      }
      if (this.y == 620 && power == false) {
        if (this.follow == false) {
          this.deadcount = 0
          this.collide = false
          this.dead = false
          collide = false
          this.left = false
          this.right = true
          this.up = false
          this.down = false
          this.count = false
        }
        if (this.follow == true) {
          this.deadcount = 0
          this.collide = false
          this.dead = false
          collide = false
          this.arrayfollow = false
          this.followx = 0
          this.followy = 0
          this.followtimer = 0
          this.history = []
          this.deadcount = 0
          this.follow = false
          arraycount = 0
          this.count = false
        }
      }
    }
    if (this.dead2 == true) {
      this.imagex = this.x
      this.imagey = this.y
      this.deadcount += 1
      if (this.deadcount >= 100) {
        this.imagey = this.y + 10
      }
      if (power == false && this.deadcount >= 100 && this.follow == false) {
        if (this.x == 50) {
          this.up = false
          this.down = true
          this.left = false
          this.right = false
        }
        if (this.x == 550) {
          this.up = true
          this.down = false
          this.left = false
          this.right = false
        }
        if (this.y == 100) {
          this.up = false
          this.down = false
          this.left = true
          this.right = false
        }
        if (this.y == 620) {
          this.up = false
          this.down = false
          this.left = false
          this.right = true
        }
        this.deadcount = 0
        this.collide = false
        collide = false
        this.dead2 = false
      }
      if (power == false && this.deadcount >= 100 && this.follow == true) {
        this.deadcount = 0
        this.collide = false
        this.dead2 = false
        collide = false
        this.deadcount = 0
      }
    }
    if (this.follow == false && jump == false && this.dead == false && this.dead2 == false && dead == false) {
      this.imagex = this.x
      this.imagey = this.y
      this.fall = 5
      this.jumpTime = 0
      if (this.x == 550 && this.y == 620) {
        this.up = true
        this.down = false
        this.left = false
        this.right = false
      }
      if (this.x == 550 && this.y == 100) {
        this.up = false
        this.down = false
        this.left = true
        this.right = false
      }
      if (this.x == 50 && this.y == 100) {
        this.up = false
        this.down = true
        this.left = false
        this.right = false
      }
      if (this.x == 50 && this.y == 620) {
        this.up = false
        this.down = false
        this.left = false
        this.right = true
      }
      if (this.x == 300 && this.y == 620) {
        this.lapcount += 1
      }
      if (this.up == true) {
        this.y -= 2
      } else if (this.down == true) {
        this.y += 2
      } else if (this.left == true) {
        this.x -= 2
      } else if (this.right == true) {
        this.x += 2
      }
    }
    if (this.dead == false && this.dead2 == false && jump == false && dead == false) {
      if (this.follow == true && this.followtimer >= 100 && this.arrayfollow == false) {
        this.fall = 5
        this.jumpTime = 0
        this.imagex = this.x
        this.imagey = this.y
        if (this.followx <= 100) {
          this.following = 1
        } else if (this.followx <= 200 && this.followx > 100) {
          this.following = 2
        } else if (this.followx <= 300 && this.followx > 200) {
          this.following = 3
        } else if (this.followx <= 400 && this.followx > 300) {
          this.following = 4
        } else if (this.followx <= 500 && this.followx > 400) {
          this.following = 5
        } else if (this.followx > 500) {
          this.following = 6
        }
        switch (this.following) {
          case 1:
            if (this.x > 50 && (this.followy - this.y) != 0) {
              this.x -= 2
            }
            if (this.x == 50 && (this.followy - this.y) != 0) {
              this.y -= 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) >= 0) {
              this.x += 2
            }
            if (abs(this.followy - this.y) <= 2 && abs(this.followx - this.x) <= 2) {
              this.arrayfollow = true
              this.followtimer = 0
            }
            break;
          case 2:
            if (this.x > 150 && (this.followy - this.y) != 0) {
              this.x -= 2
            }
            if (this.x < 150 && (this.followy - this.y) != 0) {
              this.x += 2
            }
            if (this.x == 150 && (this.followy - this.y) != 0) {
              this.y -= 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) >= 0) {
              this.x += 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) <= 0) {
              this.x -= 2
            }
            if (abs(this.followy - this.y) <= 2 && abs(this.followx - this.x) <= 2) {
              this.arrayfollow = true
              this.followtimer = 0
            }
            break;
          case 3:
            if (this.x > 250 && (this.followy - this.y) != 0) {
              this.x -= 2
            }
            if (this.x < 250 && (this.followy - this.y) != 0) {
              this.x += 2
            }
            if (this.x == 250 && (this.followy - this.y) != 0) {
              this.y -= 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) >= 0) {
              this.x += 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) <= 0) {
              this.x -= 2
            }
            if (abs(this.followy - this.y) <= 2 && abs(this.followx - this.x) <= 2) {
              this.arrayfollow = true
              this.followtimer = 0
            }
            break;
          case 4:
            if (this.x < 350 && (this.followy - this.y) != 0) {
              this.x += 2
            }
            if (this.x > 350 && (this.followy - this.y) != 0) {
              this.x -= 2
            }
            if (this.x == 350 && (this.followy - this.y) != 0) {
              this.y -= 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) >= 0) {
              this.x += 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) <= 0) {
              this.x -= 2
            }
            if (abs(this.followy - this.y) <= 2 && abs(this.followx - this.x) <= 2) {
              this.arrayfollow = true
              this.followtimer = 0
            }
            break;
          case 5:
            if (this.x < 450 && (this.followy - this.y) != 0) {
              this.x += 2
            }
            if (this.x > 450 && (this.followy - this.y) != 0) {
              this.x -= 2
            }
            if (this.x == 450 && (this.followy - this.y) != 0) {
              this.y -= 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) >= 0) {
              this.x += 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) <= 0) {
              this.x -= 2
            }
            if (abs(this.followy - this.y) <= 2 && abs(this.followx - this.x) <= 2) {
              this.arrayfollow = true
              this.followtimer = 0
            }
            break;
          case 6:
            if (this.x < 550 && (this.followy - this.y) != 0) {
              this.x += 2
            }
            if (this.x == 550 && (this.followy - this.y) != 0) {
              this.y -= 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) >= 0) {
              this.x += 2
            }
            if ((this.followy - this.y) == 0 && (this.followx - this.x) <= 0) {
              this.x -= 2
            }
            if (abs(this.followy - this.y) <= 2 && (this.followx - this.x) <= 2) {
              this.arrayfollow = true
              this.followtimer = 0
            }
            break;
        }
      }
      if (this.arrayfollow == true && dead == false) {

        this.imagex = this.x
        this.imagey = this.y
        this.pos = this.history[arraycount]
        this.x = this.pos.x
        this.y = this.pos.y
        this.followx = 0
        this.followy = 0
        if (this.history[arraycount].x != this.history[arraycount + 1].x || this.history[arraycount].y != this.history[arraycount + 1].y) {
          arraycount += 1
        } else {
          while (this.history[arraycount].x == this.history[arraycount + 1].x && this.history[arraycount].y == this.history[arraycount + 1].y) {
            arraycount += 1
          }
        }
      }
    }
    if (this.dead == false && dead == false) {
      if (this.lapcount >= 2 && this.followtimer == 0) {
        siren.setVolume(1)
        siren.play()
        this.followx = c1.x
        this.followy = c1.y
      }
      if (this.lapcount >= 2) {
        this.follow = true
        this.followtimer += 1
      }
      if (this.follow == true) {
        let v = createVector(c1.x, c1.y)
        this.history.push(v)
      }
    }
    // if (this.dead == false && jump == true && dead == false) {
    if (this.dead == false && this.dead2 == false && jump == true && dead == false && collide == false) {
      this.imagey -= this.fall
      this.fall *= 0.9
      if (this.jumpTime >= 35) {
        jump = false
      }
    }
  }
}