# Amidar: Master of Light

A browser-based recreation of Konami's arcade classic *Amidar*, built with p5.js as a team course project.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![p5.js](https://img.shields.io/badge/built%20with-p5.js-ED225D?logo=p5dotjs&logoColor=white)

## Features

- Grid-based movement across a lattice map — traverse every path to collect coins
- Rectangle-fill mechanic: claim all four corners of a rectangle to fill it and score
- Corner-fill power-up: fill all four corner rectangles to temporarily enter attack mode and defeat enemies
- Enemy AI that patrols the grid; press **S** to make enemies jump and slip beneath them
- Multi-stage progression with increasing difficulty until all lives are lost

## Demo

▶ **Play in browser:** [https://editor.p5js.org/SeungHeon.Jeon/full/OHsZVpid6](https://editor.p5js.org/SeungHeon.Jeon/full/OHsZVpid6)

![screenshot](./screenshot.png)

## Built With

- **p5.js** — canvas rendering and game-loop management; chosen because it abstracts WebCanvas boilerplate while keeping full JavaScript flexibility
- **p5.sound** — synchronised sound effects for coin collect, attack, death, and stage clear events; selected as the native audio companion to p5.js
- **Vanilla JavaScript (ES6 classes)** — game entities (player, enemies, coins, stages) modelled as classes to keep each component independently testable
- **JSON sprite sheets** — character, enemy, and tracer animations described in data files (`character.json`, `enemy.json`, etc.) so frame sequences can be adjusted without touching logic code

## Getting Started

### Prerequisites

A modern web browser. No build tools or package manager required — p5.js is bundled in the repository.

### Running locally

```bash
# Clone the repository
git clone https://github.com/Git-Mere/Amidar-Master-Copy.git
cd Amidar-Master-Copy/gam100mastercopy_MasterOfLight-master
```

Open `index.html` directly in your browser, or serve it with any static file server:

```bash
# Example using Python's built-in server
python3 -m http.server 8080
# Then open http://localhost:8080
```

### Controls

| Key | Action |
|---|---|
| **Shift** | Insert coin (attract screen) |
| **Enter** | Start game |
| **Arrow Keys** | Move character |
| **S** | Make enemies jump (pass beneath them) |

**Cheat codes (testing)**

| Key | Effect |
|---|---|
| **D** | Activate power-up state |
| **A** | Deactivate power-up state |
| **X** | Force game over |

## What I Learned

**Grid-snapped movement and collision on a lattice map**
The original Amidar restricts the player to moving only along pre-defined horizontal and vertical paths. Implementing this meant abandoning free-axis movement and instead snapping the character to the nearest grid node each frame, then validating whether a requested direction had a valid path segment. Off-by-one errors in the tile coordinate math caused the character to clip through walls silently — isolating the coordinate transform into a single conversion function (pixel ↔ grid index) made bugs reproducible and fixable in one place.

**Rectangle-fill detection without a flood-fill**
Detecting when four sides of a rectangle had been fully traversed required tracking per-segment ownership state across two arrays (horizontal edges, vertical edges). Rather than running a spatial flood-fill each frame, we maintained a counter per rectangle and incremented it whenever the last missing edge of that rectangle was claimed. This kept the fill-check O(1) per coin collected instead of O(n) per frame.

**Coordinating sprite animation state across game modes**
The game has distinct states — insert-coin attract screen, active play, power-up mode, death animation, and stage clear — each requiring different animation sequences from the same sprite sheet. Decoupling the animation player (which reads frame indices from a JSON descriptor) from the game-state machine meant state transitions only needed to swap the active animation key rather than rewrite draw logic.

## License

This project was created for course **GAM100F20KR**.
Original arcade game *Amidar* © Konami / Stern. This repository is a non-commercial educational recreation.

**Team:** 김상범 (sangbeom.kim) · 최동아 (donga.choi) · 전승헌 (seungheon.jeon)