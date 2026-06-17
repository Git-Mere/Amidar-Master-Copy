# Amidar — Master of Light

A browser-playable recreation of the 1981 Konami arcade game Amidar, built with p5.js for GAM100F20KR.

![p5.js](https://img.shields.io/badge/p5.js-ED225D?style=flat&logo=p5dotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Features

- Coin-collection loop across a grid map — collect every coin to clear the stage and advance
- Rectangle-fill mechanic — surround all four edges of a rectangle with collected coins to fill it
- Corner power-up — fill all four corner rectangles to temporarily empower the player and defeat enemies
- Enemy AI with a counter-move — press **S** to make enemies jump so you can pass beneath them
- Full sound design: per-action audio cues for coin pickup, attacks, stage clear, game over, and more

## Demo

▶ **Play in browser:** https://editor.p5js.org/SeungHeon.Jeon/full/OHsZVpid6

![screenshot](./screenshot.png)

## Built With

- **p5.js** — chosen for its simple draw-loop model, which maps cleanly onto a frame-by-frame arcade game
- **p5.sound** — handles preloading and triggering of the game's per-action audio assets
- **JSON sprite sheets** (`character.json`, `enemy.json`, `tracer.json`, `weak.json`) — keeps sprite metadata separate from rendering logic, making animation frames easy to swap per state

## Getting Started

### Prerequisites

A modern browser — no build tools or package manager required. p5.js is bundled in the repository.

### Run locally

```bash
# Clone the repository
git clone https://github.com/Git-Mere/Amidar-Master-Copy.git

# Open the entry point directly in a browser
open gam100mastercopy_MasterOfLight-master/index.html
```

Or just use the hosted link above — no local setup needed.

### Controls

| Key | Action |
|-----|--------|
| **Shift** | Insert coin |
| **Enter** | Start game |
| **Arrow Keys** | Move character |
| **S** | Make enemies jump (pass beneath them) |

### Cheat codes (for testing)

| Key | Effect |
|-----|--------|
| **D** | Empower character immediately |
| **A** | Remove power |
| **X** | End game |

## What I Learned

**Rectangle-fill detection in a grid game**
The Amidar mechanic requires tracking whether the four edges of each rectangular cell are all covered by collected coins, then triggering a fill event. The tricky part was identifying the moment of completion without scanning every rectangle every frame — working through that edge-state bookkeeping in `Stage.js` and `Coin.js` made the game's core loop possible.

**Sprite animation from JSON definitions**
Rather than hardcoding frame indices in the rendering code, animation states (idle, walk, attack, weak) are declared in JSON files and parsed at runtime in `sprite.js`. This separation meant each team member could adjust art frames without touching game logic, which mattered when iterating quickly under a course deadline.

**Sound preloading in p5.js**
p5.sound requires all assets to be fully loaded before `setup()` runs. Centralising every audio asset in `preload.js` — and validating that every state transition had its cue — caught several missing-asset bugs early and kept the audio code from scattering across classes.

**Team coordination on a shared game state**
With three contributors (김상범, 최동아, 전승헌) each owning different subsystems (map/stage, enemy AI, character/sprite), merge conflicts on `sketch.js` were the main coordination risk. Agreeing on class boundaries early — `Classes.js` as the base, `EnemyClass.js` extending it — kept integration merges manageable.

## License

No license is currently specified for this repository.