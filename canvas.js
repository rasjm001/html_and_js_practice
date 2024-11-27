console.log('utilising this canvas')
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


var c = canvas.getContext('2d');
c.fillRect(100, 100, 100, 100);
c.fillRect(50, 50, 100, 100);
c.fillRect(300, 300, 500, 30);
c.fillRect(100, 100, 100, 100);