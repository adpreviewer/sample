

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

//Panorama Variables
var isScrolling = false;
var direction = "";
var image1PosX = 0;
var imageWidth = 1340;
var visibleWidth = 11960;
var image2PosX = 0 - imageWidth;
var scrollIncrement = 0;
var scrollIncrementMax = 10;
var inertiaSpeedUp = .9;
var inertiaSlowDown = 0.4;
var allowLooping = true;
var mouseIsDown = false;
var timer; 

//DoubleClick, Creative Variables
let $;

if (isMobile == true) {
    var inertiaSpeedUp = .1;
}
function getElem(id) { return document.getElementById(id); }


politeInit = function(){
    container = document.getElementById('container_dc');
    setInit_1();
	getDynamic();
    addListeners();
//    show();
}


function setInit_1() {
    
    //Set Image Position
    TweenMax.set('#img1', { x: 0 })
    TweenMax.set('#img2', { x: image2PosX })
    //Initially selected room
    TweenMax.set('#room_1', { opacity: 0.5 })
}


function show() {
     document.getElementById('main-container').style.opacity = "1";
     startAnimation();
//    updateValues();
}



function startAnimation() {
    
    TweenMax.to('#btn_left',.3, {transformOrigin: "center center",scale:1.1, opacity:.5, repeat: 3,yoyo:true, onComplete: PulseRight, delay: 1})

    function PulseRight() {
    TweenMax.to('#btn_right',.3, {transformOrigin: "center center",scale:1.1, opacity:.5, repeat: 3,yoyo:true })                    
    }

    function pulseRoomButtons () {

    }

//  TweenMax.to("#btn_left",0.5,{scale:1.5, repeat:-1,yoyo:true})
//    }
}
var initialSetup = true;
var loadPixel;

getDynamic = function () {
    // Dynamic Content variables and sample values
    Enabler.setProfileId(10525911);
    var devDynamicContent = {};

    devDynamicContent.feed = [{}];
    devDynamicContent.feed[0]._id = 0;
    devDynamicContent.feed[0].Building = "Alameda";
    devDynamicContent.feed[0].Start_Room = 1;
    devDynamicContent.feed[0].Link = {};
    devDynamicContent.feed[0].Link.Url = "https://www.tipi.london/alameda";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings = [{}];
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0]._id = 0;
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Unique_ID = 1;
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Reporting_Label = "Alameda";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1 = "Bedroom";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1_Icon = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1_Icon.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1_Icon.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/79590783/dirty/img/icons_white/Bed.png";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1_Panorama = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1_Panorama.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1_Panorama.Url = "https://s0.2mdn.net/ads/richmedia/studio/26655713/26655713_20200407051045039_bedroom.jpg";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_1_Panorama_Position = "-330,20";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2 = "Living Room";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2_Icon = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2_Icon.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2_Icon.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/79590774/dirty/img/icons_white/sofa.png";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2_Panorama = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2_Panorama.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2_Panorama.Url = "https://s0.2mdn.net/ads/richmedia/studio/26655713/26655713_20200407050612141_livingroom.jpg";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_2_Panorama_Position = "-330,-280";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3 = "Kitchen";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3_Icon = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3_Icon.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3_Icon.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/79550095/dirty/img/icons_white/kitchen.png";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3_Panorama = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3_Panorama.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3_Panorama.Url = "https://s0.2mdn.net/ads/richmedia/studio/26655713/26655713_20200407050616163_kitchen.jpg";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_3_Panorama_Position = "-330,-280";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4 = "Bathroom";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4_Icon = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4_Icon.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4_Icon.Url = "https://s0.2mdn.net/ads/richmedia/studio/26655713/26655713_20200408023938678_bath.png";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4_Panorama = {};
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4_Panorama.Type = "file";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4_Panorama.Url = "https://s0.2mdn.net/ads/richmedia/studio/26655713/26655713_20200407051041370_bathroom.jpg";
    devDynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Room_4_Panorama_Position = "-330,-280";
    Enabler.setDevDynamicContent(devDynamicContent);

   
    //////////////////////////////////////////////////////////////
    //////CONTENT UPDATE//////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    main = dynamicContent.Tipi_3D_Panorama_Feed_buildings[0];
    exit = dynamicContent.feed[0];
    feed = dynamicContent.feed[0];
    //UPDATE BACKGROUND IMAGES
    getElem("room_1").style.backgroundImage = "url('" +  main.Room_1_Icon.Url + "')";
    getElem("room_2").style.backgroundImage = "url('" +  main.Room_2_Icon.Url + "')";
    getElem("room_3").style.backgroundImage = "url('" +  main.Room_3_Icon.Url + "')";
    getElem("room_4").style.backgroundImage = "url('" +  main.Room_4_Icon.Url + "')";
   
    document.getElementById("img1").src = main.Room_1_Panorama.Url;
    document.getElementById("img2").src = main.Room_1_Panorama.Url;
    //Selected Room
    selectedRoom = feed.Start_Room;
    roomId = 'room_' + selectedRoom;
    //Initial Room Select    
    selectInitialRoom(selectedRoom);
    updatePanoRamaPosition()
    
    //CONSOLE LOG DYNAMIC
    console.log("DYNAMIC VALUES FOR TROUBLESHOOTING");
    console.log("STARTING ROOM", selectedRoom);
    console.log("CURRENT ROOM", roomId);
    console.log("//////////////////////////////");
    console.log("feed[0].Building",  dynamicContent.feed[0].Building);
    console.log("BUILDING[0]Unique_ID_BUILDING",  dynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Unique_ID);
    console.log("Reporting_Label",dynamicContent.Tipi_3D_Panorama_Feed_buildings[0].Reporting_Label);
    
    initialSetup = true;
    pixelLoader(selectedRoom);
    storeCurrentPosition();
    show();
    
}

function pixelLoader(selectedRoom) {
        //PIXEL LOADER
    Room = selectedRoom;
    ordVal = Math.floor(Math.random() * 1000);              // returns a random number
    
    switch (selectedRoom) {
        case 1:
            roomName = main.Room_1;
            break;
        case 2:
             roomName = main.Room_2;
            break;
        case 3:
             roomName = main.Room_3;
            break;
        case 4:
             roomName = main.Room_4;
            break;
    }
    loadPixel = function(url) {
    // Create a new image element.
    var imageElement = document.createElement('img'); // Add the image to the DOM.
    document.body.appendChild(imageElement); // Set the src attribute of the image.
    imageElement.src = "https://adservice.google.com/ddm/fls/z/src=9331662;dc_pre=CJfp5PXt0-gCFQoj0wodFgwLmw;type=creative;cat=tipi-0;u4=%5B" + feed.Building + roomName  + "%5D;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=" + ordVal;
    imageElement.style.borderStyle = 'none';
    imageElement.height = 1;
    imageElement.width = 1;
    imageElement.alt = '';
        console.log("loadPixel", selectedRoom);
    };
     loadPixel();
    return selectedRoom;
}

var room1PosCurrentX, room2PosCurrentX, room3PosCurrentX, room4PosCurrentX= image1PosX;
var room1PosBCurrentX, room2PosBCurrentX, room3PosBCurrentX, room4PosBCurrent = image2PosX;

function storeInitValues() {

}
function selectInitialRoom(selectedRoom) {
     switch (selectedRoom) {

        case 1:
            roomId = 'room_1';
            document.getElementById("img1").src = main.Room_1_Panorama.Url;
            document.getElementById("img2").src = main.Room_1_Panorama.Url;
            currentRoom = 'room_1';
             
        break;
        case 2:
            roomId = 'room_2';
            document.getElementById("img1").src = main.Room_2_Panorama.Url;
            document.getElementById("img2").src = main.Room_2_Panorama.Url;   
            currentRoom = 'room_2';
        break;
        case 3:
            roomId = 'room_3';
            document.getElementById("img1").src = main.Room_3_Panorama.Url;
            document.getElementById("img2").src = main.Room_3_Panorama.Url;    
            currentRoom = 'room_3';
        break;
        case 4:
            roomId = 'room_4';
            document.getElementById("img1").src = main.Room_4_Panorama.Url;
            document.getElementById("img2").src = main.Room_4_Panorama.Url;  
            currentRoom = 'room_4';
        break;             
     }
    TweenMax.to("#room_1, #room_2, #room_3, #room_4",.5, { opacity: 1 })
    TweenMax.to("#" + roomId,.5, { opacity: 0.3 })
    TweenMax.to("#" + roomId,.2, { scale: 1 })
//     loadPanoImages()
}

panoImagesLoaded = false;
function loadPanoImages() {
    if (!panoImagesLoaded) {
    document.getElementById("imgloader1").src = main.Room_1_Panorama.Url;
    document.getElementById("imgloader2").src = main.Room_2_Panorama.Url;
    document.getElementById("imgloader3").src = main.Room_3_Panorama.Url;
    document.getElementById("imgloader4").src = main.Room_4_Panorama.Url;
    panoImagesLoaded = true;
    }
}


let roomId;

function roomClickHandler(roomId) {
    switch (roomId) {

        case 'room_1':
            if (roomId != currentRoom) {
                document.getElementById("img1").src = main.Room_1_Panorama.Url;
                document.getElementById("img2").src = main.Room_1_Panorama.Url;
                Enabler.counter("room_1_open");              
            }
            currentRoom = 'room_1';
            selectedRoom = 1;
            updatePanoRamaPosition();
            
            break;

        case 'room_2':
            if (roomId != currentRoom) {
                document.getElementById("img1").src = main.Room_2_Panorama.Url;
                document.getElementById("img2").src = main.Room_2_Panorama.Url;
                Enabler.counter("room_2_open");
            }

            currentRoom = 'room_2';
selectedRoom = 2;
            updatePanoRamaPosition();
            break;
        case 'room_3':
            if (roomId != currentRoom) {
                document.getElementById("img1").src = main.Room_3_Panorama.Url;
                document.getElementById("img2").src = main.Room_3_Panorama.Url;
                Enabler.counter("room_3_open");
            }
            currentRoom = 'room_3';
            selectedRoom = 3;
            updatePanoRamaPosition()
            break;
        case 'room_4':
            if (roomId != currentRoom) {
                document.getElementById("img1").src = main.Room_4_Panorama.Url;
                document.getElementById("img2").src = main.Room_4_Panorama.Url;
                Enabler.counter("room_4_open");

            }
            currentRoom = 'room_4';
            selectedRoom = 4;
            updatePanoRamaPosition()
            break;
    }
    TweenMax.to("#room_1, #room_2, #room_3, #room_4",.5, { opacity: 1 })
    TweenMax.to("#" + roomId,.5, { opacity: 0.3 })
    TweenMax.to("#" + roomId,.2, { scale: 1 });

//    TweenMax.fromTo("#panoramaHolder",1, { opacity: 0.2 },{ opacity: 1 })
    
//    TweenMax.to("#panoramaHolder",1, { opacity: 0.8 })
//    TweenMax.to("#panoramaHolder",.5, { opacity: 1, delay: .5 })


    if (!panoImagesLoaded) {
         if (roomId != currentRoom) {
    TweenMax.to("#loading_screen",1, { display: "block" })
    TweenMax.to("#loading_screen",1, { display: "none", delay: 1 })
         }
        document.getElementById("imgloader1").src = main.Room_1_Panorama.Url;
        document.getElementById("imgloader2").src = main.Room_2_Panorama.Url;
        document.getElementById("imgloader3").src = main.Room_3_Panorama.Url;
        document.getElementById("imgloader4").src = main.Room_4_Panorama.Url;
        panoImagesLoaded = true;
    }
    
//     updatePanoRamaPosition();
    pixelLoader(selectedRoom);
    return roomId;
}


function updatePanoRamaPosition() {

    panoramaPos_1 = main.Room_1_Panorama_Position;
    panPos_1 = panoramaPos_1.split(",");

    panorama1_top = panPos_1[0];
    panorama1_left = panPos_1[1];

    panoramaPos_2 = main.Room_2_Panorama_Position;
    panPos_2 = panoramaPos_2.split(",");

    panorama2_top = panPos_2[0];
    panorama2_left = panPos_2[1];

    panoramaPos_3 = main.Room_3_Panorama_Position;
    panPos_3 = panoramaPos_3.split(",");

    panorama3_top = panPos_3[0];
    panorama3_left = panPos_3[1];

    panoramaPos_4 = main.Room_4_Panorama_Position;
    panPos_4 = panoramaPos_4.split(",");

    panorama4_top = panPos_4[0];
    panorama4_left = panPos_4[1];


    switch (selectedRoom) {

        case 1:

            TweenMax.set('#panoramaHolder', {
                top: panorama1_top + "px",
                left: panorama1_left + "px"
            });

            if (room1stored) {
                image1PosX = room1PosCurrentX;
                image2PosX = room1PosBCurrentX;
                TweenMax.set('#img1', {
                    x: image1PosX
                })
                TweenMax.set('#img2', {
                    x: image2PosX
                })
            }


            break;
        case 2:
            TweenMax.set('#panoramaHolder', {
                top: panorama2_top + "px",
                left: panorama2_left + "px"
            });

            if (room2stored) {
                image1PosX = room2PosCurrentX;
                image2PosX = room2PosBCurrentX;
                TweenMax.set('#img1', {
                    x: image1PosX
                })
                TweenMax.set('#img2', {
                    x: image2PosX
                })
                //                scrollIncrement = 0;
            }
            break;
        case 3:
            TweenMax.set('#panoramaHolder', {
                top: panorama3_top + "px",
                left: panorama3_left + "px"
            });

            if (room3stored) {
                image1PosX = room3PosCurrentX;
                image2PosX = room3PosBCurrentX;
                TweenMax.set('#img1', {
                    x: image1PosX
                })
                TweenMax.set('#img2', {
                    x: image2PosX
                })
            }

            break;
        case 4:
            TweenMax.set('#panoramaHolder', {
                top: panorama4_top + "px",
                left: panorama4_left + "px"
            });

            if (room4stored) {
                image1PosX = room4PosCurrentX;
                image2PosX = room4PosBCurrentX;
                TweenMax.set('#img1', {
                    x: image1PosX
                })
                TweenMax.set('#img2', {
                    x: image2PosX
                })
            }
            break;
    }
}


//===Panorama Function
//=================================    

function update() {
    
//  requestAnimFrame( update );
//  console.log("moving");
 if (mouseIsDown) {
    //console.log('isScrolling');
    scrollIncrement += inertiaSpeedUp;
    if (scrollIncrement > scrollIncrementMax) {
      scrollIncrement = scrollIncrementMax;
    }
    if (scrollIncrement < 0) {
      scrollIncrement = 0;
    }
  } else {
    // Slowing down
    scrollIncrement -= inertiaSlowDown;
    if (scrollIncrement < 0) {
      scrollIncrement = 0;
    }
  }
  
  if (scrollIncrement === 0) {
    isScrolling = false;
  } else {
    isScrolling = true;
  }
  
  if (direction == "left") {
    image1PosX -= scrollIncrement;
    image2PosX -= scrollIncrement;
//      console.log("scrollIncrement", scrollIncrement);
      
    if ( image2PosX < 0-imageWidth) {
      image2PosX = imageWidth + image1PosX;
    } else if (image1PosX >= 0) {
      image2PosX =  image1PosX - imageWidth;
    }
    if ( image1PosX < 0-imageWidth) {
      image1PosX = imageWidth + image2PosX;
    } else if (image2PosX >= 0) {
      image1PosX =  image2PosX - imageWidth;
    }
  } else if (direction == "right") {
    image1PosX += scrollIncrement;
    image2PosX += scrollIncrement;
      
    if (image2PosX > 0) {
      image1PosX = image2PosX - imageWidth;
    }
    if (image1PosX > 0) {
      image2PosX = image1PosX - imageWidth;
    }
  }

    //Update Position
//    console.log("image1PosX", image1PosX)
    TweenMax.set('#img1', { x: image1PosX })
    if (allowLooping) {
        TweenMax.set('#img2', { x: image2PosX })
    }


     timer = setTimeout(function () {
         update();
     }, 1000 / 60);
    
    
}



function timeoutClear() {
    clearTimeout(timer);
}
var room1stored, room2stored, room3stored, room4stored = false;
function storeCurrentPosition() {
    switch (selectedRoom) {

        case 1:
          room1PosCurrentX = image1PosX;
          room1PosBCurrentX = image2PosX;
//            console.log("STORE VALUES", room1PosCurrentX, room1PosBCurrentX)
            room1stored = true;
            break;

        case 2:
          room2PosCurrentX = image1PosX;
          room2PosBCurrentX = image2PosX;
            room2stored = true;
            break;
        case 3:
          room3PosCurrentX = image1PosX;
          room3PosBCurrentX = image2PosX;
            room3stored = true;
            break;
        case 4:
          room4PosCurrentX = image1PosX;
          room4PosBCurrentX = image2PosX;
            room4stored = true;
            break;
    }
//    if (roomId != currentRoom) {
//
//    }
//    console.log("stored value of room", roomId);
//    console.log("room1PosCurrentX", room1PosCurrentX);
//    console.log("room1PosBCurrentX", room1PosBCurrentX);
    return selectedRoom;
}

//EVENT LISTENERS
buttonInteracted = false;
function addListeners() {
    //EXIT
    document.getElementById('bg_exit').addEventListener('click', bgClick);
    document.getElementById('cta_holder').addEventListener('click', ctaClick);
    //===EVENT LISTENERS PANORAMA
    //=================================


    document.getElementById('btn_right').addEventListener('mousedown', rightBtnPressed);
    document.getElementById('btn_right').addEventListener('touchstart', rightBtnPressed);
    document.getElementById('btn_left').addEventListener('mousedown', leftBtnPressed);
    document.getElementById('btn_left').addEventListener('touchstart', leftBtnPressed);

    document.getElementById('btn_right').addEventListener('mouseup', buttonReleased);
    document.getElementById('btn_right').addEventListener('touchend', buttonReleased);

    document.getElementById('btn_left').addEventListener('mouseup', buttonReleased);
    document.getElementById('btn_left').addEventListener('touchend', buttonReleased);

//    document.getElementById('btn_right').addEventListener('mousedown', rightBtnCLicked);
//    
//    function rightBtnCLicked() {
//        scrollIncrement = 1;
//        mouseIsDown = true;
//        direction = "left";
//        update();
//        loadPanoImages();
//        //console.log('rightSide.mousedown');
//        TweenMax.to("#room_selector_btn",.5, { opacity: .1 })
//        event.preventDefault();
//    }
    
    function rightBtnPressed() {
        mouseIsDown = true;
        direction = "left";
        buttonInteracted = true;
        update();
        loadPanoImages();
        //console.log('rightSide.mousedown');
        TweenMax.to("#room_selector_btn",.5, { opacity: .1 })
        event.preventDefault();
    }

    function leftBtnPressed() {
        mouseIsDown = true;
        direction = "right";
        buttonInteracted = true;
        update();
        loadPanoImages();
        //console.log('rightSide.mousedown');
        TweenMax.to("#room_selector_btn",.5, { opacity: .1 })
        event.preventDefault();
    }

    function buttonReleased() {
        if (direction == "right") {
            Enabler.counter("move_left_btn")
        }
        if (direction == "left") {
            Enabler.counter("move_right_btn")
        }
        TweenMax.to("#room_selector_btn",.5, { opacity: 1 })
        mouseIsDown = false;
        storeCurrentPosition();
        timeoutClear();
    }


    document.addEventListener('mouseup', function () {
        if (mouseIsDown) {
            mouseIsDown = false;
            //        console.log("test", scrollIncrement)
            timeoutClear();
        }
        scrollIncrement = 0;
        TweenMax.to("#room_selector_btn",.5, { opacity: 1 })
//         storeCurrentPosition();
        storeCurrentPosition();
    });

    //===EVENT LISTENERS END PANORAMA
    //=================================    


    document.getElementById('room_1').addEventListener('click', function () {
        roomClickHandler('room_1');
    });
    document.getElementById('room_2').addEventListener('click', function () {
        roomClickHandler('room_2');
    });
    document.getElementById('room_3').addEventListener('click', function () {
        roomClickHandler('room_3');
    });
    document.getElementById('room_4').addEventListener('click', function () {
        roomClickHandler('room_4');
    });


    document.getElementById('room_1').addEventListener('mouseover', function () {
        roomHoverHandler('room_1');
    });
    document.getElementById('room_2').addEventListener('mouseover', function () {
        roomHoverHandler('room_2');
    });
    document.getElementById('room_3').addEventListener('mouseover', function () {
        roomHoverHandler('room_3');
    });
    document.getElementById('room_4').addEventListener('mouseover', function () {
        roomHoverHandler('room_4');
    });

    document.getElementById('room_1').addEventListener('mouseout', function () {
        roomHoverOutHandler('room_1');
    });
    document.getElementById('room_2').addEventListener('mouseout', function () {
        roomHoverOutHandler('room_2');
    });
    document.getElementById('room_3').addEventListener('mouseout', function () {
        roomHoverOutHandler('room_3');
    });
    document.getElementById('room_4').addEventListener('mouseout', function () {
        roomHoverOutHandler('room_4');
    });

    //OTHER PARTS
    getElem('btn_left').addEventListener('mouseover', function () {
    //         TweenMax.to('#btn_left',.5, { opacity: .5 })
    TweenMax.to('#btn_left',.3, {transformOrigin: "center center",scale:1.1, opacity: .9})
    });
    getElem('btn_left').addEventListener('mouseout', function () {
    TweenMax.to('#btn_left',.2, {transformOrigin: "center center",scale:1, opacity: 1})
    });

    getElem('btn_right').addEventListener('mouseover', function () {
    TweenMax.to('#btn_right',.3, {transformOrigin: "center center",scale:1.1, opacity: .9})
    });
    getElem('btn_right').addEventListener('mouseout', function () {
    TweenMax.to('#btn_right',.2, {transformOrigin: "center center",scale:1, opacity: 1})
    });
    
    
        getElem('cta_holder').addEventListener('mouseover', function () {
        TweenMax.to('#cta_holder',.5, { opacity: .5 })
    });
    getElem('cta_holder').addEventListener('mouseout', function () {
         TweenMax.to('#cta_holder',.5, { opacity: 1 })
    });
}




currentRoom = 'room_1';

function roomHoverHandler(roomId) {
    switch (roomId) {

        case 'room_1':
          
            break;

        case 'room_2':

            break;
        case 'room_3':

            break;
        case 'room_4':

            break;
    }
    if (roomId != currentRoom) {
//            TweenMax.to("#" + roomId,.5, { opacity: 0.5 })
            TweenMax.to("#" + roomId,.2, { scale: 1.1 })
    }

    return roomId;
}


function roomHoverOutHandler(roomId) {
    switch (roomId) {

        case 'room_1':
            
            break;

        case 'room_2':

            break;
        case 'room_3':

            break;
        case 'room_4':

            break;
    }
    
    if (roomId != currentRoom) {
//            TweenMax.to("#" + roomId,.8, { opacity: 1 })
        TweenMax.to("#" + roomId,.2, { scale: 1 })
    }
    return roomId;
}


function bgClick() {
     Enabler.exitOverride('Background Exit',exit.Link.Url);
}

function ctaClick() {
    Enabler.exitOverride('CTA Exit',exit.Link.Url);
}

function logoClick() {
//    Enabler.exitOverride('Logo Exit',main.Exit_Url.Url);
}


function ctaHover() {
    TweenMax.to(  "#cta_holder", .5, { opacity: .7} );
}

function ctaOut() {
     TweenMax.to(  "#cta_holder", .3, { opacity: 1} );
}



//UPDATE LOCALLy

function updateValues() {
    document.getElementById('submit_position').addEventListener('click', function () {
       panoTopVal = document.getElementById("topPano").value;
        panoleftVal = document.getElementById("leftPano").value;
        console.log("panp", panoTopVal, panoleftVal)
    TweenMax.set('#panoramaHolder', { top: panoTopVal + "px", left: panoleftVal + "px" })     
    });
}