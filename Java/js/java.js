function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function interes(){
    if(document.formulario1.cantidad.value/document.formulario1.cantidad.value==1){
        var valor = document.formulario1.cantidad.value;
        var resultado = parseInt(valor);
        var interes = resultado*0.2;
        var total = resultado + interes;
        document.formulario1.sueldoti.value="$"+total;
        
    }else{
        window.alert("No ingresó una cantidad")
    }
}
function borrar(){
    document.formulario1.cantidad.value="";
    document.formulario1.sueldoti.value="";
}
function sueldoycomi(){
    if(document.formulario2.venta1.value/document.formulario2.venta1.value==1&&document.formulario2.venta2.value/document.formulario2.venta2.value==1&&document.formulario2.venta3.value/document.formulario2.venta3.value==1){
    var vent1=document.formulario2.venta1.value;
    var vent2=document.formulario2.venta2.value;
    var vent3=document.formulario2.venta3.value;
    var com1= parseInt(vent1)*.10;
    var com2= parseInt(vent2)*.10;
    var com3= parseInt(vent3)*.10;
    var sueldoycomi= 4000+com1+com2+com3;
    document.formulario2.total.value="$"+sueldoycomi;
    }else{
    window.alert("No ingresó una cantidad")
}
}
function borrar1(){
    document.formulario2.venta1.value="";
    document.formulario2.venta2.value="";
    document.formulario2.venta3.value="";
    document.formulario2.total.value="";
}
function descuentazo(){
    if(document.formulario3.compra.value/document.formulario3.compra.value==1){
    var totalcom=document.formulario3.compra.value;
    var descuento= parseInt(totalcom)*.15;
    var totalapagar=parseInt(totalcom)-descuento;
    document.formulario3.descuento.value="$"+totalapagar;
    }else{
    window.alert("No ingresó una cantidad")
}
}
function borrar2(){
    document.formulario3.compra.value="";
    document.formulario3.descuento.value="";
}
function algoritmos(){
    if(document.formulario4.prom.value/document.formulario4.prom.value==1&&document.formulario4.exam.value/document.formulario4.exam.value==1&&document.formulario4.job.value/document.formulario4.job.value==1){
    var promedi=document.formulario4.prom.value;
    var examen=document.formulario4.exam.value;
    var trabaj=document.formulario4.job.value;
    var part1=(parseInt(promedi)*55)/10;
    var part2=(parseInt(examen)*30)/10;
    var part3=(parseInt(trabaj)*15)/10;
    var calif=part1+part2+part3;
    document.formulario4.califi.value=calif/10;
    }else{
    window.alert("No ingresó una cantidad")
    }
}
function borrar3(){
    document.formulario4.prom.value="";
    document.formulario4.exam.value="";
    document.formulario4.job.value="";
    document.formulario4.califi.value="";
}
function porcentaje(){
    if(document.formulario5.alumnos.value/document.formulario5.alumnos.value==1&&document.formulario5.M.value/document.formulario5.M.value==1){
    var todos=document.formulario5.alumnos.value;
    var muje=document.formulario5.M.value;
    var pMuj=(parseInt(muje)*100)/parseInt(todos);
    var pHom=100-pMuj;
    document.formulario5.Muj.value=pMuj+"%";
    document.formulario5.Hom.value=pHom+"%";
    }else{
    window.alert("No ingresó una cantidad")
    }
}
function borrar4(){
    document.formulario5.alumnos.value="";
    document.formulario5.M.value="";    
    document.formulario5.Muj.value="";
    document.formulario5.Hom.value="";
}
function calcuedad(){
    if(document.formulario6.ano.value/document.formulario6.ano.value==1&&document.formulario6.mes.value/document.formulario6.mes.value==1&&document.formulario6.dia.value/document.formulario6.dia.value==1){
    var today = new Date();
    var anos = today.getFullYear() - parseInt(document.formulario6.ano.value);
    var mon=parseInt(document.formulario6.mes.value);
    var day=parseInt(document.formulario6.dia.value);
    if (mon==(today.getMonth()+1)&&day<(today.getDay()+4)){
        document.formulario6.edad.value=anos-1;
    }else{
        document.formulario6.edad.value=anos;
    }
    }else{
        window.alert("No lleno un campo")
        }
}
function borrar5(){
    document.formulario6.ano.value="";
    document.formulario6.mes.value="";    
    document.formulario6.dia.value="";
    document.formulario6.edad.value="";
}