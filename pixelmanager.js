function PixelManager(color, sWeight, attemptsLimit, continueAttemptsLimit) {
    this.color = color;
    this.sWeight = sWeight;
    this.circles = [];
    this.attemptsLimit = attemptsLimit;
    this.attempts = 0;
    this.continueAttempts = 0;
    this.continueAttemptsLimit = continueAttemptsLimit;
}

PixelManager.prototype.construct = function() {
    while (this.attempts < this.attemptsLimit) {
        var rpos = random(renderPixels);
        this.circles.push(new Circle(rpos[0], rpos[1], this.color, this.sWeight));
        renderPixels.slice(rpos, 1);
        this.attempts++;
    }
}

PixelManager.prototype.render = function() {
    for (var i = 0; i < this.circles.length; i++) {
        var c = this.circles[i];
        if (this.isCircleOverlapping(c) == false) {
            c.increaseSize();
        }
        c.render();
    }
}

PixelManager.prototype.continue = function() {
    if (this.attempts == this.attemptsLimit) {
        if (this.continueAttempts <= this.continueAttemptsLimit) {
            var rpos = random(renderPixels);
            var c = new Circle(rpos[0], rpos[1], this.color, this.sWeight);
            while (this.isCircleOverlapping(c) == true) {
                renderPixels.slice(rpos, 1);
                rpos = random(renderPixels);
                c = new Circle(rpos[0], rpos[1], this.color, this.sWeight);
            }
            this.circles.push(c);
            renderPixels.slice(rpos, 1);

            this.continueAttempts++;
        }
    }
}

PixelManager.prototype.isCircleOverlapping = function(e) {
    for (var i = 0; i < this.circles.length; i++) {
        var c = this.circles[i];
        if (c != e) {
            var ed = e.getData();
            var cd = c.getData();
            var distance = dist(ed[0], ed[1], cd[0], cd[1]);
            if (distance <= (ed[2] + cd[2])/2) return true;
        }
    }

    return false;
}
