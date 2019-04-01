function Connect4() {
  // debugger
  this._gameBoard = [ [],[],[],[],[],[],[] ]
  this._players = [1,2]
  this._playerIndex = 0
  this._gameFinished = false
}

Connect4.prototype.play = function(col) {
  var player = this._players[this._playerIndex]
  
  if (this._gameFinished) {
    return "Game has finished!"
  }

  if (this._gameBoard[col].length === 6) 
    { return "Column full!" }

  this._gameBoard[col].push(player)

  if (this.testForWin(player, col)) { 
    this._gameFinished = true
    return "Player " + player + " wins" 
  }

  if ( this._playerIndex === 0 )
    { this._playerIndex = 1 }
  else 
    { this._playerIndex = 0 }
  return "Player " + player + " has a turn"
}

Connect4.prototype.testForWin = function(player, col) {

  if ( (this._gameBoard[col].length >= 4) &&
    (this._gameBoard[col].slice(-4).every(function (currentValue) { 
      return currentValue === player; 
  })) ) {
    return true 
  }

  var rowNum = this._gameBoard[col].length - 1
  var arrayRow = []
  for (var i=0; i < this._gameBoard.length; i++) {
    arrayRow.push(this._gameBoard[i][rowNum] || 0) 
  }
  
  for (var j=0; j<4; j++) {
    if ( arrayRow.slice(j,j+4).every(function (currentValue) { 
      return currentValue === player; 
    }) ) { 
      return true 
    }
  }
}
