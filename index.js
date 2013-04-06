var ease = require('ease');
var offset = require('offset');

function scrollTo(el, duration, easingType) {
  var easing = type ? ease[easingType] : ease['linear'];
  var stop = false;
  var start = Date.now();
  var toY = offset(el).top;
  var fromY = document.body.scrollTop;

  var updatePosition = function(){
    var now = Date.now();
    if (now - start >= duration) stop = true;
    var p = (now - start) / duration;
    var tick = fromY + (toY - fromY) * easing(p);
    document.body.scrollTop = tick;
    setTimeout(function() {
      if(stop) return;
      updatePosition();
    }, 10);
  };
  
  updatePosition();
};

module.exports = scrollTo;