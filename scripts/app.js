/*
 * 3) Dentro de la función "handleSubmit" sucederá todo el proceso
 * de evaluación, usamos e.preventDefault() para evitar que el
 * formulario intente enviar los datos a otro lado como está
 * programado por definición.
 * Para recabar cada uno de los valores de los inputs utilizamos 
 * líneas como la del ejemplo: 
 * e.target.<nombre_del_input>.value
 */
function handleSubmit(e){
  e.preventDefault();
  var diasTrabajo = e.target.diasdetrabajo.value;
  var horasDia = e.target.horasaldia.value;
  var horasTrabajo = diasTrabajo * horasDia * 52;
  var horasdenotrabajar = diaslibres * horasdia + diasdeinactividad * horasdias;
  var tiempoadministrativo = porcentajedejuntas * (horastrabajo - horasdeinactividad);
  var gastos = gastosmensuales * 12;
  var precioextr = horasdeinactividad + tiempoadministrativo + gastosfijos;
  var horasefectivas = (horasposibles - horasdeinactividad - tiempoadministrativo) * horasdia;
  var horas = horasdia + (horadia * rentabilidad) + (horasdia * jubilacion);
  
  
  

}


/*
 * 2) Lo que hacemos dentro de la función "initialize" es tomar 
 * el formulario del DOM y asignarlo a una variable para después
 * pasar nuestra función "handleSubmit" como listener del evento
 * submit de este formulario.
 */
function initialize(){
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

/* 
 * 1) Al cargar la página manda llamar
 * la función "initialize"
 */
window.onload = (function(){
  initialize();
})();