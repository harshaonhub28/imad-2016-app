var button = document.getElementById("counter");


button.onclick = function(){

    var request =new XMLHttpRequest();
  
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            
            if (request.status ===200)  {
                var counter = request.responseText;
                document.getElementById('count').innerHTML = counter.toString();
            }
        }
    }
  
request.open('GET','http://harshaonhub28.imad.hasura-app.io/counter',true);
request.send(null);  
};

//capture the name
var nameInput = document.getElementById('name');
var sname = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //send name to server and get results back
    
    //capture the names and display them
    var names = ['eric','stan','kyle','kenny'];
    var list='';
    for(var i=0; i<names.length;i++){
        list += '<li>'+name[i]+'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
}