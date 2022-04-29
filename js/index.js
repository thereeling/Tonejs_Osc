
const osc = new Tone.Oscillator({
    type: "square",
    frequency: 440,
    volume: -16
}).toDestination();
// ui({
//     tone: osc,
//     parent: document.querySelector("#content")
// });

// bind the interface

document.getElementById("content").addEventListener("down", () => alert('yoo'));

// document.getElementById("content").addEventListener("down", () => osc.start());
// document.getElementById("content").addEventListener("up", () => osc.stop());