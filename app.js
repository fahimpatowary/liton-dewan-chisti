

function videoToggle(){
    var videoClass = document.querySelector(".youtube");

    if(videoClass.style.visibility == 'hidden'){
        videoClass.style.visibility = 'visible';
    }else{
        videoClass.style.visibility = 'hidden';
    }
}