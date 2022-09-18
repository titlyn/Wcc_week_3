let width= document.getElementById('map').offsetWidth;
let height= document.getElementById('map').offsetHeight;

function openNav() {
    document.getElementById("mySidepanel").classList.add("show");
}

function closeNav() {
    document.getElementById("mySidepanel").classList.remove("show");
}

window.addEventListener('resize', ()=>{
    width= document.getElementById('map').offsetWidth;
    height= document.getElementById('map').offsetHeight;
    placeOnMap();
})

placeOnMap();

function placeOnMap(){
    document.getElementById('map1').style.top= height*0.35 + 'px';
    document.getElementById('map1').style.left= width*0.17 + 'px';

    document.getElementById('map2').style.top= height*0.26 + 'px';
    document.getElementById('map2').style.left= width*0.47 + 'px';

    document.getElementById('map3').style.top= height*0.55 + 'px';
    document.getElementById('map3').style.left= width*0.08 + 'px';

    document.getElementById('map4').style.top= height*0.40 + 'px';
    document.getElementById('map4').style.left= width*0.57 + 'px';
}