const canvas = document.getElementById("waveform");
const ctx = canvas.getContext("2d");
const width = canvas.width; // Canvas width => Frequency is relative to this
const height = canvas.height / 2; // Canvas height over two => Amplitude: Volume
const freq = 1; // How many cycles per canvas width => Frequency: Tone & Speed

const osc = new Tone.Oscillator({
    type: "square",
    frequency: 620,
    volume: -16
}).toDestination();

const wave = new Tone.Waveform();
osc.connect(wave);

let buffer = wave.getValue(0);

const draw = () => {
    console.log(buffer)
    
    ctx.clearRect(0, 0, width, height * 2);
    ctx.strokeStyle = "gray"; // Pick a color
    for (let i = 0; i < buffer.length; i++) {
        let x = Map(i, 0, buffer.length, 0, width);
        let y = Map(buffer[i], -1, 1, 0, height);
        ctx.stroke()
        
    }

    // //draw x axis
    // ctx.beginPath(); // Draw a new path
    // ctx.strokeStyle = "white"; // Pick a color
    // ctx.moveTo(0, height); // Where to start drawing
    // ctx.lineTo(width, height); // Where to draw to
    // ctx.stroke(); // Draw

    // // draw horizontal line of current amplitude
    // ctx.beginPath(); // Draw a new path
    // ctx.moveTo(0, height); // Where to start drawing
    // 
    // for (var i = 0; i < buffer.length; i++) { // Loop from left side to current x
    //     ctx.moveTo(i, y); // Where to start drawing
    //     ctx.lineTo(buffer.length, y); // Where to draw to
    // }
    // ctx.stroke(); // Draw
}


document.getElementById("content").addEventListener("mousedown", () => {
    osc.start()
    draw()
});
document.getElementById("content").addEventListener("mouseup", () => osc.stop());