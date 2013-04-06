var ease = require('ease');

function scrollTo(element, to, duration, type) {
  var easing = type ? ease[type] : ease['linear'];
    
  if (duration < 0 || !easing) return;
  var difference = to - element.scrollTop;
  var perTick = Math.round(easing(difference / duration) * 10);
  
  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    scrollTo(element, to, duration - 10, type);
  }, 10);
};

module.exports = scrollTo;