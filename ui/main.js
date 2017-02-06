// Counter code
var button= document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    // make a request to the counter endpoint
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState===200) {
            var counter=request.responseText;
        
    
    //render the variable in the correct span
    
    var span= document.getElementById('count');
span,innerHTML = counter.toString();
}
}
};
var nameInput=document.getElementId('name');
var name = nameInput.value;
var submit=document.GetElementById('submit_btn');
submit.onclick=function() {
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0; i<name.length; i++){
        list+= 'li' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};