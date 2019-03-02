function Connect4() {
}

Connect4.prototype.gameBoard = [ [],[],[],[],[],[],[] ] 

Connect4.prototype.play = function(col) {
  console.log(this)
  this.gameBoard[col].push(1)
  return "Player 1 has a turn"
}
