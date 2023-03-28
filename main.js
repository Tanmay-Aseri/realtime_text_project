difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    video.position(0 , 100)

    canvas = createCanvas(500, 450);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    background("#03fc45");

    fill("#1a038f");
    text("TANMAY", 10, 225);
    textSize(difference);
}

function preload(){
    
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
       
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = "+leftWristX+"rightWristX"+rightWristX+"difference = "+diffrence);
    }
}