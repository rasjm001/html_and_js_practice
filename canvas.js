console.log('utilising this canvas')
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');

//to create a fill style for the rectangles- this will apply to all rectangle if no further fill styles are declared

c.fillStyle = 'rgba(250, 0, 0, 0.4';

// to create a simple rectangle ( xposition, yposition, xsize, y size)
c.fillRect(100, 100, 100, 100);

//create a new fill style for a the next rectangle:
c.fillStyle = 'rgba(0, 250, 0, 0.5';
c.fillRect(1000, 50, 100, 100);

//create a new fill style for a the next rectangle:
c.fillStyle = 'rgba(0, 0, 250, 0.5';
c.fillRect(300, 300, 500, 30);


//line here

//start the line
c.beginPath();

//initial starting point
c.moveTo(50,300);

//where the line moves to
c.lineTo(300,100);

// next location line will move to
c.lineTo(600,500);

//used to modify line style
c.strokeStyle = "#fa35e3";

//function required to create the line
c.stroke();



//create an arc or circle

//need to declare starting a new path, otherwise will be connected to the previous line
c.beginPath();
c.arc(500, 100, 50, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();