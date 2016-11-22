window.onload=manejarClick;

var cifra1="";
var control=true;

function manejarClick() {

	var uno=document.getElementById("uno");
	uno.addEventListener("click",function() {
		                    clicNumero("1");
		                });
	var dos=document.getElementById("dos");
	dos.addEventListener("click",function() {
		                    clicNumero("2");
		                });
    var tres=document.getElementById("tres");
	tres.addEventListener("click",function() {
		                    clicNumero("3");
		                });
	var cuatro=document.getElementById("cuatro");
	cuatro.addEventListener("click",function() {
		                    clicNumero("4");
		                });
	var cinco=document.getElementById("cinco");
	cinco.addEventListener("click",function() {
		                    clicNumero("5");
		                });
	var seis=document.getElementById("seis");
	seis.addEventListener("click",function() {
		                    clicNumero("6");
		                });
	var siete=document.getElementById("siete");
	siete.addEventListener("click",function() {
		                    clicNumero("7");
		                });
	var ocho=document.getElementById("ocho");
	ocho.addEventListener("click",function() {
		                    clicNumero("8");
		                });
	var nueve=document.getElementById("nueve");
	nueve.addEventListener("click",function() {
		                    clicNumero("9");
		                });
	var cero=document.getElementById("cero");
	cero.addEventListener("click",function() {
		                    clicNumero("0");
		                });
	var sumar=document.getElementById("sumar");
	sumar.addEventListener("click",function() {
		                    clicNumero("+");
		                });
	var restar=document.getElementById("restar");
	restar.addEventListener("click",function() {
		                    clicNumero("-");
		                });
	var dividir=document.getElementById("dividir");
	dividir.addEventListener("click",function() {
		                    clicNumero("/");
		                });
	var multipli=document.getElementById("multipli");
	multipli.addEventListener("click",function() {
		                    clicNumero("*");
		                });
	var borrar=document.getElementById("borrar");
	borrar.addEventListener("click",function() {
		                    oper();
		                });
	var igual=document.getElementById("igual");
	igual.addEventListener("click",function() {
		                    calcular();
		                });
}
function clicNumero(nume){
    cifra1+=nume
    var panta=document.getElementById("resultado");
    panta.textContent=cifra1;
}
function calcular(){
    var fin=eval(cifra1);
    var panta=document.getElementById("resultado");
    panta.textContent=fin;
}
function oper(){
   cifra1="";
   var panta=document.getElementById("resultado");
   panta.textContent=cifra1;
}





