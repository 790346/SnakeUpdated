function Orbiter(loc, theta, angularVelocity, amp, clr, theta ){
  this.loc = new JSVector(100,100);
  this.theta = 0;
  this.amp = amp;
  this.angVel = 0.1;
  this.clr = randomColor();
//  this.orb = new JSVector(10, 10)
}

Orbiter.prototype.update = function(){
   this.theta += this.angVel;
   this.loc.setDirection(this.theta);
//   this.orb = JSVector.addGetNew(this.loc, this.obj.loc)
//   console.log(movers[0].loc.x);
   this.loc.x = movers[0].loc.x + Math.cos(this.theta)*this.amp;
   this.loc.y = movers[0].loc.y + Math.sin(this.theta)*this.amp;
   console.log(this.loc.y);
   this.render();
}

Orbiter.prototype.render = function(){

   ctx.fillStyle = this.clr;
   ctx.beginPath();
   ctx.arc(this.loc.x, this.loc.y, 0, Math.PI*2,0,false);
   ctx.stroke();
   ctx.fill();
}
