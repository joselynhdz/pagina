var cerrar = document.querySelector('.click');
var click = document.querySelector('.click');

  cerrar.addEventListener("click",function(e){
    e.preventDefault();
    click.style.display="none";

})

var links = document.querySelectorAll(".photos a");
links.forEach(link => link.addEventListener("click",function(e){
    e.preventDefault();
    //asignar a una variable la img de click
    var img = this.querySelector('img');
    var viewimg= click.querySelector('img');
    viewimg.src = img.src;
    //asignar el src de arriba a la variable img de click
    click.style.display="flex";
}));