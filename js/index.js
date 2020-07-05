var firstPromise = new Promise(function (resolve,reject)  {
    const card1=`
    <div class="card" style="width:300px; float:left;margin:10px;">

            <div class="card-body">
                <img src="images/cse-department.png" class="img-fluid">
            </div>
            <div class="card-footer">
                <p class="h4">CSE</p>
                <p class="text-muted text-justify text-muted">The Computer Science and Engineering department was started in the year 2001 with an intake of 60 B.Tech. students. The current B.Tech. intake is 300. 
                </p>
            </div>
        </div>
    `
    setTimeout(function(){
        document.getElementById("logo1").innerHTML=card1;
        console.log("first");
        resolve(card1);
    }
    ,3000);

});

var secondPromise = new Promise(function (resolve,reject)  {
    const card=`
    <div class="card" style="width:300px; float:left;margin:10px;">

            <div class="card-body">
                <img src="images/ece-logo.png" class="img-fluid">
            </div>
            <div class="card-footer">
                <p class="h4">ECE</p>
                <p class="text-muted text-justify text-muted">The Department of Electronics and Communication Engineering is one of the departments that started at the time of inception of CVR College of Engineering in 2001 with an intake of 60 B.Tech. students.
                </p>
            </div>
        </div>
    `
    setTimeout(
        function(){
            document.getElementById("logo2").innerHTML=card;
            console.log("second");
            resolve(card);
        }
    ,6000);

});
var thirdPromise = new Promise(function (resolve,reject)  {
    const card=`
    <div class="card" style="width:300px; float:left;margin:10px;">

    <div class="card-body">
        <img src="images/it-logo.png" class="img-fluid">
    </div>
    <div class="card-footer">
        <p class="h4">IT</p>
        <p class="text-muted text-justify text-muted">The Department of Information Technology was started in the year 2001 with an initial intake of 60 B. Tech. students. 
        </p>
    </div>
</div>
    `
    setTimeout(
        function(){
            document.getElementById("logo3").innerHTML=card
            console.log("third");
            resolve(card);
        }
    ,9000);

});

async  function render  ()  {
    await firstPromise;
    await secondPromise;
    await thirdPromise;
}