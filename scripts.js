// document.getElementById('get-joke').addEventListener("load", getJoke; 
// ?? pokazanie dowcipu razem z załadowaniem strony?? not working

var url = 'http://api.icndb.com/jokes/random';

var button = document.getElementById('get-joke');  // przycisk
button.addEventListener('click', function(){  // nasłuchiwanie
  getJoke(); 
});

var paragraph = document.getElementById('joke');

function getJoke() {  // pobranie dowcipu
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
  
  if(request.status == 404) {
	  console.log('rtt');
  }
}
