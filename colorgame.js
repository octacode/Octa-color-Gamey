var squares = document.getElementsByClassName("square");
var ques = document.getElementById('question');
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var button = document.getElementById('new_colors');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');
var colors = generateRandomColors(6);
var numOfSquares = 6;

ques.textContent = colors[pickColor()];

for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function() {
		var ans = this.style.background;
		ans = ans.replace(" none repeat scroll 0% 0%", "");
		if (ans == ques.textContent) {
			message.textContent = "Correct";
			h1.style.background = ans;
			button.textContent = "Play Again?";
			for (var k = 0; k < squares.length; k++) {
				squares[k].style.background = this.style.background;
			}
		} else {
			message.textContent = "Wrong Answer";
			this.style.background = "#232323";
		}
	});
}

easyBtn.addEventListener('click', function() {
	clearInstance();
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numOfSquares = 3;
	colors = generateRandomColors(3);
	var pickedColor = colors[pickColor()];
	ques.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i])
			squares[i].style.background = colors[i];
		else
			squares[i].style.display = "none";
	}
});

hardBtn.addEventListener('click', function() {
	clearInstance();
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numOfSquares = 6;
	colors = generateRandomColors(6);
	var pickedColor = colors[pickColor()];
	ques.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = 'block';
		squares[i].style.background = colors[i];
	}
})

button.addEventListener('click', function() {
	clearInstance();
	colors = generateRandomColors(numOfSquares);
	var pickedColor = colors[pickColor()];
	correctAns = ques.textContent;
	ques.textContent = pickedColor;
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = colors[i];
	}
});

// methods

function clearInstance() {
	if (button.textContent = "Play Again")
		button.textContent = "New Colors";
	h1.style.background = "steelblue";
	message.textContent = "";
}

function pickColor() {
	return Math.floor(Math.random() * colors.length);
}

function generateRandomColors(len) {
	var arr = [];
	for (var i = 0; i < len; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	//rgb(100, 200, 25);
	return "rgb(" + red + ", " + blue + ", " + green + ")";
}