difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(680, 600);

    canvas = createCanvas(700, 500);
    canvas.position(800, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('pink');
    fill('yellow');
    textSize(difference);
    text("Hemakshi", 50, 400)
}

function modelLoaded() {
    console.log('PoseNet Is Intilised!');
}

function gotPoses(results) {
   if (results.length > 0) 
   {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("noseX = " + noseX + "noseY = " + noseY);

     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);

     console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
   } 
}

