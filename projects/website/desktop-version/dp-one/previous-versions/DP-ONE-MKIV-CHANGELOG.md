# DP-ONE MkIV — Changelog
## Version 4.06 — 9 March 2026

---

### Bug Fixes

#### Piano Keys Now Produce Sound
**The main fix in this session.** Pressing any key on the 37-key keyboard was previously silent due to a frequency calculation error.

**Root cause:** The `handleKeyPress` function was calling `getNoteFrequency(noteIndex, currentOctave)` and passing the raw key index (a value from 0–36 across the full keyboard) as if it were a semitone value (0–11 within an octave). This produced wildly incorrect — often ultrasonic — frequencies that were inaudible.

**Fix:** A new `noteNameToFrequency(noteName)` helper function was added. This parses the note name stored in each key's `data-noteName` attribute (e.g. `"C4"`, `"F#3"`) and converts it directly to Hz using the standard MIDI formula:

```
frequency = 440 × 2^((midiNote − 69) / 12)
```

`handleKeyPress` now calls this function instead of the broken index-based calculation. All 37 keys, including black keys, play at the correct pitch across all octaves.

---

#### AIF / AIFF File Loading
Loading `.aif` and `.aiff` sample files via the **LOAD WAV** button and the **Sampler** was not working — the OS file picker was filtering them out.

**Fix:** The `accept` attribute on both file inputs (`wavFileInput` and `samplerFileInput`) was updated to lead with `audio/*`, which instructs the operating system to display all audio files in the picker without filtering by MIME type. The explicit extension list is retained as a fallback:

```
accept="audio/*,.wav,.aif,.aiff,.mp3,.ogg,.flac"
```

Both the drum pad loader (LOAD WAV) and the Sampler loader now accept AIF/AIFF files. The Web Audio API's `decodeAudioData` handles AIFF decoding natively in all modern browsers.

---

### Summary of Changes

| Area | Change |
|---|---|
| Piano keyboard | Fixed frequency calculation — all keys now play correctly |
| `noteNameToFrequency()` | New helper function added to convert note names to Hz |
| `handleKeyPress()` | Updated to use `noteNameToFrequency()` |
| LOAD WAV file input | `accept` updated to `audio/*` — now accepts AIF/AIFF |
| Sampler file input | `accept` updated to `audio/*` — now accepts AIF/AIFF |
| Version | Bumped from v4.05 to v4.06 |

---

### Files

| File | Description |
|---|---|
| `dp-one-mkiv-v4.06.html` | Current working build |

---

*dp-one MkIV is a browser-based synthesizer built with the Web Audio API, featuring a 37-key keyboard, multi-waveform synthesis, arpeggiator, step sequencer, drum machine, and sampler.*
