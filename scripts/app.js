var cerrar = document.querySelector('.click');
var click = document.querySelector('.click');

  cerrar.addEventListener("click",function(e){
    e.preventDefault();
    click.style.display="none";

})

var links = document.querySelectorAll(".photos a");
links.forEach(link => link.addEventListener("click",function(e){
    e.preventDefault();
  
    var img = this.querySelector('img');
    var viewimg= click.querySelector('img');
    viewimg.src = img.src;
    
    click.style.display="flex";
}));