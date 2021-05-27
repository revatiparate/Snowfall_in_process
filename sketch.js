
  var christmasBackground , christmasImg;
  var gameState="christmas";
  var nextImg, next,next2,next3;
  var hugbg , hugKidImg , hugkid;
  var skingbg , skingKid , kidimg;
  var endImg;
  var Edges;
  var music , music2;
  // var yay,yayimg;
 // var state=0;

  function preload(){
  christmasImg=loadAnimation("christmas.jpg");
  hugbg=loadAnimation("snow2.jpg");
  hugKidImg=loadAnimation("hugging.png");
  skingbg=loadAnimation("skingbg.jpg");
  kidimg= loadAnimation("sking2.png");
  //endImg=loadAnimation("thankyou.jpg");
 //yayimg=loadAnimation("yay.png");
  music2=loadSound("84747__j008b__ceremoniouslysound-j008b.wav");
  music=loadSound("WhatsApp Ptt 2021-05-11 at 4.00.13 PM.ogg");
  nextImg = loadImage("next1.png");
  }

  function setup() {
    createCanvas(1000,770);
    Edges=createEdgeSprites();

  
  }

  function draw() {
    background("yellow");  
   
    drawSprites();
    if(gameState==="christmas"){
      christmasBackground=createSprite(width/2, height/2, 50, 50);
      christmasBackground.addAnimation("background1",christmasImg);

      next = createSprite(900,640,300,100);
      next.addImage(nextImg);
      next.scale= 0.5;

    //music.play();


      fill("black")
      textSize(20)
      text("MERRY CHRISTMAS !! , click on next to begin",10,50)
    
      if(mousePressedOver(next)  ){
        next.destroy();
        gameState= "hug";
      }
    }


    


    if(gameState==="hug"){
      christmasBackground.addAnimation("background1", hugbg);
      christmasBackground.scale=1.2;

      next2 = createSprite(900,700,300,100);
      next2.addImage(nextImg);
      next2.scale= 0.5;
      //music2.play();

      fill("black");
      textSize(30);
      text("press space for celebrating a happy christmas!!!!" , 50,100)


      if( mousePressedOver(next2)){
        hugkid.destroy();
        next2.destroy();
        gameState="sking";
      }
    }

    

    if(gameState==="sking"){
      christmasBackground.addAnimation("background1",skingbg);
      christmasBackground.scale=1.8;
   
      
  
    //yay.createSprite(930,100,60,30)
    //yay.addAnimation("yahoo",yayimg);
    // if(skingKid.isTouching(Edges)){
      // skingKid.velocityX=0;
    // }
      next3 = createSprite(900,700,300,100);     
      next3.addImage(nextImg);
      next3.scale= 0.5;

      

      fill("black")
      textSize(30)
      text("Press left arrow to move left & enjoy sking!!",20,100)


      //if(gameState==="END"){
    //christmasBackground.changeAnimation(endImg);
  //}
  
    }
       
    }




  

  function keyPressed(){
    if(keyCode===32 && gameState==="hug"){
      hugkid=createSprite(200,650,20,50);
      hugkid.addAnimation("hug",hugKidImg);
      hugkid.scale=0.4;
      
    }

    if(keyCode===LEFT_ARROW && gameState === "sking"){
    
      skingKid=createSprite(900,600,50,60)
      skingKid.addAnimation("kiddo",kidimg);
      skingKid.scale=0.5;
      skingKid.velocityX=-10
      state=1
      
    }
  }