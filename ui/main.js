var button = document.getElementById('counter');
//var counter = 0;

button.onclick = function() {

//create a request to counter endpoint

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if(request.readyState === XMLHttpRequest.DONE)
{
if(request.status===200)
{
var counter = request.responseText;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
}
}
//not yet done - no action reqd
};

//make a request
request.open('GET', 'http://erutsavsolanki27.imad.hasura-app.io/counter', true);
request.send(null);

};


/*
//Counter Code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {

//create a request to counter endpoint

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
if(request.readyState == XMLHttpRequest.DONE)
{
if(request.status==200)
{
var counter = request.responseText;
var span = document.getElementById('count');
span.innerHTML = counter.toString();
}
}
//not yet done - no action reqd
};

//make a request
request.open('GET','http://erutsavsolanki27.imad.hasura-app.io/counter',true);
request.send(null);

};

//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {

 //create a request to counter endpoint
var request = new XMLHttpRequest();
request.onreadystatechange = function () 
{
if(request.readyState == XMLHttpRequest.DONE)
{
if(request.status==200)
{
//capture a list of names and render it as a list
var names = request.responseText;
names = JSON.parse(names);
var list = '';
for(var i=0;i< names.length; i++)
{
list +='

' + names[i] + '
';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
}
}
//not yet done - no action reqd
};
//make a request
var nameInput = document.getElementById('n');
var n = nameInput.value;
request.open('GET','http://erutsavsolanki27.imad.hasura-app.io/submit-name?name='+ n,true);
request.send(null);
};



*/
