function Circle(x, y, c, sw) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.sw = sw;
    this.r = 1;
}

Circle.prototype.render = function() {
    noFill();
    stroke(this.c);
    strokeWeight(this.sw);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r);
}

Circle.prototype.increaseSize = function() {
    this.r += 1;
}

Circle.prototype.getData = function() {
    return [this.x, this.y, this.r, this.sw];
}
