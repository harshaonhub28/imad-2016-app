var a = function(err,x){
    if(err)
        console.log(err);
    else
        console.log(x);
}

var b = function(y,cb){
    var z = y*y;
    if(//some computaion)
        cb(null,z);
    else
        cb('error');
}

b(1,a);

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
    };
  
request.open('GET','http://harshaonhub28.imad.hasura-app.io/counter',true);
request.send(null);  
};

//capture the name
var names=[];
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    var nameInput = document.getElementById('name');
    var sname = nameInput.value;
    console.log(sname);

    //send name to server and get results back
     var request =new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if (request.status ===200)  {
                names = request.responseText;
                names = JSON.parse(names);
                
            //capture the names and display them
            var list='';
            for(var i=0; i<names.length;i++){
                list += '<li>'+names[i]+'</li>';
                console.log(names[i]);
            }
            console.log(list);
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
            }
        }
    };
  
request.open('GET','http://harshaonhub28.imad.hasura-app.io/submitName?name='+sname,true);
request.send(null);  
    
    
};