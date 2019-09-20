function setup() {
	createCanvas(windowWidth, windowHeight);
	var radius = 30;
	var xCoord = 0;
	var yCoord = 0;
system(radius)

}
//Center - (50,50)

//function system(xCoord,yCoord,radius)
function system(radius)
{
	for(var i = 0; i < 10;i++)
	{
		for(var j = 0;j < 10;j++)
		{
			var x = i * 10;
			var y = j * 10;
			stroke(0);
			fill(255);
			rect(x,y,10,10);
		}
	}

	degree = 0
	while(degree <= 90){
		if(degree % 4 == 0){
			var y = Math.sin(degree * Math.PI / 180)* radius;
			var x = sqrt((radius**2) - (y**2));
			console.log(x,y);
			
			//First Quadrant
			stroke('green');
			ellipse(radius + x,radius - y,1,1);

			//Second Quadrant
			stroke('green');
			ellipse(abs((2*radius - x)-radius),radius - y,1,1);

			//Third Quadrant
			stroke('green');
			ellipse(abs((2*radius - x)-radius),radius + y,1,1);

			//Fourth Quadrant
			stroke('green');
			ellipse(radius + x,radius+y,1,1);
		}
		degree++;

	}


	stroke('red');
	line(0,radius,2*radius,radius);
	
	stroke('red');
	line(radius,0,radius,2*radius);


}
	
function draw() {

}
