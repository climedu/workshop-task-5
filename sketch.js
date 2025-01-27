let table;

function preload() {
  table = loadTable('workoutfile.csv', 'csv', 'header');
}

function setup() {
  createCanvas(500, 800);

  //imageMode(CENTER);
  background(220);

  let totalSwimming = calculateTotalSwimming(); // Get the sum of Swimming
  drawTotalSwimmingSquare(totalSwimming); // Draw one square based on total
  let totalWeightlifting= calculateWeightlifting(); 
  drawTotalWeightliftingSquare(totalWeightlifting); 
  let totalRunning= calculateTotalRunning();
  drawTotalRunningSquare(totalRunning);
  let totalOtherworkout= calculateOtherworkout(); 
  drawTotalOtherworkoutSquare(totalOtherworkout); 
}

function calculateTotalSwimming() {
  let total = 0;
  for (let x = 0; x < table.getRowCount(); x++) {
    let row = table.getRow(x);
    total += int(row.get("Swimming")); // Add up Swimming values
  }
  return total;
}

function calculateWeightlifting() {
  let total = 0;
  for (let x = 0; x < table.getRowCount(); x++) {
    let row = table.getRow(x);
    total += int(row.get("Weight Lifting")); 
  }
  return total;
}

function calculateTotalRunning() {
  let total = 0;
  for (let x = 0; x < table.getRowCount(); x++) {
    let row = table.getRow(x);
    total += int(row.get("Running")); 
  }
  return total;
}

function calculateOtherworkout() {
  let total = 0;
  for (let x = 0; x < table.getRowCount(); x++) {
    let row = table.getRow(x);
    total += int(row.get("Other Workout")); 
  }
  return total;
}


function drawTotalSwimmingSquare(totalSwimming) {
  fill(82, 114, 255);
  noStroke();
  let squareSize = totalSwimming * 10; // Adjust size multiplier as needed
  square(50, 100, squareSize); // Draw the square in the center
  textSize(squareSize/3);
  text('Swimming', 50, 600);
  fill(0);
  text(squareSize/10 + 'x', 53, 120);
}


function drawTotalWeightliftingSquare(totalWeightlifting) {
  fill(203, 108, 230);
  let squareSize = totalWeightlifting * 10; 
  square(250, 100, squareSize); 
  textSize(squareSize/3);
  text('Weight Lifting', 50, 650);
  fill(0);
  text(squareSize/10+ 'x', 250, 140);
}

function drawTotalRunningSquare(totalRunning) {
  fill(0, 151, 178);
  let squareSize = totalRunning * 10; 
  square(50, 400, squareSize); 
  textSize(squareSize/3);
  text('Running', 50, 700);
  fill(0);
  text(squareSize/10+ 'x', 53, 415);
}


function drawTotalOtherworkoutSquare(totalOtherworkout) {
  fill(255, 49, 49);
  let squareSize = totalOtherworkout * 10; 
  square(250, 400, squareSize); 
  textSize(squareSize/3);
  text('Other Workout', 50, 750);
  fill(0);
  text(squareSize/10+ 'x', 252, 412);
}

function draw() {
  fill(0);
  textStyle('Arial');
  textSize(18);
  text('Amount of Workout this Month', 50,50);
}
