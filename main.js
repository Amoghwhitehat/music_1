song1="";
song2="";
song1status="";
song2status="";
left_y=0;
left_x=0;
right_y=0;
right_x=0;
score_right_wrist=0;
score_left_wrist=0;
function preload()
{
    song1=loadSound('song.mp3');
    song2=loadSound('palat.mp3');
}
function setup()
{
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,gotPoses);
    posenet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,450,450);
    song1status=song1.isPlaying();
    song2status=song2.isPlaying();

    if(score_right_wrist>0.2)
    {
        circle(right_x,right_y,20);
        song2.stop();
        if(song1status==false)
        {
            song1.play();
            document.getElementById("update").innerHTML="Song  = Song 1 is playing"
        }
    }

    if(score_left_wrist>0.2)
    {
        circle(left_x,left_y,20);
        song1.stop();
        if(song2status==false)
        {
            song2.play();
            document.getElementById("update").innerHTML="Song  = Song 2 is playing"
        }
    }
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(error,results)
{
if(results.length>0)
{
    console.log('left_x=' + left_x,'left_y=' +left_y)
}
}