var button = document.getElementById("counter");


button.onclick = function(){

    var request =new XMLHttpRequest();
  
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            
            if (request.status ===200)  {
                var counter = request.responseText;
                document.getElementById('count').innerHTML = counter.toString();
            }
        }
    }
  
request.open('GET','http://harshaonhub28.imad.hasura-app.io/counter',true);
request.send(null);  
};

