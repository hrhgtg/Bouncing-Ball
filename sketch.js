var a, b, c, d;
var music ,box, e, f, g;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,500);
    
    //create 4 different surfaces
    a = createSprite(100,470,182,20);//blue
    a.shapeColor = "#00FFFF";

    b = createSprite(300,470,182,20);//orange
    b.shapeColor = "#4B0082";

    c = createSprite(500,470,182,20);//red
    c.shapeColor = "#9F000F";

    d = createSprite(700,470,182,20);//green
    d.shapeColor = "#59E817";

    //create box sprite and give velocity
    box = createSprite(random(20,730),100,20,20);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 4;

    e = createSprite(350,0,900,10);//left edge
    e.visible = false;

    f = createSprite(0,250,10,900);//top edge
    f.visible = false;

    g = createSprite(800,100,10,900);//right edge
    g.visible = false;
}

function draw() {
    background("#F52887");//Pink
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(e);
    box.bounceOff(f);
    box.bounceOff(g);
    //add condition to check if box touching surface and make it box
    if(a.isTouching(box) && box.collide(a)){
        box.shapeColor = "#00FFFF";
        box.velocityX = 0;
        music.stop();
    }
    if(b.isTouching(box) && box.bounceOff(b)){
        box.shapeColor = "#4B0082";
        music.play();
    }
    if(c.isTouching(box) && box.bounceOff(c)){
        box.shapeColor = "#9F000F";
        music.play();
    }
    if(d.isTouching(box) && box.bounceOff(d)){
        box.shapeColor = "#59E817";
    }
    drawSprites();
}

// Existing code unchanged.
window.onload = function() {
    var context = new AudioContext();
    // Setup all nodes
  }
  
  // One-liner to resume playback when user interacted with the page.
  document.querySelector('button').addEventListener('click', function() {
    context.resume().then(() => {
      console.log('Playback resumed successfully');
    });
  });
