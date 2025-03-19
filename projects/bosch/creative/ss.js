//=====================
// VARIABLES
//=====================
var canAnimateExpanded = true,
    canAnimateCollapsed = true,
    canRotate = true,
    canResize = false,
    ua = window.navigator.userAgent.toLowerCase();

//Video Variables



    
window.platform = {
  isNexus: ua.match(/nexus/i) !== null,
  isIE: /(msie|trident)/i.test(navigator.userAgent), //window.navigator.appName.indexOf("Microsoft") !== -1,
  isChrome: ua.match(/Chrome/gi) !== null,
  isFirefox: ua.match(/firefox/gi) !== null,
  isWebkit: ua.match(/webkit/gi) !== null,
  isGecko: ua.match(/gecko/gi) !== null,
  hasTouch: ('ontouchstart' in window)
};


//=====================
// FUNCTIONS
//=====================
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var checkNexus = debounce(function() {
  currentWidth = window.innerWidth || document.documentElement.clientWidth;
  currentHeight = window.innerHeight || document.documentElement.clientHeight;

  //Portrait
  if (currentWidth >= 600 && currentHeight == 500) {
    $('#wrapper').removeClass('landscape');
    $('#wrapper').addClass('portrait nexus7');
    $('#expanded_wrapper').css('height' , '100% !important');
    $('body.opened #ad_choices').css('top', '485px');
  }
  //Landscape
  if (currentWidth >= 960 && currentHeight == 500) {
    $('#wrapper').removeClass('portrait');
    $('#wrapper').addClass('landscape nexus7');
    $('#expanded_wrapper').css('height' , '440px !important');
    //$('#expanded_wrapper').css('height' , '88% !important');
    $('body.opened #ad_choices').css('top', '426px');
  }
}, 200);

/*Starting Function*/
//jiStartSS()
function jiStartSS(){
  if (window.platform.isNexus) {
    checkNexus();
    $(window).on('resize', checkNexus);
  }

  if (canAnimateExpanded == true) {
    canAnimateExpanded = false;

    //Animations Here
    introAnimation();
  }
    
}
//VARIABLES OBJECTS
varioPerfect = document.getElementById("left_prod_1");
activOxy = document.getElementById("left_prod_2");
iDos = document.getElementById("left_prod_3");
varioPerfectText = document.getElementById("end_top_details_3");
activOxyText = document.getElementById("end_top_details_1");
iDosText = document.getElementById("end_top_details_2");

varioButton = document.getElementById("DISCOVER_CTA_VARIO");
activOxyButton = document.getElementById("DISCOVER_CTA_OXY");
iDosButton = document.getElementById("DISCOVER_CTA_IDOS");

varioDetails = [varioPerfect,varioPerfectText, varioButton];
activOxyDetails = [activOxy, activOxyText, activOxyButton];
iDosDetails = [iDos, iDosText, iDosButton];

activOxyControl = document.getElementById("DISCOVER_ACTIVE_OXY");
idosControl = document.getElementById("DISCOVER_IDOS"); 
varioControl = document.getElementById("DISCOVER_VARIO"); 
isFirstFrame = true;
animationComplete = false;
//

setupIntro();

function setupIntro() {
    TweenMax.set($('#product_1,#product_2,#product_3, #DISCOVER_IDOS, #DISCOVER_VARIO, #DISCOVER_ACTIVE_OXY'), { opacity: 0, transform: "scale(0)" });
    TweenMax.set($('#SERIE_6,#SERIE_4, #SERIE_8'), { opacity: 0});
}
function resetIntro() {
    TweenMax.set($('#product_1,#product_2,#product_3, #DISCOVER_IDOS, #DISCOVER_VARIO, #DISCOVER_ACTIVE_OXY'), { opacity: 0, transform: "scale(0)" });
    TweenMax.set($('#SERIE_6,#SERIE_4, #SERIE_8'), { opacity: 0, zIndex: 0 });
    animationComplete = false;
}
var tl = new TimelineLite();
function introAnimation() {
    
    if (device.mobile()) {
        tl.to($('#product_2'), .5, {opacity:1, transform: "scale(1)", delay: .5})
        .to($('#SERIE_8'), .5, {opacity:1, zIndex: 2})
        .to($('#product_3'), .5, {opacity:1, transform: "scale(1)"})
        .to($('#SERIE_6'), .5, {opacity:1, zIndex: 2})
        .to($('#product_1'), .5, {opacity:1, transform: "scale(1)"})
        .to($('#SERIE_4'), .5, {opacity:1, zIndex: 2});
        //.to($('#DISCOVER_ACTIVE_OXY'), .5, {opacity:1, transform: "scale(1)"})
        //.to($('#DISCOVER_IDOS'), .5, {opacity:1, transform: "scale(1)"})
        //.to($('#DISCOVER_VARIO'), .5, {opacity:1, transform: "scale(1)"})
        //.to($('#DISCOVER_VARIO'), .5, {opacity:1, transform: "scale(1)"})
        TweenMax.set($('#DISCOVER_ACTIVE_OXY, #DISCOVER_VARIO, #DISCOVER_IDOS'), {autoAlpha: .5, transform: "scale(1)"})
        setupButtons();
    } else {
        tl.to($('#product_2'), .5, {opacity:1, transform: "scale(1)" , delay: .5})
        .to($('#SERIE_8'), .5, {opacity:1, zIndex: 2})
        .to($('#product_3'), .5, {opacity:1, transform: "scale(1)"})
        .to($('#SERIE_6'), .5, {opacity:1, zIndex: 2})
        .to($('#product_1'), .5, {opacity:1, transform: "scale(1)"})
        .to($('#SERIE_4'), .5, {opacity:1, zIndex: 2})
        .to($('#DISCOVER_ACTIVE_OXY'), .5, {opacity:1, transform: "scale(1)"})
        .to($('#DISCOVER_IDOS'), .5, {opacity:1, transform: "scale(1)"})
        //.to($('#DISCOVER_VARIO'), .5, {opacity:1, transform: "scale(1)"})
        .to($('#DISCOVER_VARIO'), .5, {opacity:1, transform: "scale(1)"})
        .to($('#DISCOVER_ACTIVE_OXY, #DISCOVER_VARIO, #DISCOVER_IDOS'),1, { autoAlpha: .5, onComplete: setupButtons});
    }
 
//    
//    if ((device.mobile()) || (device.tablet())) {
//        alert("here");
//        TweenMax.to($('#DISCOVER_ACTIVE_OXY, #DISCOVER_VARIO, #DISCOVER_IDOS'), 1, {autoAlpha: .5, transform: "scale(1)"})
//        setupButtons();
//    }
    
}

function endFrameAnimation() {
    if (isFirstFrame) {
        TweenMax.to($('#SERIE_6,#SERIE_4,#SERIE_8,#DISCOVER_RESULTS'),1, { opacity: 0, zIndex: 0 });
        //TweenMax.set($('#SERIE_6,#SERIE_4,#SERIE_8,#DISCOVER_RESULTS'), { zIndex: 0 });
        TweenMax.set($('#end_frame_cover'), { zIndex: 5 });
        TweenMax.to($('#end_frame_cover'), 1, {opacity:1})
        //activOxyButton.style.zIndex = 5;
        isFirstFrame = false;
    }
}
function removeHovers() {
    //$( "#foo").unbind( "click" );
    $("#DISCOVER_ACTIVE_OXY").unbind("mouseover");
    $("#DISCOVER_VARIO").unbind("mouseover");
    $("#DISCOVER_IDOS").unbind("mouseover");
    $("#DISCOVER_ACTIVE_OXY").unbind("mouseout");
    $("#DISCOVER_VARIO").unbind("mouseout");
    $("#DISCOVER_IDOS").unbind("mouseout");
    
}
function setupHovers() {
  $("#DISCOVER_ACTIVE_OXY").mouseover(function() {
  TweenMax.set($('#DISCOVER_ACTIVE_OXY'), { opacity: 1 });
});
$("#DISCOVER_ACTIVE_OXY").mouseout(function() {
    if (video1Active) {
        TweenMax.set($('#DISCOVER_ACTIVE_OXY'), { opacity: 1 });
    } else {
        TweenMax.set($('#DISCOVER_ACTIVE_OXY'), { opacity: .5 });
    }
});

$("#DISCOVER_VARIO").mouseover(function() {
  TweenMax.set($('#DISCOVER_VARIO'), { opacity: 1 });
});
$("#DISCOVER_VARIO").mouseout(function() {
    if (video3Active) {
        TweenMax.set($('#DISCOVER_VARIO'), { opacity: 1 });
    } else {
        TweenMax.set($('#DISCOVER_VARIO'), { opacity: .5 });
    }
});

$("#DISCOVER_IDOS").mouseover(function() {
  TweenMax.set($('#DISCOVER_IDOS'), { opacity: 1 });
});
$("#DISCOVER_IDOS").mouseout(function() {
    if (video2Active) {
        TweenMax.set($('#DISCOVER_IDOS'), { opacity: 1 });
    } else {
        TweenMax.set($('#DISCOVER_IDOS'), { opacity: .5 });
    }
});
}

//=====================
// END FRAME
//=====================
video1Active = false;
video2Active = false;
video3Active = false;

//=====================
// TRIGGER FUNCTIONS
//=====================
var introVideoCoverRemoved = false;

//////VIDEO FUNCTIONS
function playVidAuto() {
    
       $('#VIDEO_PLAYER').on('click', function() {
      $(this).unbind('click');
      vp = $('#VIDEO_PLAYER').ut_videoplayer(config);
      setTimeout(function () {
        vp.play();
      }, 100);
    });
    
}


//var vp;
//var vp2;
//var vp3;

var vp, vp2, vp3,
    config = {
}
vpisVidLoaded = false; 
vp2isVidLoaded = false;  
vp3isVidLoaded = false; 

function videoA() {
    video1Active = true;
    video2Active = false;
    video3Active = false;
    vpisVidLoaded = true; 
    changeToOxy();
    TweenMax.set($('#video_container'), {zIndex: 2})
    TweenMax.set($('#video_container_2, #video_container_3'), {zIndex: 1})
    if (vp2isVidLoaded) { vp2.pause() } if (vp3isVidLoaded) { vp3.pause() }
    vp,
    config = {
      source_webm: "videos/vid_activ.webm", // required
      source_mp4: "videos/vid_activ.mp4",  
         clickID: 10,
         muted: false,
        volume: .75,
        slate: "img/exp/activ_placeholder.jpg", // required - image shown in the player before play (defaults to black)
      endSlate: "img/exp/activ_placeholder_with_play.jpg", // required - image shown in the player after completion (defaults to black, or the slate if it is defined)
         displayHidden: false, // (bool) initialize a hidden player
      //aspectRatio: "16:9", // width will default to 100% of its container, and the height will be set according to this ratio,
      width: '100%', // (int) width in pixels - overrides aspectRatio
      height: '100%', // (int) height in pixels - overrides aspectRatio
      muted: false, // (bool) initialize the player in a muted state,
      volume: 0.75, // (0-1)
      clickID: 10, // (int) clicks redirect to the corresponding click
    };
    
    vp = $('#VIDEO_PLAYER').ut_videoplayer(config);
        firstPlay = false;
        canPlay = true;
        isVidLoaded = true;
    setTimeout(function() { 
        vp.play();   
        vp.mute(false);
        //if (vp2isVidLoaded) { vp2.pause() } if (vp3isVidLoaded) { vp2.pause() }
    } , 500);
}

function videoB() {
    video1Active = false;
    video2Active = true;
    video3Active = false;
    vp2isVidLoaded = true;
    changeToiDos();
    TweenMax.set($('#video_container_2'), {zIndex: 2})
    TweenMax.set($('#video_container, #video_container_3'), {zIndex: 1})
    if (vpisVidLoaded) { vp.pause() } if (vp3isVidLoaded) { vp3.pause() }
    vp2,
    config = {
      source_webm: "videos/vid_idos.webm", // required
      source_mp4: "videos/vid_idos.mp4",  
         clickID: 7,
         muted: false,
        volume: .75,
        slate: "img/exp/idos_placholder.jpg", // required - image shown in the player before play (defaults to black)
      endSlate: "img/exp/idos_placeholder_with_play.jpg", // required - image shown in the player after completion (defaults to black, or the slate if it is defined)
      displayHidden: false, // (bool) initialize a hidden player
      //aspectRatio: "16:9", // width will default to 100% of its container, and the height will be set according to this ratio,
      width: '100%', // (int) width in pixels - overrides aspectRatio
      height: '100%', // (int) height in pixels - overrides aspectRatio
      muted: false, // (bool) initialize the player in a muted state,
      volume: 0.75, // (0-1)
      clickID: 7, // (int) clicks redirect to the corresponding click
    };
    
    vp2 = $('#VIDEO_PLAYER_2').ut_videoplayer(config);
      firstPlay = false;
    canPlay = true;
    isVidLoaded = true;
    setTimeout(function() { 
        vp2.play();   
        vp2.mute(false);
        //if (vpisVidLoaded) { vp.pause() } if (vp3isVidLoaded) { vp3.pause() }
    } , 500);
}

function videoC() {
    video1Active = false;
    video2Active = false;
    video3Active = true;
    vp3isVidLoaded = true;
    changeToVario();
    TweenMax.set($('#video_container_3'), {zIndex: 2})
    TweenMax.set($('#video_container_2, #video_container'), {zIndex: 1})
    if (vpisVidLoaded) { vp.pause() } if (vp2isVidLoaded) { vp2.pause() }
    vp3,
    config = {
      source_webm: "videos/vid_vario.webm", // required
      source_mp4: "videos/vid_vario.mp4",  
         clickID: 13,
         muted: false,
        volume: .75,
        slate: "img/exp/vario_placeholder.jpg", // required - image shown in the player before play (defaults to black)
      endSlate: "img/exp/vario_placeholder_with_play.jpg", // required - image shown in the player after completion (defaults to black, or the slate if it is defined)
      displayHidden: false, // (bool) initialize a hidden player
      //aspectRatio: "16:9", // width will default to 100% of its container, and the height will be set according to this ratio,
      width: '100%', // (int) width in pixels - overrides aspectRatio
      height: '100%', // (int) height in pixels - overrides aspectRatio
      muted: false, // (bool) initialize the player in a muted state,
      volume: 0.75, // (0-1)
      clickID: 13, // (int) clicks redirect to the corresponding click
    };
    
     vp3 = $('#VIDEO_PLAYER_3').ut_videoplayer(config);
      firstPlay = false;
    canPlay = true;
    isVidLoaded = true;
    setTimeout(function() { 
        vp3.play();   
        vp3.mute(false);
        //if (vpisVidLoaded) { vp.pause() } if (vp2isVidLoaded) { vp2.pause() }
    } , 500);
}

function setupButtons() {
 document.getElementById("DISCOVER_ACTIVE_OXY").addEventListener("click", videoA);
 document.getElementById("DISCOVER_IDOS").addEventListener("click", videoB);
 document.getElementById("DISCOVER_VARIO").addEventListener("click", videoC);
 setupHovers();
 animationComplete = true;
}
function removeEvents() {
 document.getElementById("DISCOVER_ACTIVE_OXY").removeEventListener("click", videoA);
 document.getElementById("DISCOVER_IDOS").removeEventListener("click", videoB);
 document.getElementById("DISCOVER_VARIO").removeEventListener("click", videoC);
}
//Change produc details
function removeIntroCover() {
    if (!introVideoCoverRemoved) {
        TweenMax.set($('#VIDEO_TRANSPARENTBUTTON'), { display: "none" });
    }
}


function changeToVario() {
     TweenMax.to(varioDetails, 1, {opacity:1})
     TweenMax.to(activOxyDetails, .5, {opacity:0})
     TweenMax.to(iDosDetails, .5, {opacity:0})
     varioButton.style.zIndex = 5;
     activOxyButton.style.zIndex = 4; 
     iDosButton.style.zIndex = 4;
     disableControls();
     hideMenu();
     //removeIntroCover();
     endFrameAnimation()
     
}
function changeToOxy() {
     TweenMax.to(varioDetails, 1, {opacity:0})
     TweenMax.to(activOxyDetails, .5, {opacity:1})
     TweenMax.to(iDosDetails, .5, {opacity:0})
     varioButton.style.zIndex = 4;
     activOxyButton.style.zIndex = 5; 
     iDosButton.style.zIndex = 4;
     disableControls()
     hideMenu();
     endFrameAnimation();
}
function changeToiDos() {
     TweenMax.to(varioDetails, .5, {opacity:0})
     TweenMax.to(activOxyDetails, .5, {opacity:0})
     TweenMax.to(iDosDetails, .5, {opacity:1})
     varioButton.style.zIndex = 4;
     activOxyButton.style.zIndex = 4; 
     iDosButton.style.zIndex = 5;
     disableControls()
     hideMenu();
     //removeIntroCover();
     endFrameAnimation();
}
function disableControls() {
    if (video1Active) {
        TweenMax.set($('#DISCOVER_IDOS, #DISCOVER_VARIO'), {opacity: .5})
    }
    if (video2Active) {
        TweenMax.set($('#DISCOVER_ACTIVE_OXY, #DISCOVER_VARIO'), {opacity: .5})
    }
     if (video3Active) {
        TweenMax.set($('#DISCOVER_IDOS, #DISCOVER_ACTIVE_OXY'), {opacity: .5})
    }
}


sideBar = document.getElementById("right_container");

menuIsOpen = true;


function menuOption() {
  if (!menuIsOpen) {
     console.log("open");
//     TweenMax.set(sideBar, {transform: "translateX(-100%)"}) 
      sideBar.style.transform = "translateY(-100%)";
      sideBar.style.webKitTransform = "translateY(-100%)";
     menuIsOpen = true;
  } else {
     console.log("close");
//     TweenMax.set(sideBar, {transform: "translateX(0%)"}) 
      sideBar.style.transform = "translateY(0%)";
      sideBar.style.webKitTransform = "translateY(0%)";
     menuIsOpen = false;
  }
  
}

function hideMenu() {
    if (device.mobile()) {
         sideBar.style.transform = "translateY(-100%)";
        menuIsOpen = true;
    } 
}
document.getElementById("menu_button").addEventListener("click", menuOption);

$(window).on("resize", function(){
//    console.log("enter resi");
    currentWidth = $(window).width();
    if (currentWidth <= 590) {
        document.getElementById("menu_button").addEventListener("click", menuOption);
    } else {
        if(menuIsOpen) {
            sideBar.style.transform = "translateY(0%)";
        }
        //
        menuIsOpen = false;
    }
    if (device.mobile() && device.landscape()) {
        TweenMax.set($("#left_text_cta_container"), {display: "none"})
//        TweenMax.set($("#ut_close"), {right: "40px"})
    } else {
        TweenMax.set($("#left_text_cta_container"), {display: "block"})
//        TweenMax.set($("#ut_close"), {right: "30px"})
    }
});

var $imgSeq = $(".EXPAND_ARROW"),
    imgSeqOpacity = 0.4,
    currentImage = 1,
    repeatCount = 0;
    isShimmerAnimFinish = true;
    
function runSequence() {

  var seqInterval = setInterval(function(){

    imgSeqOpacity+=0.042;
    $imgSeq.css("opacity",imgSeqOpacity);
    $imgSeq.attr('src', 'img/col/arrow_'+currentImage+".png");

    currentImage++;
   
    if(currentImage > 6 ){
       repeatCount++;
      //clearInterval(seqInterval);
      currentImage = 1;
      if (repeatCount >= 7) {
        clearInterval(seqInterval);
      }
      
       // setTimeout(stairwayLadyAnim, 250);
    }
  }, 150);
}


function returnToFirstFrame() {
    if (!isFirstFrame) {
       // TweenMax.to($('#SERIE_6,#SERIE_4,#SERIE_8,#DISCOVER_RESULTS'),1, { opacity: 1, zIndex: 2 });
        //TweenMax.set($('#SERIE_6,#SERIE_4,#SERIE_8,#DISCOVER_RESULTS'), { zIndex: 0 });
        TweenMax.set($('#end_frame_cover'), { zIndex: 0 });
        TweenMax.set($('#end_frame_cover'), {opacity:0})
        //activOxyButton.style.zIndex = 5;
        isFirstFrame = true;
        //TweenMax.set($('#SERIE_6,#SERIE_4, #SERIE_8'), { opacity: 0, zIndex: 0 });
    }
}

window.closeAd = function () {
  // creative.min.js binds window.closeAd() to autoclose timer expiration (15s)
  // but **NOT** when the #ut_close is clicked. This means that you must bind it yourself,
  // which allows you to modify timing and coordinate animations.
  theBody.removeClass('opened');
  theBody.addClass('closed');

  collapsedWrapper.css("opacity","0");
  collapsedWrapper.css("display","block");
  TweenMax.to(collapsedWrapper,.5,{opacity:1, ease:Power0.easeNone});
  runSequence();
    repeatCount=0;
    returnToFirstFrame();
    //resetIntro();
    tl.seek(0);
    tl.stop();
    video1Active = false;
    video2Active = false;
    video3Active = false;
    TweenMax.set($('#end_frame_cover'), { zIndex: -5 });
    TweenMax.set($('#DISCOVER_RESULTS'), { zIndex: 5, opacity: 1 });
   removeEvents();
    removeHovers();
//  jiClose();
};
$('#end_left_container').on('click', function (event) {
    $('#EXPANDED_BACKGROUND').click();
  return false;
});


/*Pause video when rotating device*/
//$(window).on('resize', function() {
//  if (canResize && device.landscape() && device.mobile() && device.android()) {
//    vp.pause();
//  }
//});
