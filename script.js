const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// note map def
let map = {};

function mapNotes(){
    pitchmp = document.getElementById("pitch").value;
    speed = document.getElementById("speed").value;

    map["a"] = 261.63 * pitchmp
    map["t"] = 293.66 * pitchmp
    map["g"] = 329.63 * pitchmp
    map["c"] = 349.23 * pitchmp
}

mapNotes()

function randomMap(){
    pitchmp = document.getElementById("pitch").value;
    speed = document.getElementById("speed").value;
    
    map["a"] = 1000 * (Math.random() * 0.5) * pitchmp
    map["t"] = 1000 * (Math.random() * 0.5) * pitchmp
    map["g"] = 1000 * (Math.random() * 0.5) * pitchmp
    map["c"] = 1000 * (Math.random() * 0.5) * pitchmp

    console.log()
}

function standardMap(){
    pitchmp = document.getElementById("pitch").value;
    speed = document.getElementById("speed").value;
    
    mapNotes();
}

// funcs

function playNote(frequency, startTime, duration) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(0.7, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
}

// dna sequence to frequencies

function makeMelody(){
    pitchmp = document.getElementById("pitch").value;
    speed = document.getElementById("speed").value;

    ta = document.getElementById("dna");
    let melody = [];

    for (const base of ta.value){
        const lcbase = base.toLowerCase();
        if (["a", "g", "t", "c"].includes(lcbase)){
            melody.push({note: map[lcbase], duration: 0.2 / speed})
        }
    }

    return melody;
}

function playMelody(melody) {
    melody = makeMelody();

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    let currentTime = audioContext.currentTime;

    for (const { note, duration } of melody) {
        playNote(note, currentTime, duration);
        currentTime += duration;
    }
}

document.getElementById('playMelody').addEventListener('click', playMelody);
document.getElementById('randomMap').addEventListener('click', randomMap);
document.getElementById('standardMap').addEventListener('click', standardMap);