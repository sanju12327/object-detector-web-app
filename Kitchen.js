img="";
status="";

function preload()
{
img = loadImage("Kitchen.png");
}

function setup()
{
canvas = createCanvas(900,600);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    } else
{
    console.log(results);
}
}

function draw()
{
    image(img, 0, 0, 900, 600);

    if(status != "")
    {
        r= random(255);
        g= random(255);
        b= random(255);
    objectDetector.detect(img, gotResult);
      for (i = 0; i < objects.length; i++)
      {
        document.getElementById("status").innerHTML = "Status: Objects Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected: " + objects.length;
        document.getElementById("number_detected").innerHTML = "There are 4 big objects in the picture. COCOSSD detected only 1 " + objects.length;
        fill(r, g, b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
        noFill();
        stroke(r, g, b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
}

function back()
{
    window.location = "Index.html";
}