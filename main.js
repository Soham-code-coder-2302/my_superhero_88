canvas=new fabric.Canvas('Canvas');

block_height=30;
block_width=30;

player_x=10;
player_y=10;

player_object="";
block_image_object="";

function player_update(){
fabric.Image.fromURL("player.png",function(Img) {
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}

function object_update(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
    block_image_object=Img;
    block_image_object.scaleToWidth(block_width);
    block_image_object.scaleToHeight(block_height);
    block_image_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_image_object);
    });
    }
    


canvas.addEventlister("keydown",my_keydown);

function my_keydown (e) {
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keyPressed=='38'){
    up();
    console.log("up");
}
if(keyPressed=='39'){
    
    right();
    console.log("right");
}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='72'){
    object_update('thor_face.png')
    console.log("h");
}
if(keyPressed=='66'){
    object_update('ironman_body.png')
    console.log("g");
}
if(keyPressed=='76'){
    object_update('spiderman_legs.png')
    console.log("l");
}
if(keyPressed=='84'){
    object_update('captain_america_left_hand.png')
    console.log("t");
}
if(keyPressed=='82'){
    object_update('hulk_right_hand.png')
    console.log("r");
}

if(e.shiftKey ==true && keyPressed=='80'){
    console.log("shift+p press");
    block_width=block_width+10;
block_height=block_height+10;

document.getElementById("width").innerHTML=block_width;
document.getElementById("height").innerHTML=block_height;

}

if(e.shiftKey ==true && keyPressed=='77'){
    console.log("shift+m press");
    block_width=block_width-10;
block_height=block_height-10;

document.getElementById("width").innerHTML=block_width;
document.getElementById("height").innerHTML=block_height;
}
}



   function up(){

        if(player_y>=0){
    
        player_y=player_y-block_height;
        console.log("blockheight- "+ block_height) ;
        console.log("when up arrow key is presed, X= "+ player_x + "y= "+ player_y);
        canvas.remove(player_object);
    
        player_update();}
        
        }
        function up(){

            if(player_y>=0){
        
            player_y=player_y - block_height;
            console.log("blockheight- "+ block_height) ;
            console.log("when up arrow key is presed, X= "+ player_x + "y= "+ player_y);
            canvas.remove(player_object);
        
            player_update();}
            
            }

        function down(){

            if(player_y<=500){
        
            player_y=player_y + block_height;
            console.log("blockheight- "+ block_height) ;
            console.log("when down  arrow key is presed, X= "+ player_x + "y= "+ player_y);
            canvas.remove(player_object);
        
            player_update();
            
            }
        }

            function right(){

                if(player_x<=850){
            
                player_x=player_x + block_width;
                console.log("blockwidth- "+ block_width) ;
                console.log("when right arrow key is presed, X= "+ player_x + "x= "+ player_x);
                canvas.remove(player_object);
            
                player_update();
                
                }
            }
            function left(){

                if(player_x>0){
            
                player_x=player_x - block_width;
                console.log("blockwidth- "+ block_width) ;
                console.log("when left arrow key is presed, X= "+ player_x + "x= "+ player_x);
                canvas.remove(player_object);
            
                player_update();
                
                }
            }
        