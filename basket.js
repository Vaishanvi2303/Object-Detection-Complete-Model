Status = "";
Basket_images = "";
objects = [];

function preload() 
{
    Basket_images = loadImage("https://img.freepik.com/free-photo/wicker-basket-isolated_2829-18051.jpg?w=360");

}

function setup() 
{
    canvas = createCanvas(640,350);
    canvas.postion(315,200);
    object_Detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    Status = true;
    object_Dectector.detect(Basket_image, gotResults);
}

function gotResults(error,results) 
{
    if(error){
        console.error(error);
     }
     console.log(results);
     objects = results;
}

function draw()
{
    image(Basket_image,0,0,640,350)
    if(Status != "")
    {
        for(i=0; i< object.length; i++)
        {

            document.getElementById("status").innerHTML = "Status: Object Detected";

           
            fill("#fc0303");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + "" + percent + "%" , object[i].x - 800, object[i].y - 175);
            noFill();
            stoke("#fc0303");
            rect(object[i].x - 800, object[i].y - 520, object[i].width - 910, object[i].height - 2640);
        }
    }
}