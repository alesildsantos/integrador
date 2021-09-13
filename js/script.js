
var d = new Date();
var date = d.getDate();
var year = d.getFullYear();
var month = d.getMonth();
var monthArr = ["Janeiro", "Fevereiro","Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro","Dezembro"];
month = monthArr[month];
document.getElementById("date").innerHTML=date+"/"+month+"/"+year;
