const props = {
  img1: {
    x: 144,
    y: 35.239,
    r: -16.0763
  }
}

let img1 = $(".two li:nth-child(1) img");
let isEnter = true;

let screenWidth = screen.width;
const scrollWidth= window.innerWidth-$(document).width()
screenWidth += scrollWidth;
screenWidth = 500;

$(document).ready(function() {
  $(window).scroll(function() {

    // for right side of screen
    let imgLeft = img1.offset().left;
    // let leftSpacerScreenWidth = screenWidth - img1.style.width;
    leftSpacerScreenWidth = 300;
    console.log(screenWidth, imgLeft)

    if (screenWidth > imgLeft && isEnter) {
      img1.addClass("og-position");
    } else if (leftSpacerScreenWidth < imgLeft) {
      img1.removeClass("og-position");
      isEnter = false;
    }

  })
})