/* jslint browser: true */
/*global $:true, window:true */

// store references to DOM elements and optimize selectors for performance purposes
// for more info: http://24ways.org/2011/your-jquery-now-with-less-suck/
var openButton  = $('#ut_open'),
    closeButton = $('#ut_close'),
    theBody     = $('body');

window.startAd = function () {
  // creative.min.js binds window.startAd() to #ut_open 'click',
  // as well as platform ready
  theBody.removeClass('closed');
  theBody.addClass('opened');

  if (undertone.creative.isFullPageFlex()) { $('body').addClass('ut_mobile'); };

  jiStartPGX();
};

window.closeAd = function () {
  // creative.min.js binds window.closeAd() to autoclose timer expiration (15s)
  // but **NOT** when the #ut_close is clicked. This means that you must bind it yourself,
  // which allows you to modify timing and coordinate animations.
  theBody.removeClass('opened');
  theBody.addClass('closed');

//  jiCollapsedContainer.css("opacity","0");
//  jiCollapsedContainer.css("display","block");
//  TweenLite.to(jiCollapsedContainer,.5,{opacity:1, ease:Power0.easeNone});

//  jiClose();
};

// clicking the openButton should restore the ad to an expanded state
// but may entail different steps than the initial open animation
openButton.click(function () {
  // window.startAd is called by default by the format code
  // in order to resize its container on the pub page (height 500px || full mobile device height)
//  TweenLite.to(jiCollapsedContainer,.25,{opacity:0, ease:Power0.easeNone});
//  setTimeout(function(){
//      jiCollapsedContainer.css("display","none");
//  }, 250);
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