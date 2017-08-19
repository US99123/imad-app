var express = require('express');
var morgan = require('morgan');
var path = require('path');
/*var pool = require('pg').pool;
var app = express();
app.use(morgan('combined'));
var config = {
    user:'erutsavsolanki27',
    database:'erutsavsolanki27',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
    
};*/

var articles = {
    

'article-one': {
    title: 'Article one appear',
    heading: 'Article 1 appear',
    date: 'sep 5, 2016',
    content:`<p>
            this is content for 1 article that i am prearing right nowthis is content for 1 article that i am prearing right nowvthis is content for 1 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>
            <p>
                this is content for 1 article that i am prearing right nowthis is content for 1 article that i am prearing right nowthis is content for 12 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>
            <p>
                 this is content for 1 article that i am prearing 1 nowthis is content for 1 article that i am prearing right nowthis is content for 1 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>`
},
'article-two': {
    title: 'Article 2 appear | US',
    heading: 'Article 2 appear',
    date: 'sep 6, 2016',
    content:`<p>
            this is content for 2 article that i am prearing right nowthis is content for 1 article that i am prearing right nowvthis is content for 2 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>
            <p>
                this is content for 2 article that i am prearing right nowthis is content for 1 article that i am prearing right nowthis is content for 12 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>
            <p>
                 this is content for 2 article that i am prearing 1 nowthis is content for 1 article that i am prearing right nowthis is content for 1 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>`
},
'article-three': {
    title: 'Article 3 appear | US',
    heading: 'Article 3 appear',
    date: 'sep 6, 2016',
    content:`<p>
            this is content for 3 article that i am prearing right nowthis is content for 1 article that i am prearing right nowvthis is content for 3 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>
            <p>
                this is content for 3 article that i am prearing right nowthis is content for 1 article that i am prearing right nowthis is content for 3 article that i am prearing right nowthis is content for 1 article that i am prearing right now
            </p>
            <p>
                 this is content for 3 article that i am prearing 1 nowthis is content for 1 article that i am prearing right nowthis is content for 3 article that i am prearing right nowthis is content for 3 article that i am prearing right now
            </p>`
},
};


function createTemplate(data){
    
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;

var htmlTemplate = `
<html>
    <head>
        <title>
          ${title}
        </title>
        <meta name = "viewport" content = "width=device-width, initial-scale=1" />
        <link href = ui/style.css rel= "stylesheet">
    </head>
   
    <body>
              <div class = "container">
        <div>
            <a href ="/">Home</a>
        </div>
        <hr/>
         ${heading}
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

var counter = 0;
//app.get('/counter', function (req, res) {
counter = counter + 1;
//res.send(counter.toString());
//});
/*var counter = 0;
app.get('/counter', function(req, res){
    counter = counter +1;
    res.send(counter.toString());
});*/


//app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'index.html'));
//});

//var pool = new pool(config);
/*app.get('/test-db', function(req, res){
    
    pool.query('SELECT * FROM test', function(err, result) {
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result));
        }
    });*/
    
});



//var names = [];
/*
app.get('/submit-name', function(req, res){
    var name = req.query.name;
    names.push('name');
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
   });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);


