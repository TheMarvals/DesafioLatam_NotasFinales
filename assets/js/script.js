//obtenemos los datos del usuario//
var name = prompt ( "Ingrese su Nombre y Apellido" , "" )
var carrer = prompt ( "Ingrese su Carrera" , "" )
//obtenemos notas HTML//
alert ( "A continuacion debera ingresar las notas del ramo HTML"  )
var html1 = parseFloat(prompt("Ingrese nota 1 [HTML]", ""));
var html2 = parseFloat(prompt("Ingrese nota 2 [HTML]", ""));
var html3 = parseFloat(prompt("Ingrese nota 3 [HTML]", ""));
//operacion para obetener como resultado el rpomedio HTML//
var htmlp = (html1 + html2 + html3)/3;
//resultado HTML//
var reshtml = (htmlp.toFixed(2));


//obtenemos notas CSS//
alert ( "A continuacion debera ingresar las notas del ramo CSS"  )
var css1 = parseFloat(prompt("Ingrese nota 1 [CSS]", ""));
var css2 = parseFloat(prompt("Ingrese nota 2 [CSS]", ""));
var css3 = parseFloat(prompt("Ingrese nota 3 [CSS]", ""));
//operacion para obetener como resultado el rpomedio CSS//
var cssp = (css1 + css2 + css3)/3;
//resultado CSS//
var rescss = (cssp.toFixed(2));


//obtenemos notas JS//
alert ( "A continuacion debera ingresar las notas del ramo JS"  )
var js1 = parseFloat(prompt("Ingrese nota 1 [JS]", ""));
var js2 = parseFloat(prompt("Ingrese nota 2 [JS]", ""));
//operacion para obetener como resultado el rpomedio CSS//
var jsp = (js1 + js2)/3;
//resultado JSS//
var resjs = (jsp.toFixed(2));
var promedio_js = (12)-(js1 + js2);



//Div Container//
document.write('<div class="container mt-5">')

//Div Row//
document.write('<div class="row mt-5">')

//Div Titulo//
document.write('<div class="row"><div class="col"><h1>NOTAS FINALES</h1></div>')
//DIV central//
document.write('<div class="col"></div>')
//Div logo//
document.write('<div class="col"><img class="logo" src="assets/img/LOGO.png"alt="..."></div></div>')

//Nombre//
document.write('<div class="container">')
document.write('<div class="row justify-content-start">')
document.write('<div class="col-4"><p>Nombre:</p></div><div class="col-4"><p>'+name+'</p></div>')

//Carrera//
document.write('<div class="container">')
document.write('<div class="row justify-content-start">')
document.write('<div class="col-4"><p>Carrera:</p></div><div class="col-4"><p>'+carrer+'</p></div>')

//Head tabla//
document.write('<table class="table col-6">')
document.write('<thead><tr class="table-dark">')
document.write('<th scope="col">Ramo</th>')
document.write('<th scope="col">Nota 1</th>')
document.write('<th scope="col">Nota 2</th>')
document.write('<th scope="col">Nota 3</th>')
document.write('<th scope="col">Promedio</th></tr></thead>')

//Body de la Tabla//
document.write('<tbody>')

//tr//
document.write('<tr>')

//th//
document.write('<th scope="row">HTML</th>')

//TD HTML//
document.write('<td>'+html1+'</td>')
document.write('<td>'+html2+'</td>')
document.write('<td>'+html3+'</td>')
document.write('<td id="phtml">'+reshtml+'</td>')

//cierre tr//
document.write('</tr>')

//tr//
document.write('<tr>')

//th//
document.write('<th scope="row">CSS</th>')

//TD CSS//
document.write('<td>'+css1+'</td>')
document.write('<td>'+css2+'</td>')
document.write('<td>'+css3+'</td>')
document.write('<td id="promedio">'+rescss+'</td>')

//cierre tr//
document.write('</tr>')

//tr//
document.write('<tr>')

//th//
document.write('<th scope="row">JavaScript</th>')

//TD JS//
document.write('<td>'+js1+'</td>')
document.write('<td>'+js2+'</td>')
document.write('<td>Pendiente</td>')
document.write('<td id="promedio">'+resjs+'</td>')

//cierre tr JS//
document.write('</tr>')

//cierre tbody//
document.write('</tbody>')
//cierre tabla//
document.write('</table>')

document.write('<span>Para aprobar el ramo JavaScript con 4, necesitas obtener un '+promedio_js+' en la nota 3 </span></div></div>')
