//rellax
var rellax = new Rellax('.rellax');
//aos starter
AOS.init({
  duration: 800,
  easing: 'slide'
});

// HTML CODE
// <section id="sectionThree" class="section-three">
//       <a data-easing="easeInQuint" href="#top"><p>BACK UP</p></a>
//     </section>

// Instantiate Scrolls
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

if (document.querySelector('[data-easing]')) {
  var linear = new SmoothScroll('[data-easing="linear"]', {easing: 'linear'});

  var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});
  var easeInCubic = new SmoothScroll('[data-easing="easeInCubic"]', {easing: 'easeInCubic'});
  var easeInQuart = new SmoothScroll('[data-easing="easeInQuart"]', {easing: 'easeInQuart'});
  var easeInQuint = new SmoothScroll('[data-easing="easeInQuint"]', {easing: 'easeInQuint'});

  var easeInOutQuad = new SmoothScroll('[data-easing="easeInOutQuad"]', {easing: 'easeInOutQuad'});
  var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', {easing: 'easeInOutCubic'});
  var easeInOutQuart = new SmoothScroll('[data-easing="easeInOutQuart"]', {easing: 'easeInOutQuart'});
  var easeInOutQuint = new SmoothScroll('[data-easing="easeInOutQuint"]', {easing: 'easeInOutQuint'});

  var easeOutQuad = new SmoothScroll('[data-easing="easeOutQuad"]', {easing: 'easeOutQuad'});
  var easeOutCubic = new SmoothScroll('[data-easing="easeOutCubic"]', {easing: 'easeOutCubic'});
  var easeOutQuart = new SmoothScroll('[data-easing="easeOutQuart"]', {easing: 'easeOutQuart'});
  var easeOutQuint = new SmoothScroll('[data-easing="easeOutQuint"]', {easing: 'easeOutQuint'});
}

//PACE CODE
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
  };
  Pace.on('done', function() {

  $('#preloader').delay(1000).animate({ top: '-100em', opacity: '0' }, 7000, $.bez([0.19, 1, 0.22, 1]));
  $('.aii-webz-img').delay(1200).animate({ top: '0'}, 3000, $.bez([0.19, 1, 0.22, 1]));
  $('.loading-item').delay(100).animate({top: '30%', opacity: '0'}, 2000, $.bez([0.19,1,0.22,1]));

 });
// DIVIDERS PARALLAX
// $('.parallax-window').parallax({ imageSrc: ''});
var secThree = $(".s3");
var distance = $(".s3").offset().top,
  $window = $(window);

$window.scroll(function() {
  if ($window.scrollTop() >= distance) {
    $(".back-up-icon-wrapper").fadeIn();
  } else{
    $(".back-up-icon-wrapper").fadeOut();
  }
});

//
/*
if !E=doThisHere();start
*/
function GetIEVersion() {
  var sAgent = window.navigator.userAgent;
  var Idx = sAgent.indexOf("MSIE");
  // If IE, return version number.
  if (Idx > 0)
    return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
  // If IE 11 then look for Updated user agent string.
  else if (!!navigator.userAgent.match(/Trident\/7\./))
    return 11;
  else
    return 0; //It is not IE
}
//usage
if (GetIEVersion() > 0) {
  // code for IE goes here
}
/*
if !E=doThisHere();end
*/

//slide
$('.active-slide').on('click', function(){
  $('.slide-container-overlay').delay(100).animate({
    "height":"100vh"
  }).delay(1000).animate({
    "height":"0",
    "bottom":"0"
  });
  $('.slide-container').delay(1000).animate({ top: '0', opacity: '1' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  $('body').addClass('fix');
});
//slide vars
var slideOne = $('.slide-1');
var slideTwo = $('.slide-2');
var slideThree = $('.slide-3');
var slideFour = $('.slide-4');
var slideFive = $('.slide-5');
//only go back to main code
//slide to go back from chapter one
$('.slide-go-back').on('click', function(){
  $('.slide-container-overlay').delay(100).animate({
    "height": "100vh"
  }).delay(800).animate({
    "height": "0",
    "bottom": "0"
  }).delay(100).css({
    "opacity":"1"
  });
  $('.slide-container').delay(600).animate({ top: '-50em', opacity: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  $('body').addClass('unfix');
});

//slide to go back from chapter two
$('.slide-go-back-sl-2').on('click', function () {
  $('.slide-container-overlay').delay(100).animate({
    "height": "100vh"
  }).delay(800).animate({
    "height": "0",
    "bottom": "0"
  }).delay(100).css({
    "opacity": "1"
  });
  $('.slide-container').delay(600).animate({ top: '-50em', opacity: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  $('body').addClass('unfix');
  //reset slides to default position
  slideOne.delay(700).animate({ left: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideTwo.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
});

//slide go back from chapter three
$('.slide-go-back-sl-3').on('click', function () {
  $('.slide-container-overlay').delay(100).animate({
    "height": "100vh"
  }).delay(800).animate({
    "height": "0",
    "bottom": "0"
  }).delay(100).css({
    "opacity": "1"
  });
  $('.slide-container').delay(600).animate({ top: '-50em', opacity: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  $('body').addClass('unfix');
  //reset slides to default position
  slideOne.delay(700).animate({ left: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideTwo.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideThree.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
});

//slide go back from chapter four
$('.slide-go-back-sl-4').on('click', function () {
  $('.slide-container-overlay').delay(100).animate({
    "height": "100vh"
  }).delay(800).animate({
    "height": "0",
    "bottom": "0"
  }).delay(100).css({
    "opacity": "1"
  });
  $('.slide-container').delay(600).animate({ top: '-50em', opacity: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  $('body').addClass('unfix');
  //reset slides to default position
  slideOne.delay(700).animate({ left: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideTwo.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideThree.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideFour.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
});

//slide go back from chapter five
$('.slide-go-back-sl-5').on('click', function () {
  $('.slide-container-overlay').delay(100).animate({
    "height": "100vh"
  }).delay(800).animate({
    "height": "0",
    "bottom": "0"
  }).delay(100).css({
    "opacity": "1"
  });
  $('.slide-container').delay(600).animate({ top: '-50em', opacity: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  $('body').addClass('unfix');
  //reset slides to default position
  slideOne.delay(700).animate({ left: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideTwo.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideThree.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideFour.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideFive.delay(700).animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
});

//only move slides inside relative container
$('.go-to-slide-2').on('click', function(){
  slideOne.animate({ left: '-100%'}, 2000, $.bez([0.14, 1, 0.22, 1]));
  slideTwo.animate({ right: '0'}, 2000, $.bez([0.14, 1, 0.22, 1]));
});

$('.go-to-slide-3').on('click', function () {
  slideTwo.animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideThree.delay(200).animate({ right: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
});

$('.go-to-slide-4').on('click', function () {
  slideThree.animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideFour.delay(200).animate({ right: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
});

$('.go-to-slide-5').on('click', function () {
  slideFour.animate({ right: '-100%' }, 2000, $.bez([0.19, 1, 0.22, 1]));
  slideFive.delay(200).animate({ right: '0' }, 2000, $.bez([0.19, 1, 0.22, 1]));
});
