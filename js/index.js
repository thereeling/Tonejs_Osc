var ready = false;
const osc = new Tone.Oscillator();
osc.connect(Tone.Master);

function draw() {
    if (ready) {

    }
    else {

    }
}

function mousePressed() {
    if (!ready) {
        ready = true;
    }
}