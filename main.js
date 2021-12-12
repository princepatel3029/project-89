var canvas = new fabric.Canvas('myCanvas');

)
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
fabric.Image.fromURl(get_image, function(Img){
block_image_object = img;


block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top: block_y
left: block_x
})
}
canvas.add(block_image_object);
});
	// to upload images
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // add appropriate keycode
	{
		new_image('rr1.png');
		console.log("r"); // upload red ranger
	}
	if(keyPressed == '71')
	{   new_image('gr.png');
		block_x = 200;
		console.log("g")
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{   new_image('yr.png')
		block_x =350;
		console.log("y")
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{   new_image('pr.png')
		block_x = 600;
		console.log("p")
		// upload pink ranger
	}
	if(keyPressed == '66')
	{ new_image('br.png')
		block_x = 700;
		console.log("b")
	// upload blue ranger
	}
	
}

