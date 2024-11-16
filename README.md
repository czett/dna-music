![banner where?](https://github.com/czett/dna-music/blob/main/deps/banner.png)

# DNA Music Generator

Welcome to the **DNA Music Generator**! This project allows you to input a DNA sequence and hear it transformed into a melody. The nucleotide bases (A, T, G, C) are mapped to musical notes and played back using the Web Audio API.

## Features

- **DNA Sequence to Music:** Enter a DNA sequence and listen to its corresponding melody.
- **Pitch and Speed Control:** Adjust the pitch and speed of the melody using sliders.
- **Customizable Note Mapping:** Choose between a **standard note map** or a **random note map** for generating unique sounds.
  
## How It Works

1. **DNA Input:** Enter a DNA sequence in the textarea (e.g., "ATGCGTACG").
2. **Choose a Note Map:**
   - **Standard Map:** Uses fixed mappings of nucleotides (A = C, T = D, G = E, C = F).
   - **Random Map:** Generates random frequencies for each nucleotide.
3. **Adjust Pitch and Speed:** Use the sliders to modify the pitch and speed of the melody.
4. **Play Melody:** Click the "Play Melody" button to hear your sequence as music.

## Installation

Clone or download this repository and open `index.html` in your browser to start generating DNA music.

```bash
git clone https://github.com/czett/dna-music.git
```

## Technologies Used

- **HTML/CSS** for the user interface.
- **JavaScript** with the **Web Audio API** for audio generation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
