var button = document.getElementById("counter");

var counter=0;
button.onclick = function(){
console.log('function enter');
    
    counter=counter+1;
    var pan = document.getElementById("count");
    pan.innerHTML = counter.toString();
};

