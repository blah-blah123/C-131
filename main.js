img = "";
status1 = "";
objects = [];

function preload() {
    img = loadImage("haha.jpg")
}

function setup() {
    canvas = createCanvas(600, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting objects";
}

function modelLoaded() {
    console.log("Model Has Been Loaded!");
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
    if (status1 != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status - Objects Detected";
            document.getElementById("status2").innerHTML = "There are 4 objects in this picture but cocossd could detect 3 out of it";
            fill("#ff0000");
            text(objects[i].label, objects[i].x - 15, objects[i].y - 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }

}