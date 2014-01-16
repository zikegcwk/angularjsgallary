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
      'src': 'http://wmphotostudio.smugmug.com/Engagement/KevinCarolyn/i-tXW74ZR/0/X2/K%26C-BEST-9-X2.jpg',
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

  $scope.data.autoPlayStatus = true;

  $scope.setCurrentSlideIndex = function (index) {
    $scope.data.currentIndex = index;
  };

  $scope.isCurrentSlideIndex = function (index) {
    return $scope.data.currentIndex === index;
  };

  $scope.prevSlide = function () {
    // go to the previous slide or go to the first slide if we get to the end.
    if ($scope.data.currentIndex < $scope.data.slides.length -1) {
      $scope.data.currentIndex = $scope.data.currentIndex + 1;
    } else {
      $scope.data.currentIndex = 0;
    }

    //stop auto playing.
    $scope.data.autoPlayStatus = false;
  };

  $scope.nextSlide = function () {
    if ($scope.data.currentIndex > 0) {
      $scope.data.currentIndex = $scope.data.currentIndex - 1;
    } else {
      $scope.data.currentIndex = $scope.data.slides.length -1;
    }
    $scope.data.autoPlayStatus = false;
  };

  $scope.autoPlay = function () {
    if ($scope.data.autoPlayStatus === true ) {
      $timeout(
        function () {
          if ($scope.data.currentIndex > 0) {
            $scope.data.currentIndex = $scope.data.currentIndex - 1;
          } else {
            $scope.data.currentIndex = $scope.data.slides.length -1;
          }

          $scope.autoPlay();
        },
        500
      );
    }
  };

  $scope.autoPlay();

  $scope.sliderClicked = function () {
   
    if ($scope.data.autoPlayStatus === true ) {
      $scope.data.autoPlayStatus = false;
    } else {
      $scope.data.autoPlayStatus = true;
    }
    $scope.autoPlay();
  };

}).animation('.slide-animation', function () {
    return {
      addClass: function (element, className, done) {
        if (className == 'ng-hide') {
          //animation code
          TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
        }
        else {
          done();
        }
      },
      removeClass: function (element, className, done) {
        if (className == 'ng-hide') {
          //animation code
          TweenMax.set(element, { left: element.parent().width() });
          TweenMax.to(element, 0.5, {left: 0, onComplete: done });
        }
        else {
          done();
        }
      }
    }
  });
//check to see if the current index is the index supplied.
//TODO check to see if index is an integer. Can be done by underscore.
