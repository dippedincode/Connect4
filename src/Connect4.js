function Connect4() {
  this._gameBoard = [ [],[],[],[],[],[],[] ]
  this._players = [1,2]
  this._playerIndex = 0
}

Connect4.prototype.play = function(col) {
  var player = this._players[this._playerIndex]
  this._gameBoard[col].push(player)
  if ( (this._gameBoard[col].length >= 4) &&
    (this._gameBoard[col].slice(-4).every(function (currentValue) { 
      return currentValue === player; 
    })) )  
  { return "Player " + player + " wins" }

  if ( this._playerIndex === 0 )
    { this._playerIndex = 1 }
  else 
    { this._playerIndex = 0 }
  return "Player " + player + " has a turn"
}
