function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const game = {
	gameUI: document.getElementById('game'),
	question: document.getElementById('question'),
	answers: document.getElementsByClassName('ans'),
	total: document.getElementById('total'),
	current: document.getElementById('current'),
	skip: document.getElementById('nextQuestion'),
	indexQuestion: 0,
    postQuestion : function() {
		this.question.innerText = window.questions[this.indexQuestion].question;
		for(let i = 0; i<this.answers.length; i++){
			this.answers[i].innerText = window.questions[this.indexQuestion].content[i];
		}
    },
    nextQuestion : function() {
	this.indexQuestion++;
		this.postQuestion();
    },
    check : function(element) {
		if(element === window.questions[this.indexQuestion].correct){
			return true;
		} else {
			return false;
		}
    }
};

const score = {
	totalScore: 0,
	prize: 100,
	winScore: 1000000,
	addScore: function(){
		this.totalScore += this.prize;
		this.prize *= 2;
	}
}

function hideGame(){
	game.skip.style.display = 'none';
	game.gameUI.style.display = 'none';
}

function showGame(){
	game.skip.style.display = 'block';
	game.gameUI.style.display = 'block';
}

function refreshScore(){
	game.total.innerText = 'Total: ' + score.totalScore;
	game.current.innerText = 'Prize on current round: ' + score.prize;
}

function skipQuestion(){
	game.nextQuestion();
	game.skip.style.display = 'none';
}

function check(answerNumber){
	let arg = game.check(answerNumber);
	alert('Your asnwer is ' + arg);
	if(arg){
		score.addScore();
		if (score.totalScore>=score.winScore){
			alert('You win!!!');
			hideGame();
		} else{
			game.nextQuestion();
			refreshScore();
		}
	} else {
		alert('You lose\nYour prize is: '+score.totalScore);
		hideGame();
	}
}

function startNewGame(){
	score.totalScore = 0;
	score.prize = 100;
	refreshScore();
	shuffle(window.questions);
	game.indexQuestion = 0;
	game.postQuestion();
	showGame();
}

hideGame();