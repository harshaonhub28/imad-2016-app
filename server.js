var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    
  'article-one' : {
  title: 'Article one | Harsha',
  heading: 'Article one',
  date: 'Sep 29,2016',
  content: 'This is article one blah'
  },

  'article-two' : {
  title: 'Article two | Harsha',
  heading: 'Article two',
  date: 'dec 29,2016',
  content: 'This is article two'
  },

  'article-three' : {
  title: 'Article three | Harsha',
  heading: 'Article three',
  date: 'mar 29,2016',
  content: 'This is article three'
  }
};

function createTemplate(data){
    title= data.title;
    heading=data.heading;
    date = data.date;
    content = data.content;

var htmlTemplate = `<!doctype HTML>
    <html>
    <head>
        <title>
            ${title}
        </title>
    </head>
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </body>
    </html>`;

return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());    
});

var names=[];
app.get('/submit-name/:what',function(req,res){
     var name = req.params.what;
     console.log(name);
     names.push(name);
     res.send(JSON.stringify(names));
});

app.get('/articles/:articleName',function(req,res){
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
