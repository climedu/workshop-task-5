# workshop-task-5
Here is a URL to the webpage for this project: [link]( https://climedu.github.io/workshop-task-5/)

## Task
- Produce a 'data self-portrait' in a p5.js sketch by making a visualisation that shows something about yourself from a dataset. Use a csv file to store the dataset.
- Experiment with different ways to present the data, e.g. using text, images, shapes, or colours.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Overview
- Follow the workshop
- Working with CSV files
- Visualisation of the data

## Workshop Notes

### CSV files (Common Separated Values )
- Working with CSV files Common Separated Values > can be found from Microsoft Excels
- With collumn and rows
- Header Row (not included in the data)
  
<img width="400" alt="Screenshot 2025-01-27 at 10 42 08 PM" src="https://github.com/user-attachments/assets/e3600b58-a23b-4891-81fc-f0596af5228f" />

- Load the data first, so it's ready to use
- Include the file name, type, header (treated 1st row as header row)

```ruby
let table;

function preload(){
  table = loadTable('fruits.csv', 'csv', 'header');
}

function setup(){
  createCanvas(400,400);
}

function draw () {
  backgrond(220);
  let rows = table.getRowCount();
  text("Total number of rows in the table = " + rows, 20,100);

```
<img width="400" alt="Screenshot 2025-01-27 at 10 47 04 PM" src="https://github.com/user-attachments/assets/4bf2204f-071f-4f1d-a86f-702d7844f659" />

- Getting specific rows, adding :
```ruby
let row = table.getrow(0);
let week = row.get("Week");
text(week,20,200);
let apples = row.get("Apples");
text(apples,20,220);
```
### New function and loop for the data

```ruby
let table;

function preload(){
  table = loadTable('fruits.csv', 'csv', 'header');
}

function setup(){
  createCanvas(400,400);
}
function weekLabels(){
  for ( x = 0 ; x< table.getRowCount(); x++){
    let row = table.getRow(x);
    let week = row.get("Week");
    fills(0);
    text(week, 30 + x*60, 350); // start at 30, then add 60 by next time
  }
}

function showApples(){
  for(x=0; x<table.getrowCount(); x++){
  let countApples = row.get("Apples");
  fill(255,0,0);
  text(countApples, 30 + x * 60, 320);

function draw () {
  background (220);
  weekLables();
  showApples();

```

<img width="400" alt="Screenshot 2025-01-27 at 11 44 50 PM" src="https://github.com/user-attachments/assets/f82e62b3-dbfb-4822-942d-990048036bce" />

- To make it bar chart, change the text to rectangle
```ruby
function showApples(){
  for(x=0; x<table.getrowCount(); x++){
  let countApples = row.get("Apples");
  fill(255,0,0);
  rect(30 + x * 60, 320, 30, -countApples); //30 as width, countApples as height (going up)
```

<img width="400" alt="Screenshot 2025-01-27 at 11 55 39 PM" src="https://github.com/user-attachments/assets/d297b9a6-c7b7-49b4-a8ee-361e8d739ba2" />

- Besides having local file of csv files, it's also possible to put url data from internet (stored online) that can be updated anytime

- Showing indifidual images to represent the data

```ruby
let table;
let apple;

function preload(){
  table = loadTable('fruits.csv', 'csv', 'header);
  apple = loadImage('images/apple.png');
}

function setup(){
  createCanvas(400,400);
  imageMode(CENTER);
}
function weekLabels(){
  for ( x = 0 ; x< table.getRowCount(); x++){
    let row = table.getRow(x);
    let week = row.get("Week");
    fills(0);
    text(week, 30 + x*60, 350); // start at 30, then add 60 by next time
  }
}

function showApples(){
  for(x=0; x<table.getrowCount(); x++){
  let row = table.getRow(x)
  let countApples = row.get("Apples");
  //need some loop here (nested)
  for (y = 0; <countApples; y++){
    image(apple, 30 + x *60, 300- y * 50, 40,40);
  }
 } 

function draw () {
  background (220);
  showApples ();
  text('Week', width/2, 300);
```
- Showing other data as well
  
```ruby
let table;
let apple, banana, melon, orange, pear;

function preload(){
  table = loadTable('fruits.csv', 'csv', 'header);
  apple = loadImage('images/apple.png');
  banana = loadImage('images/banana.png');
  melon = loadImage('images/melon.png');
  orange = loadImage('images/orange.png');
  pear = loadImage('images/pear.png');
}

function setup(){
  createCanvas(400,400);
  imageMode(CENTER);
}

function allMyFruit(){
  let xPos = 30;
  let yPos = 50; //storing the y data since it's moving and will be used in if conditionals
  for(x=0; x<table.getrowCount(); x++){
  let row = table.getRow(x)
  let countApples = row.get("Apples");
  if(countApples> 0 ){
      for (y = 0; <countApples; y++){
        image(apple, xPos, yPos, 40,40); //50 to make it in 1 line
        xPos += 20;
        if (xPos> 370){
          yPos += 30; // means add 30 each time
          xPos = 30 // means always 30
        }
      }
  }

  let countBananas = row.get("Bananas");
  if(countBananas> 0 ){
      for (y = 0; <countBananas; y++){
        image(banana, xPos, yPos, 40,40);
        xPos += 20;
        if (xPos> 370){
          yPos += 30; // means add 30 each time
          xPos = 30 // means always 30
        }
      }
  }
  let countMelons = row.get("Melons");
  if(countMelons> 0 ){
      for (y = 0; <countMelons; y++){
        image(melon, xPos, yPos, 40,40);
        xPos += 20;
        if (xPos> 370){
          yPos += 30; // means add 30 each time
          xPos = 30 // means always 30
        }
      }
  }
  let countOranges = row.get("Oranges");
  if(countOranges> 0 ){
      for (y = 0; <countBananas; y++){
        image(orange, xPos, yPos, 40,40);
        xPos += 20;
        if (xPos> 370){
          yPos += 30; // means add 30 each time
          xPos = 30 // means always 30
        }
      }
  }
  let countPears = row.get("Pears");
  if(countPears> 0 ){
      for (y = 0; <countPears; y++){
        image(pear, xPos, yPos, 40,40);
        xPos += 20;
        if (xPos> 370){
          yPos += 30; // means add 30 each time
          xPos = 30 // means always 30
        }
      }
  }
}


function draw () {
  background (220);
  allMyFruit();
```

<img width="400" alt="Screenshot 2025-01-28 at 12 22 47 AM" src="https://github.com/user-attachments/assets/db0c8532-a07a-42be-8875-7dcf92232c12" />



## Task Journey

Personal data -  Amount of workouts for each type
- Week, Swimming, Weight Lifting, Running, Other Workout
- 1, 2, 3, 1, 2
- 2, 2, 3, 1, 0 
- 3, 2, 3, 1, 1
- 4, 0, 3, 2, 1

### Process 1
Drafting how I want to visualize my data
- The square size depends on the sum result of each quantity
- Next pics is to show the data with pics, going horizontally

<img width="400" alt="Screenshot 2025-01-28 at 1 34 35 AM" src="https://github.com/user-attachments/assets/7112da02-2995-4379-b00a-bb09a061fa3a" />


### Process 2
Create the csv files in the google spreadsheets and download them in csv format

<img width="400" alt="Screenshot 2025-01-28 at 1 39 52 AM" src="https://github.com/user-attachments/assets/1fe11094-50d4-45ea-834d-dbb8a9a82f12" />


### Process 3

### Process 4

### Process 5


### Commentaries
-

## Future Development
- 
