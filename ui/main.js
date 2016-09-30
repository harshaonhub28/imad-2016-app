var button = document.getElementById("counter");


button.onclick = function(){

    var request =new XMLHttpRequest();
    var counter;
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if (request.status ===200){
           counter = request.responseText;
            }
        }
    }
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};

request.open('GET','http://harshaonhub28.imad.hasura.io/counter',true);
request.send(null);