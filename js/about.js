var firstPromise = new Promise(function (resolve,reject)  {
   document.getElementById("card1").style.display="none";
   document.getElementById("loading1").innerHTML=`<span class="fa fa-spinner fa-spin fa-3x fa-primay"></span>Loading,Wait...`;
    setTimeout(function(){
        document.getElementById("loading1").innerHTML='';
        document.getElementById("card1").style.display="block";
        console.log("first");
        resolve();
    }
    ,3000);

});

var secondPromise = new Promise(function (resolve,reject)  {
    document.getElementById("card2").style.display="none";
   document.getElementById("loading2").innerHTML=`<span class="fa fa-spinner fa-spin fa-3x fa-primay"></span>Wait..`;
    setTimeout(function(){
        document.getElementById("loading2").innerHTML='';
        document.getElementById("card2").style.display="block";
        console.log("first");
        resolve();
    }
    ,6000);

});
var thirdPromise = new Promise(function (resolve,reject)  {
    document.getElementById("card3").style.display="none";
    document.getElementById("loading3").innerHTML=`<span class="fa fa-spinner fa-spin fa-3x fa-primay"></span>Wait....`;
     setTimeout(function(){
         document.getElementById("loading3").innerHTML='';
         document.getElementById("card3").style.display="block";
         console.log("first");
         resolve();
     }
     ,9000);

});

async  function render  ()  {
    await firstPromise;
    await secondPromise;
    await thirdPromise;
}