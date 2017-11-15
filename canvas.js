window.onload = init;
var canvas;
var ctx;
var movers = [];
var attractor;
var repeller;
var orb;
var follower;
var snake;

function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth - 50;
  canvas.height = window.innerHeight - 50;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = randomColor();
  ctx = canvas.getContext('2d');
  loadMovers(10);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(var i=0; i< movers.length; i++){
    movers[i].update();
  }
  orb.update();
//  follower.update();
  snake.update();
}

function loadMovers(numMovers){
  for(var i=0; i<numMovers; i++){
        var radius = 0;
      //  Math.random() * 30 + 15
        var x = Math.random() * (window.innerWidth - radius*2) + radius;
        var y = Math.random() * (window.innerHeight - radius*2) + radius;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;
        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        var acc = new JSVector(0,0);
        ctx.strokeStyle = randomColor();
        ctx.fillStyle = randomColor();
        movers.push(new Mover(loc, vel, acc, radius, randomColor()));
  }
        orb = new Orbiter(new JSVector(movers[0].loc.x, movers[0].loc.y), 0, .1, 50);
        //follower = new Follower(new JSVector(movers[0].loc.x + 5, movers[0].loc.y + 5), new JSVector(movers[0].vel.x, movers[0].vel.y), 0.1, 50, randomColor());
        snake = new Snake(randomColor());
}

function randomColor(){
  var r = Math.random() * 255|0;
  var g = Math.random() * 255|0;
  var b = Math.random() * 255|0;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// function loadAttractor(){
//   var x = Math.random() * window.innerWidth + 1;
//   console.log(x);
//   var y = Math.random() * window.innerHeight + 1;
//   var radius = 50;
//   var dx = Math.random() * 4 + 1;
//   var dy = Math.random() * 4 + 1;
//   var loc = new JSVector(x, y);
//   var vel = new JSVector(dx, dy);
//   var acc = new JSVector(0,0);
//
//
//         console.log("attractor radius: " + radius+ "  vel: "+dx+","+dy);
//         console.log("location: "+x+ ", "+ y);
//   ctx.strokeStyle = randomColor();
//   ctx.fillStyle = randomColor();
//   attractor = new Attractor(loc, vel, acc, radius, 'red');
// }
//
// function loadRepeller(){
//   var x = Math.random() * window.innerWidth + 1;
//   var y = Math.random() * window.innerHeight + 1;
//   var radius = 45;
//   var dx = Math.random() * 4 + 1;
//   var dy = Math.random() * 4 + 1;
//
//   var loc = new JSVector(x, y);
//   var vel = new JSVector(dx, dy);
//   var acc = new JSVector(0,0);
//
//         console.log("repeller radius: " + radius+ "  vel: "+dx+","+dy);
//         console.log("location: "+x+ ", "+ y);
//
//   ctx.strokeStyle = randomColor();
//   ctx.fillStyle = randomColor();
//   repeller = new Attractor(loc, vel, acc, radius, 'black');
// }

// function loadOrbiter(){
//   var x = Math.random() * window.innerWidth + 1;
//   var y = Math.random() * window.innerHeight + 1;
//   var radius = 10;
//   var dx = Math.random() * 5 + 1;
//   var dy = Math.random() * 5 + 1;
//
//   var loc = new JSVector(x, y);
//   var vel = new JSVector(dx, dy);
//   var acc = new JSVector(0, 0);
// //  console.log(loc);
//   ctx.strokeStyle = randomColor();
//   ctx.fillStyle = randomColor();
//   //orbiter = new Orbiter(loc, vel, acc, radius, 'white', movers[0]);
//   //console.log(orbiter);
// }
// }
// //setInterval(loadMover, 6000);
