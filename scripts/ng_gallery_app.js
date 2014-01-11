/**
 * Created by MKZ on 1/6/14.
 */

var bcgApp = angular.module('ng-gallery-app',['ngAnimate']);

angular.module('ng-gallery-app').controller('galleryCtrl', function ($scope, $timeout) {
  //TODO add any interactions we will have.
  $scope.data = {
  };

  $scope.data.slides = [
    {
      'src': 'http://wmphotostudio.smugmug.com/Engagement/KevinCarolyn/i-ssQzkNx/0/X2/K%26C-2-X2.jpg',
      'description': 'Image 1'
    },
    {
      'src': 'http://wmphotostudio.smugmug.com/Engagement/KevinCarolyn/i-Lg6fSf7/0/X2/K%26C-21-X2.jpg',
      'description': 'Image 2'
    },
    {
      'src': 'http://wmphotostudio.smugmug.com/Engagement/KevinCarolyn/i-qV3fXqz/0/X3/K%26C-13-X3.jpg',
      'description': 'Image 3'
    },
    {
      'src': 'http://wmphotostudio.smugmug.com/Engagement/KevinCarolyn/i-mDWdNGH/0/X2/K%26C-18-X2.jpg',
      'description': 'Image 4'
    },
    {
      'src': 'http://wmphotostudio.smugmug.com/Engagement/KevinCarolyn/i-j2CKL3W/0/X3/K%26C-BEST-3-X3.jpg',
      'description': 'Image 5'
    },
  ];

  $scope.data.currentIndex = 0;

  //set current index of the gallery, it seems.
  $scope.setCurrentSlideIndex = function (index) {
    //TODO check to see if index is an integer. Can be done by underscore.
    $scope.data.currentIndex = index;
  };

  //check to see if the current index is the index supplied.
  $scope.isCurrentSlideIndex = function (index) {
    return $scope.data.currentIndex === index;
  };

  $scope.prevSlide = function () {
    $scope.data.currentIndex = ($scope.data.currentIndex < $scope.data.slides.length - 1) ? ++$scope.data.currentIndex : 0;
  };

  $scope.nextSlide = function () {
    $scope.data.currentIndex = ($scope.data.currentIndex > 0) ? --$scope.data.currentIndex : $scope.data.slides.length - 1;
  };


});
