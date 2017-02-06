console.log('Loaded!');

// change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
// move an image
var img=document.getElementById('madi');
var marginleft=0;
function moveRight() {
    marginleft = marginleft + 5;
    img.style.marginleft = marginleft + 'px';
}
img.onclick=function() {
    var interval = setInterval(moveRight, 50);
};