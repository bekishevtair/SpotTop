// ANCHOR

function scrollToSection () {
  $('.js-anchor-link').click(function (e) {
    e.preventDefault()
    const id = $(this).attr('href')
    const head_height = $(".header").height()
    const offsetLinks = $(id).offset().top - head_height
    $("html, body").animate({ scrollTop: offsetLinks }, 500)
    $('.js-toggle-nav, #nav').removeClass('active')
  })
}


// SCROLL TO TOP

const toTop = document.querySelector('.btn-arrow-up')

window.addEventListener('scroll', () => {
  if(window.pageYOffset > 400) {
    toTop.classList.add('active-arrow');
  } else {
    toTop.classList.remove('active-arrow');
  }
})




// SCROLL TO SECTION ON OTHER PAGE header__exp-link

$(function() {
  $('.link .header__exp-link .nav__exp-link').on('click tap', function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000)
  })
  if(window.location.hash){
    scroll(0,0)
    setTimeout(function(){
      scroll(0,0)
    }, 1)
  }
  if(window.location.hash){
    const sectionLinks = $('.section-links').height()
    $('html, body').animate({
      scrollTop: $(window.location.hash).offset().top - sectionLinks - 100
    }, 1000)
  }
  history.replaceState(null, null, " ")

})




// PIN WHILE SCROLLING
$(function () {
    // build scene
    const sectionHeight = $('#sec-pin').height();
    const pinHeight = $('.pin').height();
    var scene = new ScrollMagic.Scene({
      triggerElement: "#trigger1", 
      duration: sectionHeight - 300,
      triggerHook: 0.4
    })
    .setPin("#pin1")
    // .addIndicators({name: "1 (duration: 500)"}) // add indicators (requires plugin)
    .addTo(controller);
  });

