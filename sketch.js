let renderObject;
let renderSpace;

let renderPixels;

let pixelmanager;

// preload
function preload() {
    renderObject = loadImage('assets/image.png');
}

// setup
function setup() {
    renderObject.loadPixels();
    renderSpace = [renderObject.width, renderObject.height];
    createCanvas(renderSpace[0], renderSpace[1]);
    //
    loadRenderSpace();
    pixelmanager = new PixelManager(255, 2, 150, 500);
}

// draw
function draw() {
    background(0);
    //
    pixelmanager.construct();
    pixelmanager.render();
    pixelmanager.continue();
}

// load pixels
function loadRenderSpace() {
    renderPixels = [];
    for (var x = 0; x < renderSpace[0]; x++) {
        for (var y = 0; y < renderSpace[1]; y++) {
            var index = (x + y * renderSpace[0]) * 4;
            var r = renderObject.pixels[index+0];
            var g = renderObject.pixels[index+1];
            var b = renderObject.pixels[index+2];
            var bright = (r + g + b) / 3;
            // could do > 254
            // but it's safier
            if (bright > 200) {
                renderPixels.push([x, y]);
            }
        }
    }
}




















//
