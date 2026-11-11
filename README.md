# Amidar — Master of Light

A browser-playable recreation of Konami's classic arcade game Amidar, built with p5.js for GAM100F20KR.

[![Live Demo](https://img.shields.io/badge/Play%20Online-p5.js%20Editor-blue)](https://editor.p5js.org/SeungHeon.Jeon/full/OHsZVpid6)
[![Language](https://img.shields.io/badge/Language-JavaScript-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**[Play in the browser](https://editor.p5js.org/SeungHeon.Jeon/full/OHsZVpid6)**

## Highlights

- Recreated Konami's Amidar in JavaScript with p5.js and no game engine: 7 enemies, 28 fillable boxes over 288 coins, 53 sprite frames
- Reproduced the arcade's Amidakuji (ghost-leg) movement for 6 enemies on a 23-rung ladder maze

## My Role

Team of 3 (DigiPen GAM100, Fall 2020). I was the team's Tech Lead.

## Features

- **Grid traversal gameplay** — Move along fixed paths to collect all coins on the map while enemies patrol the same grid
- **Rectangle fill mechanic** — Collecting every coin surrounding a rectangle fills it in, mirroring the original Amidar territory-claiming design
- **Power-up system** — Filling all four corner rectangles temporarily empowers the player to attack enemies instead of fleeing them
- **Multi-stage progression** — Stages loop until the player exhausts all lives, increasing replayability
- **Full audio feedback** — Distinct sound effects for coin collection, attacks, stage clears, death, and background music per stage parity

## Demo

![screenshot](./screenshot.png)

▶ **Play in browser:** https://editor.p5js.org/SeungHeon.Jeon/full/OHsZVpid6

## Built With

- **p5.js** — Chosen for rapid canvas rendering and a built-in game loop (`setup`/`draw`) that let a three-person team prototype mechanics without a dedicated engine
- **p5.sound** — Handled all in-game audio (coin pickup, attack, stage clear, game over) with minimal setup alongside p5.js
- **Vanilla JavaScript (ES5/ES6)** — All game logic (enemy movement rules, box fill detection, sprite state) is hand-rolled without a framework to satisfy course constraints
- **JSON sprite manifests** — Character, enemy, and tracer animations are defined in external JSON files (`character.json`, `enemy.json`, `tracer.json`), keeping art data separate from logic

## Getting Started

### Prerequisites

A modern web browser. No build step or package manager is required — the project ships with `p5.js` and `p5.sound.min.js` included.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/Git-Mere/Amidar-Master-Copy.git
cd Amidar-Master-Copy/gam100mastercopy_MasterOfLight-master
```

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
# Example using Python's built-in server
python3 -m http.server 8080
# Then visit http://localhost:8080
```

### Controls

| Key | Action |
|-----|--------|
| `Shift` | Insert coin (required before starting) |
| `Enter` | Start game |
| `↑ ↓ ← →` | Move character |
| `S` | Make enemies jump (pass beneath them) |

### Cheat Codes (for testing)

| Key | Effect |
|-----|--------|
| `D` | Instantly empower character |
| `A` | Remove empowered state |
| `X` | Force game over |

## What I Learned

**Problem — Detecting when a rectangle is fully enclosed**
Amidar's core mechanic requires the game to know the moment a player completes a closed loop around a rectangular region. Naively checking every coin's state each frame would work, but the grid has multiple overlapping rectangles sharing edges, making a brute-force scan produce false positives.

**Approach**
Each stage's coin nodes were mapped to a graph structure. After every coin collection, only the rectangles adjacent to that node were re-evaluated. A rectangle was marked complete only when all four corner coins *and* the connecting edge coins were in a collected state — preventing a partial-edge from incorrectly triggering a fill.

**Result**
The mechanic behaves correctly across stage transitions (the grid resets but the detection logic is stateless per frame). This also shaped how the power-up trigger was implemented: instead of a separate counter, the game queries the four corner-rectangle fill states directly, so the condition is always derived from the same source of truth.

---

*Team: sangbeom.kim, donga.choi, seungheon.jeon — GAM100F20KR*

## License

No license has been specified for this repository. All rights reserved by the contributors unless otherwise stated.