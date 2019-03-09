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
    myConnect4.play(2)
    myConnect4.play(3)
    myConnect4.play(2)
    myConnect4.play(3)
    myConnect4.play(2)
    myConnect4.play(3)
    expect(myConnect4.play(2)).toEqual("Player 1 wins")
    expect(myConnect4._gameBoard).toEqual([ [],[],[1,1,1,1],[2,2,2],[],[],[] ])
  })

})
