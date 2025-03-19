/* jslint browser: true */
/*global $:true, window:true */

// store references to DOM elements and optimize selectors for performance purposes
// for more info: http://24ways.org/2011/your-jquery-now-with-less-suck/
var openButton  = $('#ut_open'),
    closeButton = $('#ut_close'),
    theBody     = $('body'),
    collapsedWrapper = $('#collapsed_wrapper');

window.startAd = function () {
  // creative.min.js binds window.startAd() to #ut_open 'click',
  // as well as platform ready
  theBody.removeClass('closed');
  theBody.addClass('opened');

  //Collapsed closes at 50px
  if (undertone.creative.isFullPageFlex()) { $('body').addClass('ut_mobile'); };

  jiStartSS();
};



// clicking the openButton should restore the ad to an expanded state
// but may entail different steps than the initial open animation
openButton.click(function () {
  // window.startAd is called by default by the format code
  // in order to resize its container on the pub page (height 500px || full mobile device height)
  TweenMax.to(collapsedWrapper,.25,{opacity:0, ease:Power0.easeNone});
  setTimeout(function(){
    collapsedWrapper.css("display","none");
    
  }, 250);
  setTimeout(function(){
    //introAnimation();
    tl.restart();
    
  }, 250);

     if (device.mobile()){
        setupButtons();
    }
    
});

// if the close button is clicked, present the leavebehind state
// note that closing the ad may interrupt an animation,
// leaving the ad in an unfinished state.
// Re-opening the ad should restore things to a presentable state.
closeButton.click(function () {
  // window.closeAd is called by default by the format code
  // in order to resize its container on the pub page (height 90px || 50px on mobile)
  window.closeAd();
});