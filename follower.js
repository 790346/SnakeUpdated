function Follower(loc, vel, acc, len, clr, theta, angVel) {
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
  this.theta = theta;
  this.angVel = angVel;
}

Follower.prototype.update = function(){
   this.loc.x = movers[0].loc.x + movers[0].len/2.5;
   this.loc.y = movers[0].loc.y + movers[0].len/2.5;
  // this.loc.add(this.vel);
//   this.theta = movers[0].loc.getDirection();
   console.log(this.loc.y);
//   if(this.loc.x )
   this.render();
}
Follower.prototype.render = function(){
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x, this.loc.y, 12, Math.PI*2,0,false);
  ctx.stroke();
  ctx.fill();
}
