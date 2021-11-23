/*---to get value from slider to span --*/
function storevalue(){
    /*--Principle Amount--*/
var initial=document.getElementById("myRange-1").value;
  document.getElementById("amount-1").innerHTML=initial;
  /*--Rate of Intrest--*/
var rate=document.getElementById("myRange-2").value;
  document.getElementById("amount-2").innerHTML=rate;
  /*--No of Years--*/
  var years=document.getElementById("myRange-3").value;
  document.getElementById("amount-3").innerHTML=years;
  /*-- invested of amount--*/
  var Invested=initial*years*12;
    document.getElementById("Invested").innerHTML=Invested;
  /*--variables for calculation--*/  
   var i= rate/12/100;
   var months=years*12;
   var mature=0; 
  /*--Matured Amount--*/
  var mature=initial*[(Math.pow(1+i,months)-1)/i*(1+i)];
  document.getElementById("Total").innerHTML=Math.round(mature); 
  /*--estd.returns--*/
  var esttimated=mature-Invested;
  document.getElementById("Returns").innerHTML=Math.round(esttimated);

}
/*-- for nav bar ---to-- hamburger button -----*/
var hamburger=document.getElementById("hamburger");
var list1=document.getElementById("list-1");
 hamburger.addEventListener("click" ,() => {
   list1.classList.toggle("show");
   
 })
 /*--*^%&%&^^---*/


