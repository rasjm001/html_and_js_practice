/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topbar_navigation_function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//console.log('utilising this canvas')
var canvas = document.querySelector('canvas');

// set the initial canvas width ( is based on the window size- and it update with the event listener below)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//variable c= logic and methods for drawing on canvas using canvas.getContext(2d)
var c = canvas.getContext('2d');
/*
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




// to create an arc or Circle

/*
//create an arc or circle
//need to declare starting a new path, otherwise will be connected to the previous line
c.beginPath();

//declare using c.arc 
c.arc(500, 100, 50, 0, Math.PI * 2, false);
c.strokeStyle = "blue";

//create using the c.stroke
c.stroke();



/*
var circle_x_value = Math.random() * innerWidth;
var circle_y_value = Math.random() * innerHeight;

// set random starting direction ( either l/r or u/d with +/- values)
var x_velocity = (Math.random() - 0.5) * 15;
var y_velocity = (Math.random() - 0.5) * 15;
var circle_radius = 30;

*/


/*
//create simple for loop to create some circles at random locations
for ( var i = 0; i< 300; i++){

    //console.log(random_colour_generator());
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;

    c.beginPath();

    //declare using c.arc 
    c.arc(x, y, 50, 0, Math.PI * 2, false);
    c.strokeStyle = random_colour_generator();

    //create using the c.stroke
    c.stroke();
}
*/
//function to return a randome hexideciaml value 
function random_colour_generator(){
    // string of possible hexidecimal numbers
    var available_numbers = '0123456789abcdef';

    //variable for the string to return
    var colour_to_return = '#';

    //function to add a random str(0) from the available numbers
    for (var i = 0; i < 6; i++){
        colour_to_return += available_numbers[Math.floor(Math.random() *16)];

    }

   // console.log(colour_to_return);
    return colour_to_return
}

//variable that is used to store the mouse location from the mousemove event listener
var mouse = {
    x: undefined,
    y: undefined
}

//min and max radius values for the cirles
max_radius = 40;
min_radius = 2;


window.addEventListener('mousemove', function(event){
mouse.x = event.x;
mouse.y = event.y;
//console.log(mouse);
})


//event listener to resize the canvas when the window is changed
window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

window.addEventListener("click", function(event){
    console.log("has been clicked");
})







//create an arc or circle
//need to declare starting a new path, otherwise will be connected to the previous line


//variable for the x and y positions of the cirlce to animate

//random starting point for the circle


//create circle Object

function Circle (x, y, dx, dy, radius)
{
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.min_radius = radius;
    //this.colour - colour_array( Math.Floor(Math.random()* colour_array.length) )
    this.colour = random_colour_generator();
   // console.log("thiscolour", this.colour)

    this.draw = function ()
    {
      //  console.log("circle object draw function has been called");
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.colour
        c.fill()
       // console.log("c.fillstype", c.fillStyle)
       // c.strokeStyle = "blue";
        c.stroke();


    }




    this.update = function(){

       // console.log('updatefunction called');
        if (this.x + this.radius> innerWidth || this.x - this.radius < 0)
            {
                this.dx = -this.dx;
        
            }
        
        if ( this.y + this.radius >innerHeight || this.y - this.radius < 0)
        {
    
            this.dy = -this.dy;
        }

        //update the position of the circle x value
        this.x += this.dx;
        this.y += this.dy;


        //interactivity see if the circle is without 50 px of the circle
        if(mouse.x - this.x <50 && mouse.x -this.x > -50 &&  mouse.y -this.y < 50 &&
            mouse.y - this.y > -50
         )
        {
            if (this.radius <max_radius)
            {
                this.radius +=1
            }
            
        }
        else if (this.radius > this.min_radius ){

            this.radius -= 1;
        }



        this.draw();
    }

}

var circle_array = [];



function init()
{   console.log("initi called");
    circle_array = [];
    
    for (var i = 0; i < 200; i++){
        var radius = Math.random() * 5 + 1;
        var x = Math.random() *(innerWidth - radius * 2) + radius ;
        var y = Math.random() *(innerHeight - radius *2) + radius;
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        
        circle_array.push(new Circle(x, y, dx, dy, radius));
    }

}
//create the animation function
function animate_circle(){

    
    requestAnimationFrame(animate_circle);

    c.clearRect(0,0, innerWidth, innerHeight);
   
    for (var i = 0; i < circle_array.length; i ++)
        {
            circle_array[i].update();
        }
    
    //circle_1.update();
    
 //   console.log('animate function has been called');
}
init();
animate_circle();
