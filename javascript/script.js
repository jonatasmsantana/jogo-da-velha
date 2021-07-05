let game = [];
let board =[];
let player = 0; //0 player; 1 cpu
let checkWinner;
let whoBeggins = 1;
let isPlaying = true;
let cpuPlays = 1;
var marks = 0;


function cpuPlaying(){
	if(isPlaying){

		let i, j;

		if(marks < 8){
			//Condiçoes de ataque
			//horizontal
			//Linha 1
			if(game[0][0] === "O" && game[0][1] === "O" && game[0][2] === "" ){
				game[0][2] = "O";
			}
			else if(game[0][0] === "O" && game[0][2] === "O" && game[0][1] === ""  ){
				game[0][1] = "O";
			}
			else if(game[0][1] === "O" && game[0][2] === "O" && game[0][0] === "" ){
				game[0][0] = "O";
			}

			//Linha2
			else if(game[1][0] === "O" && game[1][1] === "O" && game[1][2] === "" ){
				game[1][2] = "O";
			}
			else if(game[1][1] === "O" && game[1][2] === "O" && game[1][0] === "" ){
				game[1][0] = "O";
			}
			else if(game[1][0] === "O" && game[1][2] === "O" && game[1][1] === "" ){
				game[1][1] = "O";
			}

			//Linha3
			else if(game[2][0] === "O" && game[2][1] === "O" && game[2][2] === "" ){
			game[2][2] = "O";
			}
			else if(game[2][0] === "O" && game[2][2] === "O" && game[2][1] === "" ){
				game[2][1] = "O";
			}
			else if(game[2][1] === "O" && game[2][2] === "O" && game[2][0] === ""){
				game[2][0] = "O";
			}

			//Vertical
			//Coluna1
			else if(game[0][0] === "O" && game[1][0] === "O" && game[2][0] === "" ){
				game[2][0] = "O";
			}
			else if(game[0][0] === "O" && game[2][0] === "O" && game[1][0] === "" ){
				game[1][0] = "O";
			}
			else if(game[1][0] === "O" && game[2][0] === "O" && game[0][0] === "" ){
				game[0][0] = "O";
			}

			//Coluna 2
			else if(game[0][1] === "O" && game[1][1] === "O" && game[2][1] === "" ){
				game[2][1] = "O";
			}
			else if(game[0][1] === "O" && game[2][1] === "O" && game[1][1] === "" ){
				game[1][1] = "O";
			}
			else if(game[1][1] === "O" && game[2][1] === "O" && game[0][1] === "" ){
				game[0][1] = "O";
			}

			//Coluna3
			else if(game[0][2] === "O" && game[1][2] === "O" && game[2][2] === "" ){
				game[2][2] = "O";
			}
			else if(game[0][2] === "O" && game[2][2] === "O" && game[1][2] === "" ){
				game[1][2] = "O";
			}
			else if(game[1][2] === "O" && game[2][2] === "O" && game[0][2] === ""){
				game[0][2] = "O";
			}

			//Diagonais
			else if(game[0][0] === "O" && game[1][1] === "O" && game[2][2] === ""){
				game[2][2] = "O";
			}
			else if(game[0][0] === "O" && game[2][2] === "O" && game[1][1] === ""){
				game[1][1] = "O";
			}
			else if(game[1][1] === "O" && game[2][2] === "O" && game[0][0] === ""){
				game[0][0] = "O";
			}

			else if(game[0][2] === "O" && game[1][1] === "O" && game[2][0] === ""){
				game[2][0] = "O";
			}
			else if(game[0][2] === "O" && game[2][0] === "O" && game[1][1] === ""){
				game[1][1] = "O";
			}
			else if(game[1][1] === "O" && game[2][0] === "O" && game[0][2] === ""){
				game[0][2] = "O";
			}

			//Condições de defesa
			//horizontal
			//Linha 1
			else if(game[0][0] === "X" && game[0][1] === "X" && game[0][2] === "" ){
				game[0][2] = "O";
			}
			else if(game[0][0] === "X" && game[0][2] === "X" && game[0][1] === ""  ){
				game[0][1] = "O";
			}
			else if(game[0][1] === "X" && game[0][2] === "X" && game[0][0] === "" ){
				game[0][0] = "O";
			}

			//Linha2
			else if(game[1][0] === "X" && game[1][1] === "X" && game[1][2] === "" ){
				game[1][2] = "O";
			}
			else if(game[1][1] === "X" && game[1][2] === "X" && game[1][0] === "" ){
				game[1][0] = "O";
			}
			else if(game[1][0] === "X" && game[1][2] === "X" && game[1][1] === "" ){
				game[1][1] = "O";
			}

			//Linha3
			else if(game[2][0] === "X" && game[2][1] === "X" && game[2][2] === "" ){
			game[2][2] = "O";
			}
			else if(game[2][0] === "X" && game[2][2] === "X" && game[2][1] === "" ){
				game[2][1] = "O";
			}
			else if(game[2][1] === "X" && game[2][2] === "X" && game[2][0] === ""){
				game[2][0] = "O";
			}

			//Vertical
			//Coluna1
			else if(game[0][0] === "X" && game[1][0] === "X" && game[2][0] === "" ){
				game[2][0] = "O";
			}
			else if(game[0][0] === "X" && game[2][0] === "X" && game[1][0] === "" ){
				game[1][0] = "O";
			}
			else if(game[1][0] === "X" && game[2][0] === "X" && game[0][0] === "" ){
				game[0][0] = "O";
			}

			//Coluna 2
			else if(game[0][1] === "X" && game[1][1] === "X" && game[2][1] === "" ){
				game[2][1] = "O";
			}
			else if(game[0][1] === "X" && game[2][1] === "X" && game[1][1] === "" ){
				game[1][1] = "O";
			}
			else if(game[1][1] === "X" && game[2][1] === "X" && game[0][1] === "" ){
				game[0][1] = "O";
			}

			//Coluna3
			else if(game[0][2] === "X" && game[1][2] === "X" && game[2][2] === "" ){
				game[2][2] = "O";
			}
			else if(game[0][2] === "X" && game[2][2] === "X" && game[1][2] === "" ){
				game[1][2] = "O";
			}
			else if(game[1][2] === "X" && game[2][2] === "X" && game[0][2] === ""){
				game[0][2] = "O";
			}

			//Diagonais
			else if(game[0][0] === "X" && game[1][1] === "X" && game[2][2] === ""){
				game[2][2] = "O";
			}
			else if(game[0][0] === "X" && game[2][2] === "X" && game[1][1] === ""){
				game[1][1] = "O";
			}
			else if(game[1][1] === "X" && game[2][2] === "X" && game[0][0] === ""){
				game[0][0] = "O";
			}

			else if(game[0][2] === "X" && game[1][1] === "X" && game[2][0] === ""){
				game[2][0] = "O";
			}
			else if(game[0][2] === "X" && game[2][0] === "X" && game[1][1] === ""){
				game[1][1] = "O";
			}
			else if(game[1][1] === "X" && game[2][0] === "X" && game[0][2] === ""){
				game[0][2] = "O";
			}
			else{
				do{
					i = Math.round(Math.random()*2);
					j = Math.round(Math.random()*2);
				}while(game[i][j] !== "");
				game[i][j] = "O";
			}

			marks += 1;
		}
		else{
			for(i = 0; i < 3; i++){
				for(j = 0; j < 3; j++){
					if(game[i][j] === ""){
						game[i][j] = "O";
						marks += 1;
					}
				}
			}
		}
			
		if(marks === 9){
			document.getElementById("button").style.display = "flex";
		}
		
		checkWinner = checkIfWinnerExists();
		if(checkWinner !== ""){
			showWinner(checkWinner);
			document.getElementById("button").style.display = "block";
			isPlaying = false;
		}
		updateBoard();
		player = 0;
	}
}

function checkIfWinnerExists(){
	//checking the rows
	for(let i = 0; i < 3; i++){
		if(game[i][0] === game[i][1] && game[i][1] === game[i][2]){
			if(game[i][0] === "X"){
				return "Você ";
			}else if(game[i][0] === "O"){
				return "A CPU ";
			}
		}
	}

	//checking the columns
	for(let j = 0; j < 3; j++){
		if(game[0][j] === game[1][j] && game[1][j] === game[2][j]){
			if(game[0][j] === "X"){
				return "Você ";
			}else if(game[0][j] === "O"){
				return "A CPU ";
			}
		}
	}

	//checking the diagonals
	if(game[0][0] === game[1][1] && game[1][1] === game[2][2]){
		if(game[0][0] === "X"){
				return "Você ";
			}else if(game[0][0] === "O"){
				return "A CPU ";
			}
	}

	if(game[0][2] === game[1][1] && game[1][1] === game[2][0]){
		if(game[2][0] === "X"){
				return "Você ";
			}else if(game[2][0] === "O"){
				return "A CPU ";
			}
	}
	return "";
}

function play(position){
	if(isPlaying && player === 0){
		switch(position){
			case 1:
				if(game[0][0] === ""){
					game[0][0] = "X";
					player = 1;
				}
			break;

			case 2:
				if(game[0][1] === ""){
					game[0][1] = "X";
					player = 1;
				}
			break;

			case 3:
				if(game[0][2] === ""){
					game[0][2] = "X";
					player = 1;
				}
			break;

			case 4:
				if(game[1][0] === ""){
					game[1][0] = "X";
					player = 1;
				}
			break;

			case 5:
				if(game[1][1] === ""){
					game[1][1] = "X";
					player = 1;
				}
			break;

			case 6:
				if(game[1][2] === ""){
					game[1][2] = "X";
					player = 1;
				}
			break;

			case 7:
				if(game[2][0] === ""){
					game[2][0] = "X";
					player = 1;
				}
			break;

			case 8:
				if(game[2][1] === ""){
					game[2][1] = "X";
					player = 1;
				}
			break;

			case 9:
				if(game[2][2] === ""){
					game[2][2] = "X";
					player = 1;
				}
			break;

		}

		marks += 1;
		if(marks === 9){
			document.getElementById("button").style.display = "flex";
		}
		
		if(player === 1){
			updateBoard();
			checkWinner = checkIfWinnerExists();
			if(checkWinner !== ""){
				showWinner(checkWinner);
				document.getElementById("button").style.display = "flex";
				isPlaying = false;
			}
			cpuPlaying();
			
		}
	}
}

function updateBoard(){
	for(let i = 0; i < 3; i++){
		for(let j = 0; j < 3; j++){
			if(game[i][j] == "X"){
				board[i][j].style.color = "#00f";
				board[i][j].innerHTML = "X";
			}
			else if(game[i][j] == "O"){
				board[i][j].style.color = "#f00";
				board[i][j].innerHTML = "O";
			}else{
				board[i][j].innerHTML = " ";
			}
		}
	}
}

function startGame(){
	document.getElementById("button").style.display = "none";
	isPlaying = true;
	cpuPlays = 1;
	marks = 0;
	game = [["", "", ""],["", "", ""],["", "", ""]];
	board = [
		[document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
		[document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
		[document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
	]

	updateBoard();
	
	if(whoBeggins === 1){
		whoBeggins = 0;
		player = whoBeggins;
		document.getElementById("says-who-beggin").innerHTML = "Você começa!";
	}else{
		whoBeggins = 1;
		player = whoBeggins;
		document.getElementById("says-who-beggin").innerHTML = "CPU começa!";
		cpuPlaying();
	}
}

function hideModal(){
	document.getElementById("modal").style.display = "none";
}

function showWinner(winner){

	document.getElementById("says-who-won").innerHTML = `${winner} venceu!`;
	document.getElementById("modal").style.display = "flex";
	
}

window.addEventListener("load", startGame);
