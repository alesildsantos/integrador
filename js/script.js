
var d = new Date();
var wDay = d.getDay();
var wDayArr = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
wDay = wDayArr[wDay];
var date = d.getDate();
var year = d.getFullYear();
var month = d.getMonth();
var monthArr = ["Jan", "Fev","Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov","Dez"];
month = monthArr[month];
document.getElementById("date").innerHTML=wDay+", "+date+" / "+month+" / "+year;
