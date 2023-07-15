noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    canvas=createCanvas(500,500)
    canvas.position(700,140)
    video=createCapture(VIDEO)
    
    poseNet=ml5.poseNet(video,modalLoaded)
    poseNet.on('pose',gotPoses)
    }
    function modalLoaded(){
        console.log("Modal is Loaded")
    }
    function gotPoses(results){
        if(results.length>0){
console.log(results)
noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y 
leftWristX=results[0].pose.leftWrist.x
rightWristX=results[0].pose.rightWrist.x
difference=floor(leftWristX-rightWristX)
        }
    }

    function draw(){
        background("grey")
        document.getElementById("text-size").innerHTML="Font size of the text will be="+difference
        fill("black")
        stroke("black")
        text( "Badminton",noseX,noseY)
        textSize(difference)
    }