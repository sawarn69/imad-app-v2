console.log('Loaded!');

// change the text of the main-text div
var element=document.getElementById('main-text');
element.innerHTML='New value';
// move an image
var img=document.getElementById('madi');
img.onclick=function() {
    var interval = setInterval(moveRight, 100);
};