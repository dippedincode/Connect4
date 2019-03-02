describe("Connect4 play", function() {
  var myConnect4

  beforeEach(function() {
    myConnect4 = new Connect4();
  })

  it("should let a player drop a counter", function() {
    expect(myConnect4.play(2)).toEqual("Player 1 has a turn")
    expect(myConnect4.gameBoard).toEqual([ [],[],[1],[],[],[],[] ])
  })


})
