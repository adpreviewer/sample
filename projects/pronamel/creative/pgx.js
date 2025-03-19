
//=====================
// VARIABLES
//=====================
var canResize = false;
var allInitPanels = $('.tab1_init, .tab2_init, .tab3_init');
var currentPanel;
var classValue;
var smallTabWidth;
var openTabWidth;
var isTabOpen = false;

//=====================
// FUNCTIONS
//=====================

var vidContainer;
var tabOpenContent;
//Start Function
function jiStartPGX(){
  /*Wrapper Fade In Animation*/
      TweenMax.to($('#wrapper'), .5, {opacity: 1, ease:Power0.easeNone });
    setInitState();
    
    vidContainer = $('.frame1_content');
    tabOpenContent = $('.tab_open_content');
    
    frame2_content = $('.frame2_content');
    //Master Nico's 

    windowResizeHandler();

    $(window).resize(debounce(windowResizeHandler));
    function windowResizeHandler() { setScaleConditions(); }  
}
 setInitState();
function setInitState() {
    TweenMax.set($('.main_container'), { opacity: 0 });
    TweenMax.set($('.tab1_container, .tab2_container, .tab3_container'), { x: "500%" });
    TweenMax.set($('.top_text_tabs'), { y: "-50%", opacity: 0 });
    TweenMax.set($('.top_text_tabs_med'), { opacity: 0 });
    TweenMax.set($('.f2_t_1, .f2_t_2, .f2_t_3'), { x: "-50%", opacity: 0 });
    
    //TweenMax.set($('.frame2_box'), { display: "none" });
    TweenMax.set($('.frame2_content'), { x: "-100%", opacity: 0, display: "none" });
    TweenMax.set($('.f2_bot_text'), { opacity: 0, display: "none" });
    
    //Pronamel initial states
    TweenMax.set($('.proname_small'), { opacity: 0 });
    TweenMax.set($('.pronamel_t1, .pronamel_t2, .pronamel_t3'), { height: "0px" });
    TweenMax.set($('.pronamel_bottles'), { opacity: 0, scale: 0 });
    TweenMax.set($('.pronamel_bg'), { rotationY: "-156deg", scale: 0 });
    
    var delayStart = setTimeout(function() {
        startAnimation();
    },1500)
    TweenMax.to($('.main_container'),1, { opacity: 1, delay: 1 });
}
var hasLogoAnimated = false;

function startAnimation() {
// mraid.setAutoClose(15 * 1000);
    TweenMax.to($('.tab1_container'), .6, {ease: Power2.easeOut, x: "0%", delay: 0 }); 
    TweenMax.to($('.tab2_container'), .6, {ease: Power2.easeOut, x: "0%", delay: .3 }); 
    TweenMax.to($('.tab3_container'), .6, {ease: Power2.easeOut, x: "0%", delay: .6 }); 
    
    var fr2 = new TimelineMax({delay: .9})
    fr2.to($('.tab_init_icon_1'),.3, {ease: Power1.easeOut, transform: "scale(1.3)"});
    fr2.to($('.tab_init_icon_1'),.3, {ease: Power1.easeOut, transform: "scale(1)"});
    fr2.to($('.tab_init_icon_2'),.3, {ease: Power1.easeOut, transform: "scale(1.3)"});
    fr2.to($('.tab_init_icon_2'),.3, {ease: Power1.easeOut, transform: "scale(1)"});
    fr2.to($('.tab_init_icon_3'),.3, {ease: Power1.easeOut, transform: "scale(1.3)"});
    fr2.to($('.tab_init_icon_3'),.3, {ease: Power1.easeOut, transform: "scale(1)", onComplete: frame2});
  
    TweenMax.to($('.top_text_tabs'), .7, {ease: Power1.easeOut, y: "0%", opacity: 1, delay: .7 }); 
    TweenMax.to($('.top_text_tabs_med'), .7, {ease: Power1.easeOut, opacity: 1, delay: .7 })

}

function frame2() {
    
    TweenMax.set($('.proname_small'), { opacity: 0 });
    TweenMax.set($('.pronamel_t1, .pronamel_t2, .pronamel_t3'), { height: "0px" });
    TweenMax.set($('.pronamel_bottles'), { opacity: 0, scale: 0 });
    TweenMax.set($('.pronamel_bg'), { rotationY: "-156deg", scale: 0 });
    TweenMax.set($('.f2_t_1, .f2_t_2, .f2_t_3'), { x: "-50%", opacity: 0 });

//    
    var fr3 = new TimelineMax({delay: 2})
    fr3.to($('.frame1_box'), .7, {ease: Power1.easeOut, scale: 0, opacity: 0, display: "none"}); 
    fr3.to($('.frame2_content'), .8, {ease: Power1.easeOut, x: "0%", opacity: 1, display: "block"}); 
    fr3.set($('.frame2_box'), { display: "block" });
    fr3.to($('.proname_small'), .6, {ease: Power2.easeOut, opacity: "1"}); 
    fr3.to($('.pronamel_bg'), 1, {ease: Power2.easeOut,rotationY: "0deg", opacity: "1",scale: 1 }); 
    
    fr3.to($('.pronamel_t1'), .6, {ease: Power2.easeOut, height: "32px" }); 
    fr3.to($('.pronamel_t2'), .6, {ease: Power2.easeOut, height: "47px" },"b"); 
    fr3.to($('.pronamel_t3'), .6, {ease: Power2.easeOut, height: "24px" },"b"); 
    fr3.to($('.pronamel_bottles'), .6, {ease: Power2.easeOut, opacity: "1",scale: 1}); 
    //Pronamel END
    fr3.to($('.f2_t_1'), .4, {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4}); 
    fr3.to($('.f2_t_2'), .4, {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4.5}); 
    fr3.to($('.f2_t_3'), .4, {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 5, onComplete: function() { hasLogoAnimated = true } }); 
////
////    TweenMax.to($('.f2_bot_text'), .5, {ease: Power1.easeOut, opacity: 1, display: "block", delay: 5.3}); 
//
//    frame2Timer = setTimeout(function() {
//        
//      //Video
//      $( ".video_bg" ).unbind( "click");
//      $( ".video_container" ).unbind( "click");
//    }, 4000000)
}


function showEndFrame2() {
    if (hasLogoAnimated) {
        //Pronamel
        TweenMax.set($('.proname_small'), {ease: Power2.easeOut, opacity: "1", delay: 1 }); 
        TweenMax.set($('.pronamel_bg'), {ease: Power2.easeOut,rotationY: "0deg", opacity: "1",scale: 1, delay: 1.5 }); 

        TweenMax.set($('.pronamel_t1'), {ease: Power2.easeOut, height: "32px", delay: 2.2 }); 
        TweenMax.set($('.pronamel_t2'), {ease: Power2.easeOut, height: "47px", delay: 2.7 }); 
        TweenMax.set($('.pronamel_t3'), {ease: Power2.easeOut, height: "24px", delay: 2.7 }); 
        TweenMax.set($('.pronamel_bottles'), {ease: Power2.easeOut, opacity: "1",scale: 1, delay: 3}); 
        //Pronamel END
        TweenMax.set($('.f2_t_1'), {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4}); 
        TweenMax.set($('.f2_t_2'), {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4.5}); 
        TweenMax.set($('.f2_t_3'), {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 5, onComplete:showEndFrame2 }); 
    } else {
         //Pronamel
        TweenMax.to($('.proname_small'), .6, {ease: Power2.easeOut, opacity: "1", delay: 1 }); 
        TweenMax.to($('.pronamel_bg'), 1, {ease: Power2.easeOut,rotationY: "0deg", opacity: "1",scale: 1, delay: 1.5 }); 

        TweenMax.to($('.pronamel_t1'), .6, {ease: Power2.easeOut, height: "32px", delay: 2.2 }); 
        TweenMax.to($('.pronamel_t2'), .6, {ease: Power2.easeOut, height: "47px", delay: 2.7 }); 
        TweenMax.to($('.pronamel_t3'), .6, {ease: Power2.easeOut, height: "24px", delay: 2.7 }); 
        TweenMax.to($('.pronamel_bottles'), .6, {ease: Power2.easeOut, opacity: "1",scale: 1, delay: 3}); 
        //Pronamel END
        TweenMax.to($('.f2_t_1'), .4, {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4}); 
        TweenMax.to($('.f2_t_2'), .4, {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4.5}); 
        TweenMax.to($('.f2_t_3'), .4, {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 5, onComplete: function() { hasLogoAnimated = true } }); 
    }
}

function setTabWidth(smallTab, openTab) {
    smallTabWidth = smallTab;
    openTabWidth = openTab;
}

function setScaleConditions() {
    
        winWidth = $(window).width(); 
        winHeight = $(window).height(); 
  
        if (winWidth > 800) {
            setTabWidth("11%", "66%");
            scalableDiv($('.frame1_content, .tab_open_content'), 1800, 900, "contain");
            scalableDiv($('.frame2_content_item'), 1900, 900, "contain");
            scalableDiv($('.tab_init_logo'), 1900, 900, "contain");
        }

        if (winWidth < 801) {
            setTabWidth("11.5%", "72%");
            scalableDiv($('.tab_open_content'), 1000, 900, "contain");
            scalableDiv($('.frame2_content_item'), 1000, 900, "contain");
            scalableDiv($('.tab_init_logo'), 900, 900, "contain");
            scalableDiv($('.frame1_content'), 800, 900, "contain");
        }
        if (winWidth < 769) {
            setTabWidth("11%", "75%");
            scalableDiv($('.tab_open_content'), 1000, 900, "contain");
            scalableDiv($('.tab_init_logo'), 900, 900, "contain");
            scalableDiv($('.frame1_content'), 800, 900, "contain");
        }
        if ($(window).width() < 601) {
            setTabWidth("12.5%", "70%");
            scalableDiv($('.tab_open_content'), 1100, 900, "contain");
            scalableDiv($('.frame2_content_item'), 900, 900, "contain");
            scalableDiv($('.tab_init_logo'), 500, 900, "contain");
            scalableDiv($('.frame1_content'), 400, 620, "contain");
        }
        if ($(window).width() < 321) {

        }
        if ((winWidth >= 460) && (winHeight <= 416)) {
            setTabWidth("12.5%", "70%");
            scalableDiv($('.tab_open_content'), 2000, 900, "contain");
            scalableDiv($('.frame2_content_item'), 900, 900, "contain");
            scalableDiv($('.tab_init_logo'), 500, 900, "contain");
            scalableDiv($('.frame1_content'), 700, 300, "contain");
        }
          if ((winWidth <= 736) && (winHeight <= 350)) {
            scalableDiv($('.frame1_content'), 700, 300, "contain");
          }
        if (isTabOpen) {
            TweenMax.set($('.tab' + currentPanel + '_container'), {width: openTabWidth});
            openTabResizer();
        }
    
}


function openPanel() {
     TweenMax.set($('.tab_open_content'), { zIndex: 2 });
     animatePin();
     isTabOpen = true;
     switch (currentPanel) {
         case 1:
             TweenMax.set($('.tab1_open'), { opacity: 1 });
             TweenMax.set($('.tab2_open, .tab3_open'), { opacity: 0 });
             TweenMax.set($('.tab1_init'), { display: "none" });
             TweenMax.set($('.tab2_init, .tab3_init'), { display: "block" });
             break;
         case 2:
             TweenMax.set($('.tab2_open'), { opacity: 1 });
             TweenMax.set($('.tab1_open, .tab3_open'), { opacity: 0 });
             TweenMax.set($('.tab2_init'), { display: "none" });
             TweenMax.set($('.tab3_init, .tab1_init'), { display: "block" });
             break;
         case 3:
             TweenMax.set($('.tab3_open'), { opacity: 1 });
             TweenMax.set($('.tab1_open, .tab2_open'), { opacity: 0 });
             TweenMax.set($('.tab3_init'), { display: "none" });
             TweenMax.set($('.tab2_init, .tab1_init'), { display: "block" });
             break;
         default:
     }
                    
    switch(classValue){
      case 'tab_container tab1_container':
           currentPanel = 1; 
           TweenMax.to($('.tab1_container'),.7, { width: openTabWidth });
           TweenMax.to($('.tab2_container, .tab3_container'),.7, { width: smallTabWidth });
           TweenMax.to($('.tab1_init, .tab2_init, .tab3_init'),1, { opacity: 0 });

          break;
      case 'tab_container tab2_container':
           currentPanel = 2;
           TweenMax.to($('.tab2_container'),.7, { width: openTabWidth});
           TweenMax.to($('.tab1_container, .tab3_container'),.7, { width: smallTabWidth });
           TweenMax.to($('.tab1_init, .tab2_init, .tab3_init'),1, { opacity: 0 });

          break;
      case 'tab_container tab3_container':
           currentPanel = 3;
           TweenMax.to($('.tab3_container'),.7, { width: openTabWidth});
           TweenMax.to($('.tab1_container, .tab2_container'),.7, { width: smallTabWidth });
           TweenMax.to($('.tab1_init, .tab2_init, .tab3_init'),1, { opacity: 0 });
         
          break;
    }
    
    reAnimateVerticalLogo();
    
}

function reAnimateVerticalLogo() {
   // vertical_logo_1
    if(isTabOpen) {
         switch (currentPanel) {
         case 1:   
              TweenMax.to($('.vertical_small_logo_2, .vertical_small_logo_3'),.1, { opacity: 0 });
              TweenMax.to($('.vertical_small_logo_2, .vertical_small_logo_3'), .3, { opacity: 1, delay: .5 });    
              break;
         case 2:
             TweenMax.to($('.vertical_small_logo_1, .vertical_small_logo_3'),.1, { opacity: 0 });
             TweenMax.to($('.vertical_small_logo_1, .vertical_small_logo_3'), .3, { opacity: 1, delay: .5 });
                 break;
         case 3:
             TweenMax.to($('.vertical_small_logo_1, .vertical_small_logo_2'),.1, { opacity: 0 });
             TweenMax.to($('.vertical_small_logo_1, .vertical_small_logo_2'), .3, { opacity: 1, delay: .5 });
                 break;
         }
    }
    
}

function animatePin() {
  TweenMax.to($('.pinterest_' + currentPanel),.5, {ease: Power1.easeIn, transform: "scale(1.1)", opacity: .6, delay: .5 });
  TweenMax.to($('.pinterest_' + currentPanel),.5, {ease: Power1.easeOut, transform: "scale(1)", opacity: 1, delay: 1.2 });
}

function openTabResizer() {
    switch (currentPanel) {
    case '1':
       TweenMax.set($('.tab' + currentPanel + '_container'), {  width: openTabWidth});
       TweenMax.to($('.tab2_container, .tab3_container'), { width: smallTabWidth });
        break;
    case '2':
       TweenMax.set($('.tab' + currentPanel + '_container'), {  width: openTabWidth});
       TweenMax.set($('.tab1_container, .tab3_container'), { width: smallTabWidth });
        break;
    case '3':
       TweenMax.set($('.tab' + currentPanel + '_container'), {  width: openTabWidth});
       TweenMax.set($('.tab2_container, .tab1_container'), { width: smallTabWidth });
        break;
        default:
    }
}



$('.pinterest_1, .pinterest_2, .pinterest_3').mouseover(function() {
  TweenMax.to($(this),.3, {ease: Power1.easeIn, transform: "scale(1.1)", opacity: .6});
});
$('.pinterest_1, .pinterest_2, .pinterest_3').mouseout(function() {
  TweenMax.to($(this),.3, {ease: Power1.easeOut, transform: "scale(1)", opacity: 1 });
});

/////MOUSE OVERS TAB
$(".tab1_container").mouseover(function () {
    TweenMax.to($('.tab_init_icon_1'),.3, {ease: Power1.easeOut, transform: "scale(1.1)", opacity: 1 });
});

$(".tab1_container").mouseout(function () {
    TweenMax.to($('.tab_init_icon_1'),.3, {ease: Power1.easeOut, transform: "scale(1)", opacity: 1 });
});
/////MOUSE OVERS TAB

$(".tab2_container").mouseover(function () {
    TweenMax.to($('.tab_init_icon_2'),.3, {ease: Power1.easeOut, transform: "scale(1.1)", opacity: 1 });
});

$(".tab2_container").mouseout(function () {
    TweenMax.to($('.tab_init_icon_2'),.3, {ease: Power1.easeOut, transform: "scale(1)", opacity: 1 });
});

/////MOUSE OVERS TAB

$(".tab3_container").mouseover(function () {
    TweenMax.to($('.tab_init_icon_3'),.3, {ease: Power1.easeOut, transform: "scale(1.1)", opacity: 1 });
});

$(".tab3_container").mouseout(function () {
    TweenMax.to($('.tab_init_icon_3'),.3, {ease: Power1.easeOut, transform: "scale(1)", opacity: 1 });
});


//Assign Clicks
$(".tab1_container").click(function () {
    classValue = $(this).attr("class");
    currentPanel = 1;
    openPanel();
});
$(".tab2_container").click(function () {
    classValue = $(this).attr("class");
    currentPanel = 2;
    openPanel();
});
$(".tab3_container").click(function () {
    classValue = $(this).attr("class");
    currentPanel = 3;
    openPanel();
});


$(".pinterest_1").click(function () {
   alert("pinterest");
});
$(".replay_btn").click(function () {
    TweenMax.to($('.frame1_box'), 1, {ease: Power1.easeOut, scale: 1, opacity: 1, display: "block"}); 
    TweenMax.to($('.frame2_box'), 1, {ease: Power1.easeOut, scale: 0, opacity: 0, display: "none"}); 
});
$(".background_click").click(function () {
  alert("bgclick")
});


$('.strong_tab').click(function () {
  console.log("strong tab");
});

$('.beauty_tab').click(function () {
  console.log("beauty tab");
});

$('.healthy_tab').click(function () {
  console.log("healthy tab");
});


jiStartPGX();

//=====================
// EVENT LISTENERS
//=====================


//=====================
// TRIGGER FUNCTIONS
//=====================
TweenMax.set($('#wrapper'), { opacity: 0 });



/**
 * --------------------------
 * Scalable Div
 * --------------------------
 * Function to make divs flexible.
 * Scales divs based on window size.
 * Centers the div on screen.
 *
 * Accepts 3 parameters:
 * @targetElement - the target div.
 * @contextWidth - the width to calculate it to (mostly your PSD mockup width).
 * @contextHeight - the height to calculate it to (mostly your PSD mockup height).
 * @imageFit - the type of resize you want for your image. Choose between "contain" or "cover".
 */
function scalableDiv (targetElement, contextWidth, contextHeight, imageFit) {

	var windowWidth   = $(window).width();
	var windowHeight  = $(window).height();
	var scaleValue;

	switch (imageFit) {

		case "cover":
		scaleValue = Math.max(windowWidth / contextWidth, windowHeight / contextHeight) * 1;
		break;

		case "contain":
		scaleValue = Math.min(windowWidth / contextWidth, windowHeight / contextHeight) * 1;
		break;
            
        case "reset":
		scaleValue = 1;
		break;
	}

	TweenMax.set(targetElement, {scale: scaleValue});


	//TweenMax.set(targetElement, {top: windowHeight / 2 - targetElement.get(0).getBoundingClientRect().height / 2});
    // TweenMax.set(targetElement, {left: "0px"});
}

/**
 * --------------------------
 * Debounce Utility
 * --------------------------
 */
function debounce (func, wait, immediate) {

    var timeout;

    return function () {

        var context = this, args = arguments;

        var later = function () {

            timeout = null;

            if (!immediate) func.apply(context, args);
        }

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};




        TweenMax.set($('.proname_small'), {ease: Power2.easeOut, opacity: "1" }); 
        TweenMax.set($('.pronamel_bg'), {ease: Power2.easeOut,rotationY: "0deg", opacity: "1",scale: 1}); 

        TweenMax.set($('.pronamel_t1'), {ease: Power2.easeOut, height: "32px", delay: 2.2 }); 
        TweenMax.set($('.pronamel_t2'), {ease: Power2.easeOut, height: "47px", delay: 2.7 }); 
        TweenMax.set($('.pronamel_t3'), {ease: Power2.easeOut, height: "24px", delay: 2.7 }); 
        TweenMax.set($('.pronamel_bottles'), {ease: Power2.easeOut, opacity: "1",scale: 1, delay: 3}); 
        //Pronamel END
        TweenMax.set($('.f2_t_1'), {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4}); 
        TweenMax.set($('.f2_t_2'), {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 4.5}); 
        TweenMax.set($('.f2_t_3'), {ease: Power1.easeOut, x: "0%", opacity: 1, delay: 5}); 
        TweenMax.set($('.f2_bot_text'), {ease: Power1.easeOut, opacity: 1, display: "block", delay: 5.5}); 