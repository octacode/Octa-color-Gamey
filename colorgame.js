var squares = document.getElementsByClassName('square-item');
var ques = document.querySelector('.question');
var message = document.querySelector('.message');
var header = document.querySelector('header');

// buttons
var newGameButton = document.querySelector('button[name="newColors"]');
var levelEasyButton = document.querySelector('button[name="levelEasy"]');
var levelHardButton = document.querySelector('button[name="levelHard"]');

var colors = generateRandomColors(6);
var numOfSquares = 6;

ques.textContent = colors[pickColor()];

for (var i = 0; i < squares.length; i++) {
	//add initial colors
	squares[i].style.background = colors[i];

	squares[i].addEventListener('click', function() {
		var ans = this.style.background;
		ans = ans.replace(' none repeat scroll 0% 0%', '');
		if (ans == ques.textContent) {
			message.textContent = 'Correct';
			header.style.background = ans;
			newGameButton.textContent = 'Play Again?';
			for (var k = 0; k < squares.length; k++) {
				squares[k].style.background = this.style.background;
			}
		} else {
			message.textContent = 'Wrong Answer';
			this.style.background = '#232323';
		}
	});
}

levelEasyButton.addEventListener('click', function() {
	clearInstance();
	levelHardButton.classList.remove('selected');
	levelEasyButton.classList.add('selected');
	numOfSquares = 3;
	colors = generateRandomColors(3);
	var pickedColor = colors[pickColor()];
	ques.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if (colors[i])
			squares[i].style.background = colors[i];
		else
			squares[i].style.display = 'none';
	}
});

levelHardButton.addEventListener('click', function() {
	clearInstance();
	levelEasyButton.classList.remove('selected');
	levelHardButton.classList.add('selected');
	numOfSquares = 6;
	colors = generateRandomColors(6);
	var pickedColor = colors[pickColor()];
	ques.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = 'block';
		squares[i].style.background = colors[i];
	}
})

newGameButton.addEventListener('click', function() {
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
	if (newGameButton.textContent = 'Play Again')
		newGameButton.textContent = 'New Colors';
	header.style.background = 'steelblue';
	message.textContent = '';
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
	return 'rgb(' + red + ', ' + blue + ', ' + green + ')';
}