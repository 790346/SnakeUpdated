function Mover(loc, vel, acc, len, clr){
  //this.theta = theta;
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Snake(clr){
  this.clr = clr;
  this.segs = [];
  this.numSegs = 5;
  this.radius = 6.9;
  this.segLength = 2*this.radius;
  for(let i =0; i < this.numSegs; i++){
      this.segs[i] = new JSVector(100, 100);
  }
}

Mover.prototype.update = function(){
  this.loc.add(this.vel);
  // this.theta = JSVector.angleBetween(this.loc, orb.loc);
  // this.loc.setDirection(this.theta);
  //console.log("radius",this.len);
  if(this.loc.x >= (window.innerWidth  - this.len)) {
     this.vel.x *= -1;
     this.loc.x = window.innerWidth - this.len;
  }
  else if (this.loc.x <= this.len){
     this.vel.x *= -1;
     this.loc.x = this.len;
  }
  if(this.loc.y >= window.innerHeight - this.len ) {
     this.loc.y = window.innerHeight - this.len;
     this.vel.y *= -1;
  }
  else if (this.loc.y <= this.len) {
     this.vel.y *= -1;
     this.loc.y = this.len;
  }
  this.render();
}

Mover.prototype.render = function(){
      ctx.fillStyle = this.clr;
      ctx.beginPath();
      ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
      ctx.stroke();
      ctx.fill();
}

Snake.prototype.update = function(){
      this.segs[0] = new JSVector(orb.loc.x, orb.loc.y);
      for(let i = 1; i < this.numSegs; i++){
        var distance = JSVector.subGetNew(this.segs[i], this.segs[i-1]);
        distance.setMag(this.segLength);
        distance.add(this.segs[i-1]);
        this.segs[i] = distance;
        console.log(this.segs[i]);
      }
      this.render();
}

Snake.prototype.render = function(){
  for(let i = 0; i < this.segs.length; i++){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.segs[i].x, this.segs[i].y, this.radius, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
  }
}

// Mover.prototype.accelerate = function(attractLoc, repelLoc){
//     // attractor
//     var dv = new JSVector(attractLoc.x - this.loc.x, attractLoc.y - this.loc.y);
//     distance = Math.sqrt( Math.pow(dv.x, 2) + Math.pow(dv.y , 2));
//     var maxDistance = 350;
//     if (distance < maxDistance) {
//         var scale = 1 - distance / maxDistance;
//         console.log("current vel: "+this.vel.x+", "+this.vel.y);
//         this.vel.x =+ dv.x*scale * 0.1;
//         this.vel.y =+ dv.y*scale * 0.1;
//         console.log("new vel: "+this.vel.x+", "+this.vel.y);
//         console.log("new Loc: "+this.loc.x+", "+this.loc.y);
//     }
//
//
//     // repeller
//     var dv = new JSVector(repelLoc.x - this.loc.x, repelLoc.y - this.loc.y);
//
//     // find distance (magnitude of vector)
//     distance = Math.sqrt( Math.pow(dv.x, 2) + Math.pow(dv.y , 2));
//
//     if (distance < maxDistance) {
//         // 1 - distance/MaxDistance = scaling of influence based on distance from Attractor
//         var scale = 1-distance/maxDistance;
//
//         // adjust the velocity:
//         console.log("Current vel: "+this.vel.x+", "+this.vel.y);
//         this.vel.x += dv.x*scale *-0.2;
//         this.vel.y += dv.y*scale *-0.2;
//         console.log("New vel: "+this.vel.x+", "+this.vel.y);
//         console.log("New Loc: "+this.loc.x+", "+this.loc.y);
//
//     }
//     /*
//     if(distance)
//     */
//
//
//     //
// }

// Attractor.prototype.update = function(){
//
//   this.loc.add(this.vel);
//   if(this.loc.x > window.innerWidth - this.len){
//     this.loc.x = 0;  // set to 0, not len, since anchor is at upper left
//   }
//   else if(this.loc.x < 0){
//     this.loc.x = window.innerWidth - this.len;
//   }
//
//   if(this.loc.y > window.innerHeight - this.len){
//     this.loc.y = 0;
//   }
//   else if(this.loc.y < 0){
//     this.loc.y = window.innerHeight - this.len;
//   }
//   this.render();
// }
//
// Repeller.prototype.update = function(){
//   if(this.loc.x >= window.innerWidth){
//     this.loc.x = 0;
//   }
//   if(this.loc.x >= 0){
//     this.loc.x = window.innerWidth;
//   }
//   if(this.loc.y >= window.innerHeight){
//     this.loc.y = 0;
//   }
//   if(this.loc.y >= 0){
//     this.loc.y = window.innerHeight;
//   }
//   repeller.render();
// }

// Orbiter.prototype.update = function(){
//     this.angle += this.angleVelocity;
//     this.radiusV.setDirection(this.angle);
//     this.loc = JSVector.addGetNew(this.radiusV, this.o.loc);
//     this.render();
//     //this.len = 0;
// }
// // Mover.prototype.render = function(){
// //     ctx.fillStyle = this.clr;
// //     ctx.beginPath();
// //     ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
// //     ctx.stroke();
// //     ctx.fill();
// // }
// //
// // Attractor.prototype.render = function(){
// //   //console.log(this.loc.x);
// //   ctx.fillStyle = this.clr;
// //   ctx.beginPath();
// //   ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
// //   ctx.stroke();
// //   ctx.fill();
// // }
// // Repeller.prototype.render = function(){
// //   //console.log(this.loc.x);
// //   ctx.fillStyle = this.clr;
// //   ctx.beginPath();
// //   ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
// //   ctx.stroke();
// //   ctx.fill();
// // }
//
// Orbiter.prototype.render = function(){
//     ctx.fillStyle = this.clr;
//     ctx.beginPath();
//     ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
//     ctx.stroke();
//     ctx.fill();
// }

// Attractor.prototype.update = function(){
//    if(this.loc.x >= window.innerWidth || this.loc.x )
// }
