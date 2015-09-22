angular.module('bewd.tictactoe.board', [])

// angular.module('bewd.tictactoe.board')
//   .controller('BoardCtrl',['$scope', function($scope) {
//     this.theBoard = [['X', 'O', 'X'], ['O', 'O', 'X'], ['O', 'X', '']];
//     $scope.addLetter = function () {
//         $scope.greeting = $scope.letter;
//       };
//     var n = 'Y'
//     $scope.makeYourMove = function () {
//         theBoard[2][2] = n;
//       };
//     }])

  .controller('BoardCtrl', function() {
    this.makeYourMove = function makeYourMove() {
      this.theBoard[2][2] = 'Y';
    };
  })
  .directive('ticTacToeBoard', function() {
    return {
      scope:{
        theBoard: '='
      },
      restrict: 'E',
      templateUrl: '/public/tmpls/board.html',
      controller: 'BoardCtrl',
      controllerAs: 'vm',
      bindToController: true
    };
  });
