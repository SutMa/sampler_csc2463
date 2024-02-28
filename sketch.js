


let sample1, sample2, sample3, sample4;


let reverb;


let button1, button2, button3, button4;
let slider, reverbLabel;

function preload() {
  
  sample1 = loadSound('sounds/sample1.mp3');
  sample2 = loadSound('sounds/sample2.mp3');
  sample3 = loadSound('sounds/sample3.mp3');
  sample4 = loadSound('sounds/sample4.mp3');
}

function setup() {
  createCanvas(400, 200); 
  background(120); 

 
  reverb = new p5.Reverb();

 
  reverb.process(sample1, 3, 2);
  reverb.process(sample2, 3, 2);
  reverb.process(sample3, 3, 2);
  reverb.process(sample4, 3, 2);


  setupSampleButtons();

  
  setupReverbControl();

 
  reverbLabel = 'Reverb Time: 3s';
}

function draw() {
  background(120);  
  fill(255); 
  text(reverbLabel, 160, 150); 
}

function setupSampleButtons() {
  button1 = createButton('Play Sample 1');
  button1.position(10, 10);
  button1.mousePressed(() => sample1.play());

  button2 = createButton('Play Sample 2');
  button2.position(10, 50);
  button2.mousePressed(() => sample2.play());

  button3 = createButton('Play Sample 3');
  button3.position(10, 90);
  button3.mousePressed(() => sample3.play());

  button4 = createButton('Play Sample 4');
  button4.position(10, 130);
  button4.mousePressed(() => sample4.play());
}

function setupReverbControl() {
  slider = createSlider(0, 6, 3, 0.1); 
  slider.position(160, 160);
  slider.input(updateReverb);
}


function updateReverb() {
  let reverbTime = slider.value(); 
  let decayRate = 2; 
  reverb.set(reverbTime, decayRate); 
  reverbLabel = `Reverb Time: ${reverbTime.toFixed(1)}s`; 
}
