# ⚽ SKYLAR FC — PENALTY SHOOT 1984

> *A retro 1980s arcade-style penalty shootout game built entirely in a single HTML file.*

---

## 🎮 About the Game

Skylar FC is a browser-based penalty shootout game inspired by the golden age of arcade cabinets. Complete with CRT scanlines, chiptune sound effects, pixel art graphics, and a full startup melody — all synthesised in real time with no external assets required.

Take 5 penalty shots against a goalkeeper that dives to make saves. Score more goals than the keeper saves to win the match!

---

## 🕹️ How to Play

**Step 1 — Aim your shot**
Use the LEFT and RIGHT buttons (or arrow keys) to move the aim cursor across the goal. There are 5 zones to aim at — corners are harder to reach but trickier for the keeper to save.

**Step 2 — Time your power**
Watch the POWER bar bounce back and forth. The higher the power when you shoot, the harder and faster the shot.

**Step 3 — Shoot!**
Press the SHOOT button (or Spacebar / Enter) to take your penalty. The keeper will dive — did you beat them?

You get **5 shots**. Score more goals than the keeper saves and you win!

---

## ⌨️ Controls

| Action      | Keyboard          | On-Screen Button |
|-------------|-------------------|------------------|
| Aim left    | Arrow Left        | ◄ LEFT           |
| Aim right   | Arrow Right       | RIGHT ►          |
| Shoot       | Spacebar / Enter  | ► SHOOT ◄        |
| Start game  | Spacebar / Enter  | ► SHOOT ◄        |

---

## 🔊 Sound Effects

All audio is generated in real time using the Web Audio API — no audio files needed.

| Event              | Sound                                              |
|--------------------|----------------------------------------------------|
| Game startup       | Full chiptune title melody with bass and drums     |
| Kick               | Retro impact thud                                  |
| Goal scored        | Chiptune fanfare + synthesised crowd cheer         |
| Keeper save        | Descending "wah-wah" failure sound                 |
| Win                | Victory jingle                                     |
| Game over          | Descending defeat melody                           |

> **Note:** Sound plays on first tap or keypress due to browser autoplay policies. On mobile, make sure your device is not on silent mode.

---

## 🖥️ Compatibility

| Platform        | Support                          |
|-----------------|----------------------------------|
| Desktop browser | ✅ Chrome, Firefox, Safari, Edge |
| Tablet          | ✅ iOS Safari, Android Chrome    |
| Mobile phone    | ✅ Works great on larger screens |
| Internet needed | ❌ No — fully self-contained     |

The game is a single `.html` file. No installation, no dependencies, no internet connection required after download. Just open it in any modern browser.

---

## 🗂️ File Structure

```
skylar-retro-penalty.html   ← The entire game (HTML + CSS + JS in one file)
README.md                   ← This file
```

---

## ✨ Features

- **Retro CRT aesthetic** — scanline overlay, phosphor glow, screen flicker animation
- **Pixel art** — hand-coded keeper, player, ball, goalpost and pixel crowd in the stands
- **Chiptune audio engine** — square wave, triangle wave, sawtooth and noise drums all built with Web Audio API
- **Startup title melody** — original 1984-style arcade attract tune plays on first interaction
- **Crowd cheer** — layered noise burst synthesis that swells like a real stadium when Skylar scores
- **Goalkeeper AI** — keeper moves and dives, with randomised save probability based on shot zone
- **Penalty dot tracker** — green/red dots track each shot result like a real shootout scorecard
- **Power bar mechanic** — bouncing power selector adds timing skill to every shot
- **Responsive layout** — scales cleanly for both tablet and desktop screens
- **Personalised** — titled "SKYLAR FC" throughout with Skylar's name on the scoreboard

---

## 🛠️ Technical Notes

- Built with **vanilla HTML, CSS and JavaScript** — no frameworks or libraries
- Graphics rendered on an **HTML5 Canvas** element (520×340 logical pixels)
- All audio synthesised via the **Web Audio API** (oscillators, noise buffers, filters, gain envelopes)
- Uses **Press Start 2P** (Google Fonts) for authentic pixel typography
- `image-rendering: pixelated` ensures crisp scaling on all display sizes
- Touch events handled separately from mouse events for reliable tablet support

---

## 👾 Credits

Designed and built for **Skylar** — arcade champion of 1984 (and beyond). 🌟

---

*© 1984 SKYLAR ARCADE SYSTEMS — ALL RIGHTS RESERVED*
