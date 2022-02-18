function clicar (){
  window.location.replace('http://127.0.0.1:5500/eventos.html');

  }

  sair.disabled = true;
  function mudar(){
    var sair = document.getElementById('sair').innerHTML;
    document.getElementById('sair').innerHTML="login"

  }

  var btn = document.querySelector("#refresh");
btn.addEventListener("click", function() {
    
    location.reload();
});