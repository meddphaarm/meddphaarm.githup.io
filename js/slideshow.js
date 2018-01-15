var i=0;
var images=[];
var time=4000;

images[0]='image/cover.jpg';
images[1]='image/cover1.jpg';


function changeImg(){
    document.slide.src=images[i];
    
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    
    setTimeout("changeImg()",time);
}
window.onload=changeImg;