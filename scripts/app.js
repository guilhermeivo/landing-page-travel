const slider = document.querySelector(".scroll_slider");
const arrowleft = document.querySelector(".scroll-left-explore");
const arrowright = document.querySelector(".scroll-right-explore");

arrowright.addEventListener("click", moveRight);

function moveRight() {
    slider.scrollLeft += 260;
    setTimeout(() => {
        if (slider.scrollLeft == 0) {
            arrowleft.classList.remove("active");
            arrowleft.removeEventListener("click", moveLeft);
        } else if (slider.scrollLeft > 0 && slider.scrollLeft < slider.scrollWidth-((slider.clientWidth-250)+268)) {
            arrowleft.classList.add("active");
            arrowleft.addEventListener("click", moveLeft);
        } else if (slider.scrollLeft > slider.scrollWidth-(slider.clientWidth+12)) {
            arrowright.classList.remove("active");
            arrowright.removeEventListener("click", moveRight);
        }
    }, 500);
}
function moveLeft() {
    slider.scrollLeft -= 260;
    setTimeout(() => {
        if (slider.scrollLeft == 0) {
            arrowleft.classList.remove("active");
            arrowleft.removeEventListener("click", moveLeft);
        } else if (slider.scrollLeft > 0) {
            arrowleft.classList.add("active");
            arrowleft.addEventListener("click", moveLeft);
        }
        if (slider.scrollLeft < slider.scrollWidth-(slider.clientWidth+12)) {
            arrowright.classList.add("active");
            arrowright.addEventListener("click", moveRight);
        }
    }, 500);
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > 100) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}

// Animate
const targett = document.querySelectorAll('[data-animarScroll]');
const animationClass = 'animate';
const scrollSlider = document.querySelector('.scroll_slider');

function animateScroll() {
    const windowLeft = scrollSlider.scrollLeft + (scrollSlider.clientWidth*3);

    targett.forEach(function(e) {
        if ((windowLeft) >= e.offsetLeft) {
            e.classList.add(animationClass);
        }
    })
}

animateScroll();
mainItensSlider();
if (targett.length) {
    scrollSlider.addEventListener('scroll', function() {
        animateScroll();
    })
}

function mainItensSlider() {    
    targett.forEach(function(e) {
        if (e.offsetLeft > scrollSlider.clientWidth*3) {
            e.classList.add("animation_on");
        }
    })
}

const target = document.querySelectorAll('[data-animar]');

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
    })
}
animeScroll();
if (target.length) {
    window.addEventListener('scroll', function() {
        animeScroll();
    })
}
