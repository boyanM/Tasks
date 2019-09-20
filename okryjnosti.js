class path{
	constructor(position,distance)
	{
		this.position = position;
		this.distance = distance
	}

}


class deque{

	constructor()
	{
		this.fifo = [];
	}

	fill(newElement)
	{
		this.fifo.push(newElement);
	}

	drop()
	{
		if(isEmpty())return "Empty"
		this.fifo.shift();
	}

	peekfront()
	{	
		if(isEmpty())
			return "Fifo Empty";

		else
			return this.fifo[0];
	}

	isEmpty()
	{
		if(this.fifo.length == 0) return true;
		else
			return false;
	}

}



function setup() {
	createCanvas(3000, 3000);
	graph()
}

function graph(){


var n = 6;
circles =[
["A1",0, 0, 4],
["A2",8 ,0 ,5],
["A3",16, 0 ,5],
["A4",22, 1, 8],
["A5",22 ,-8 ,8],
["A6",30, 2, 6]
]
visualization();

graph = new Array();

for(var i = 0; i < 6; i++)
{
		graph[i] = new Array;

	for(var j =0; j < 6;j++)
	{
		if(i != j && isIntersect(circles[i],circles[j]))
		{
			graph[i].push(circles[j][0]);
		}
	}
	
}
console.log(n)
var last = "A" + n;

seen = [];

for(var i = 0 ;i < graph.length;i++)
{
	seen[i] = [];
	for(var j = 0;j < graph[i].length;j++)
	{
		seen[i].push(graph[i][j])
	}
}

for(var i = 0 ;i < graph.length;i++)
{
	for(var j = 0;j < graph[i].length;j++)
	{
		if (graph[i][j] == "A1")
			seen[i][j] = true; 
	}
}
console.log(last);
console.log(seen);
console.log(graph);

//shortest_path(graph,seen,last);

}

function visualization(){
//Adds 50 besause (0,0) is top left corner
//Coordinate system center center of coordinate system is (50,50)

for(var i = 0;i < 20 ;i++)
{
	for(var j = 0;j < 20;j++)
	{
		var x = i * 30;
		var y = j * 30;
		stroke('black');
		rect(x,y,30,30);
	}
}

stroke('red')
line(300,0,300,600);
line(0,300,600,300);

}


function isIntersect(circleA,circleB){

	var distanceA_B = sqrt((circleA[1] - circleB[1])**2 + (circleA[2] - circleB[2])**2)
	//console.log("circleA = ",circleA[0],"circleB = ",circleB[0],"distanceA_B = ",distanceA_B,"check1 = ",circleA[3] + circleB[3],"check2 = ",abs(circleA[3]-circleB[3]))
	if (distanceA_B < (circleA[3] + circleB[3]) && distanceA_B > abs(circleA[3]-circleB[3]))
	{
		return true;
	}
	
	else
	{ 
		return false;
	}
}


function shortest_path(graph,seen,last)
{
	queue = deque();
	start = path("A1",0);
}
//	queue.append(start)
//	
//	for i in range(len(graph)):
//		for j in range(len(seen[i])):
//			if seen[i][j] == start.position:
//				seen[i][j] = True
//	currentPosition = queue[0]
//	while len(queue) != 0:
//		currentPosition = queue[0]
//		//currentPosition.printPath()
//		queue.popleft()
//	
//		distance = currentPosition.distance
//		currentNumber = int(currentPosition.position[-1])-1
//		
//		if currentPosition.position == last:
//			return distance
//	
//		for i in range(len(graph[currentNumber])):
//			if seen[currentNumber][i] != true:
//				//print("List index => ",i)
//				queue.append(Path(graph[currentNumber][i],distance+1))
//				seen[currentNumber][i] = true
//	return -1			




function draw(){

}


/* 
stroke('black');
fill(255)
if(circle[0] <= 0  && circle[1] <= 0 )
{
ellipse(300 - 30*circle[0],300 - 30*circle[1],circle[2]*30);
console.log(circle[0],circle[1]);


}

if(circle[0] <= 0  && circle[1] >= 0 )
{
ellipse(300 - 30*circle[0],300 + 30*circle[1],circle[2]*30);
console.log(circle[0],circle[1]);

}

if(circle[0] >= 0  && circle[1] <= 0 )
{
ellipse(300 + 30*circle[0],300 - 30*circle[1],circle[2]*30);
console.log(circle[0],circle[1]);

}

if(circle[0] >= 0  && circle[1] >= 0 )
{
ellipse(300 + 30*circle[0],300 + 30*circle[1],circle[2]*30);
console.log(circle[0],circle[1]);

}
*/
