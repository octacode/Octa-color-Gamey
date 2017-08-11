var squares = document.getElementsByClassName("square");
var ques = document.getElementById('question');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var button = document.getElementById('new_colors');

var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
var colors = generateRandomColors(getSelectedMode());


ques.textContent = colors[pickColor()];

for(i=0;i<squares.length;i++){
	//add initial colors
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function(){
		var ans = this.style.background;
		if(ans == ques.textContent){
			message.textContent = "Correct";
			h1.style.background = ans;
			button.textContent = "Play Again?"
			for(k = 0;k<squares.length;k++) {
				squares[k].style.background = this.style.background;
			}
		}
		else{
			message.textContent = "Wrong Answer";
			this.style.background = "#232323";
		}
	});
}

button.addEventListener('click', function(){
	if(button.textContent = "Play Again")
		button.textContent = "New Colors";
	h1.style.background="#232323"
	message.textContent = ""
	colors = generateRandomColors(getSelectedMode());
	pickedColor = colors[pickColor()];
	correctAns = ques.textContent;
	ques.textContent = pickedColor;
	for(i=0;i<colors.length;i++){
		squares[i].style.background = colors[i];
	}
})

function pickColor(){
	return Math.floor(Math.random() * colors.length);
}

function generateRandomColors(len){
	var arr = [];
	for(i=0;i<len;i++){
		arr.push(randomColor());
	}
	
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	//rgb(100, 200, 25);
	return "rgb("+red+", "+blue+", "+green+")";
}

function getSelectedMode(){
	if(hardBtn.style.background == 'blue')
		return 6;
	else
		return 3;
}