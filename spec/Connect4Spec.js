describe("Connect4 play", function() {
  var myConnect4

  beforeEach(function() {
    myConnect4 = new Connect4();
  })

  it("should let Player 1 drop a counter", function() {
    expect(myConnect4.play(2)).toEqual("Player 1 has a turn")
    expect(myConnect4._gameBoard).toEqual([ [],[],[1],[],[],[],[] ])
  })

  it("should let Player 2 drop a counter", function() {
    myConnect4.play(2)
    expect(myConnect4.play(3)).toEqual("Player 2 has a turn")
    expect(myConnect4._gameBoard).toEqual([ [],[],[1],[2],[],[],[] ])
  })

  it("should return 'Player 1 wins' if he has 4 in a line in a column", function() {
    setBoard(myConnect4, [2,3,2,3,2,3])
    expect(myConnect4.play(2)).toEqual("Player 1 wins")
    expect(myConnect4._gameBoard).toEqual([ [],[],[1,1,1,1],[2,2,2],[],[],[] ])
  })

  it("should return 'Player 2 wins' if he has 4 in a line in a column", function() {
    setBoard(myConnect4, [2,3,2,3,2,3,4])
    expect(myConnect4.play(3)).toEqual("Player 2 wins")
    expect(myConnect4._gameBoard).toEqual([ [],[],[1,1,1],[2,2,2,2],[1],[],[] ])
  })

  it("should return 'Player 2 wins' if he has 4 in a line in column 0", function() {
    setBoard(myConnect4, [2,2,2,2,1,0,2,0,3,0,1])
    expect(myConnect4.play(0)).toEqual("Player 2 wins")
  })

  it("should return 'Player 1 wins' if he has 4 in a row starting at 0,0", function() {
    setBoard(myConnect4, [0,4,1,5,2,0])
    expect(myConnect4.play(3)).toEqual("Player 1 wins")
  })

  it("should return 'Player 1 wins' if he has 4 in a row anywhere in row", function() {
    setBoard(myConnect4, [2,2,3,3,4,0])
    expect(myConnect4.play(5)).toEqual("Player 1 wins")
  })

  it("should return 'Player 2 wins' if he has 4 in a row starting at 0,0", function() {
    setBoard(myConnect4, [5,0,5,1,4,2,4])
    expect(myConnect4.play(3)).toEqual("Player 2 wins")
  })
})

function setBoard(conn4, moves) {
  moves.forEach(function(move) {
    conn4.play(move)
  })
}
