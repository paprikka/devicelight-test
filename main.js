

App = (function(){
  var val = document.getElementById('val'), dark = true, body = document.body;
  val.innerHTML = 'working...';
  window.addEventListener('devicelight', function(e){
    var currentLux = e.value;
    val.innerHTML = currentLux;
    if (currentLux > 10) {
      if(dark){
        dark = false;
        body.className = 'lite';
      }
    }else{
      if(!dark){
        body.className = 'dark';
        dark = true;
      }
    }

  });

});

window.addEventListener('load', App, false);


