angular.module('bewd.tictactoe.board', [])
// create angular module named bewd.tictactoe.board

  .controller('BoardCtrl', function() {
    this.makeYourMove = function makeYourMove() {
      var newmove = this.letter;
      var row = this.rowcell;
      var col = this.colcell;
      this.theBoard[row][col] = newmove;
      this.letter = '';
      this.rowcell = '';
      this.colcell = '';
    };
  })
  .directive('ticTacToeBoard', function() {
    //create directive called ticTacToeBoard within module bewd.tictactoe.board
    return {
      scope:{
        theBoard: '='
      },
      restrict: 'E',
      //restrict the directive to being an element (not an attribute, comment, or class)
      templateUrl: '/public/tmpls/board.html',
      controller: 'BoardCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  });
