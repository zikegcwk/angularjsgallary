/**
 * Created by MKZ on 1/6/14.
 */

var bcgApp = angular.module('ng-gallery-app',['ngAnimate']);

angular.module('ng-gallery-app').controller('galleryCtrl', function ($scope, $timeout) {
  //TODO add any interactions we will have.
  $scope.data = {
  };

  $scope.data.flashTextData = ['Innovation', 'Technology', 'Business', 'Ideas', 'Expertise', 'Opportunity'];

  $scope.data.display_text = $scope.data.flashTextData[0];

//  $scope.data.next_text = function (text_index) {
//    $timeout(
//      function(){
//
//        text_index = text_index + 1;
//
//        if (text_index >= $scope.data.flashTextData.length) {
//          text_index = 0;
//        }
//        $scope.data.display_text = $scope.data.flashTextData[text_index];
//
//        $scope.data.next_text(text_index);
//      },
//      1500
//    );
//  };
//
//  var text_index = 0;
//  $scope.data.next_text(text_index);

});
