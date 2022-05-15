canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

greenwidth=75;
greenheight=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greenx=5;
greeny=225;

function add() {
	bgimtag = new Image();
	bgimtag.onload = uploadBackground;
	bgimtag.src = background_image;

	greenimtag = new Image();
	greenimtag.onload = uploadgreencar;
	greenimtag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(bgimtag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greenimtag, greenx, greeny, greenwidth, greenheight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greeny >=0){
		greeny = greeny - 10;
		console.log("when ^ is pressed, x=" + greenx + " | y = " +greeny);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	greeny = greeny + 10;
		console.log("when v is pressed, x=" + greenx + " | y = " +greeny);
		uploadBackground();
		uploadgreencar();
}

function left()
{
	greenx = greenx - 10;
		console.log("when < is pressed, x=" + greenx + " | y = " +greeny);
		uploadBackground();
		uploadgreencar();
}

function right()
{
	greenx = greenx + 10;
		console.log("when > is pressed, x=" + greenx + " | y = " +greeny);
		uploadBackground();
		uploadgreencar();
}
