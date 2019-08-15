var html, body, scrollToTopButton;
window.onload = () => {
  html = document.documentElement;
  body = document.body;
  scrollToTopButton = document.getElementById("scrollToTopButton");
};

const scrollToTop = (totalTime, easingPower) => {
  //console.log("here");
  var timeInterval = 1; //in ms
  var scrollTop = Math.round(body.scrollTop || html.scrollTop);
  // var by=- scrollTop;
  var timeLeft = totalTime;
  var scrollByPixel = setInterval(function() {
    var percentSpent = (totalTime - timeLeft) / totalTime;
    if (timeLeft >= 0) {
      var newScrollTop = scrollTop * (1 - easeInOut(percentSpent, easingPower));
      body.scrollTop = newScrollTop;
      html.scrollTop = newScrollTop;
      //console.log(easeInOut(percentSpent,easingPower));
      timeLeft--;
    } else {
      clearInterval(scrollByPixel);
      //Add hash to the url after scrolling
      //window.location.hash = hash;
    }
  }, timeInterval);
}

const easeInOut = (t, power) => {
  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, power);
  } else {
    return 0.5 * (2 - Math.pow(2 * (1 - t), power));
  }
}

const controlScrollToTopButton = (scrollTop) => {
  var windowInnerHeight = 2 * window.innerHeight;
  if (
    body.scrollTop > windowInnerHeight ||
    html.scrollTop > windowInnerHeight
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
}

window.onscroll = controlScrollToTopButton;

