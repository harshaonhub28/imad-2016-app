var button = document.getElementById("counter");

var counter=0;
button.onclick = function(){
    counter=counter+1;
    var pan = document.getElementById("count");
    pan.innerHTML = counter.toString();
};

