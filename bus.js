 var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        
 var desktopThreshold = 768;
 
 if (screenWidth < desktopThreshold) {
     alert("This website is best viewed on a desktop. Please open it on a desktop computer.");
     body.innerHTML="open in desktop";
 }
const body=document.getElementsByTagName("body")[0];
const a=document.getElementById("timings");
const b=document.getElementById("box1");
const c=document.getElementsByClassName("time-container")[0];
const e=document.getElementById("shedule");
const d=document.getElementById("box");
const f=document.getElementById("About");
const ba1=document.getElementById("ba1");
const timeContainer=document.getElementsByClassName("time-container")[0];
const book=document.getElementById("book");
const container2=document.getElementById("container2");
const BusLayout=document.getElementsByClassName("BusLayout")[0];
const confirm1=document.getElementsByClassName("confirmseats")[0];
const confirmtable=document.getElementById("confirmdata");
const container1=document.getElementById("container");
confirm1.style.visibility='hidden';
const d1=document.getElementById("d1");
const dateset=document.getElementById("dateSet");
const contactUs=document.getElementById('contact');
contactUs.remove();
function track(){
    confirm1.style.visibility='hidden';
    contactUs.remove();

    b.style.display='block';
    a.style.display='none';
    d.style.display='none';
    e.style.visibility='hidden';
    ba1.style.visibility='hidden';
    book.style.visibility='hidden';
    BusLayout.style.visibility='hidden';
    container2.style.visibility='hidden';
    dateset.style.visibility='visible';

}
function show() {
    contactUs.remove();

    console.log("Before hiding confirm1:", confirm1.style.visibility);
    confirm1.style.visibility = 'hidden';
    console.log("After hiding confirm1:", confirm1.style.visibility);
confirm1.remove();
BusLayout.remove();
dateset.remove();
    b.style.display = 'none';
    a.style.display = 'block';
    d.style.display = 'block';
    c.style.visibility = 'visible'; 
    f.style.display = 'none';
    e.style.visibility = 'hidden';
    ba1.style.visibility = 'visible';
    timeContainer.style.visibility = 'visible';
    book.style.visibility = 'visible';
    container2.style.visibility = 'hidden';

}


function About1(){
    contactUs.remove();

    confirm1.remove();
BusLayout.remove();
dateset.remove();
    a.style.display='none';
    d.style.display='none';
    b.style.display='none';
   c.style.visibility='hidden';
   e.style.visibility='hidden';
   ba1.style.visibility='hidden';
   book.style.visibility='hidden';
f.style.display='block';
container2.style.visibility='hidden';
}
function contact(){
    body.append(contactUs);
    confirm1.remove();
BusLayout.remove();
dateset.remove();
    a.style.display='none';
    d.style.display='none';
    b.style.display='none';
   c.style.visibility='hidden';
   e.style.visibility='hidden';
   ba1.style.visibility='hidden';
   book.style.visibility='hidden';
f.style.display='none';
container2.style.visibility='hidden';
}

function GetValue() {
    contactUs.remove();

    dateset.style.visibility='visible';
body.append(dateset);
    confirm1.style.display='none';
    e.style.visibility='visible';
    var selected1 = document.getElementById("start-point");
    var selected2 = document.getElementById("End-point");
    var textvalue1 = selected1.options[selected1.selectedIndex].text;
    var textvalue2 = selected2.options[selected2.selectedIndex].text;
    var tableBody = document.querySelector("#timingsData tbody");
    tableBody.innerHTML = "";
    if((textvalue1=="Vijayawada" && textvalue2=="Hyderbad") || (textvalue2=="Vijayawada" && textvalue1=="Hyderbad") ){
        var x=3;
        var y=14;
        }
        if((textvalue1=="Vijayawada" && textvalue2=="chennai") || (textvalue2=="Vijayawada" && textvalue1=="Chennai") ){
            var x=5;
            var y=13;
            }
            if((textvalue1=="Vijayawada" && textvalue2=="Banglore") || (textvalue2=="Vijayawada" && textvalue1=="Banglore") ){
                var x=2;
                var y=13;
                }
    if(textvalue1==textvalue2){
        alert("No direct busses are available");
        tableBody.innerHTML="No busses Available";
    }
    else{
    for (var i = 0; i < 5; i++) {
        var newrow = tableBody.insertRow(i);
        var cell1 = newrow.insertCell(0);
        var cell2 = newrow.insertCell(1);
        var cell3 = newrow.insertCell(2);
        var cell4 = newrow.insertCell(3);
        cell1.innerHTML = textvalue1;
        cell2.innerHTML = textvalue2;
        cell3.innerHTML =(parseInt(x+i))+" Hrs" ;
        cell4.innerHTML = (y+i)+" Hrs";
    }
    }
}
function ticket1(){
    contactUs.remove();

    dateset.style.visibility='visible';
    b.style.display='none';
    a.style.display='none';
    d.style.display='none';
    e.style.visibility='hidden';
    ba1.style.visibility='hidden';
    timeContainer.style.visibility='hidden';
    book.style.visibility='hidden';
    container2.style.visibility='visible';
    confirm1.style.visibility='hidden';
   

}

var selected11 = document.getElementById("start-point1");
var selected21 = document.getElementById("End-point1");
var textvalue11 = selected11.options[selected11.selectedIndex].text;
var textvalue21 = selected21.options[selected21.selectedIndex].text;
    function GetValue1() {
        contactUs.remove();

        body.append(confirm1);
        console.log("Entering GetValue1()");
        container2.style.visibility = 'hidden';
        console.log("Setting container2 visibility to 'hidden'");
        confirm1.style.visibility = 'visible';
        console.log("Setting confirm1 visibility to 'visible'");
        confirmtable.style.visibility = 'visible';
        console.log("Setting confirmtable visibility to 'visible'");
        e.style.visibility='hidden';

        var tableBody = document.querySelector("#confirmdata tbody");
        tableBody.innerHTML = "";
        if((textvalue11=="Vijayawada" && textvalue21=="Hyderbad") || (textvalue21=="Vijayawada" && textvalue11=="Hyderbad") ){
            var x=6;
            var y=15;
            }
            if((textvalue11=="Vijayawada" && textvalue21=="chennai") || (textvalue21=="Vijayawada" && textvalue11=="Chennai") ){
                var x=5;
                var y=13;
                }
        if(textvalue11==textvalue21){
            alert("No direct busses are available");
            tableBody.innerHTML="No busses Available";
        }
        else{
        for (var i = 0; i < 5; i++) {
            var newrow = tableBody.insertRow(i);
            var cell11 = newrow.insertCell(0);
            var cell21 = newrow.insertCell(1);
            var cell31 = newrow.insertCell(2);
            var cell41 = newrow.insertCell(3);
            var cell51=newrow.insertCell(4);
            cell11.innerHTML = textvalue11;
            cell21.innerHTML = textvalue21;
            cell31.innerHTML =(parseInt(x+i))+" AM" ;
            cell41.innerHTML = (y+i)+" PM";
            var link=document.createElement("button");
            link.style.width='200px';
            link.style.height='30px';
            link.style.fontSize='24px';
            link.style.backgroundColor='white';
            link.href="#";
            link.addEventListener("click", function () {
                BB();
            });
            link.innerHTML="Book";
            cell51.appendChild(link);        }
        }
    }

    function BB() {
        contactUs.remove();

        confirm1.remove();
        body.append(BusLayout);
        confirm1.style.visibility = 'hidden';

        if (BusLayout) {
            BusLayout.style.visibility = 'visible';
            console.log("buslayout");
        } else {
            console.error("BusLayout element not found.");
        }
    }
    
    var a1=new Date();
    var yr=a1.getFullYear();
    var month=a1.getMonth()+1;
    if(month<10){
        month="0"+yr;
    }
    var date=a1.getDate();
    if(date<10){
        date="0"+date;
    }
    var c_date=yr+"-"+month+"-"+date;
    d1.value=c_date;
    
    let selectedSeats='';
    let amount=0;
    let x=500;
    var seatNum=0;
    function seatselect(seatNum){
        this.seatNum=seatNum;
     const seats=document.querySelectorAll("c1r1", "c1r2", "c1r3", "c1r4", "c1r5", "c1r6", "c1r7", "c1r8", "c1r9", "c1r10",
     "c2r1", "c2r2", "c2r3", "c2r4", "c2r5", "c2r6", "c2r7", "c2r8", "c2r9", "c2r10",
     "c3r1", "c3r2", "c3r3", "c3r4", "c3r5", "c3r6", "c3r7", "c3r8", "c3r9", "c3r10",
     "c4r1", "c4r2", "c4r3", "c4r4", "c4r5", "c4r6", "c4r7", "c4r8", "c4r9", "c4r10"
     );
     const temp=document.getElementById("selected-seats");
     const temp1=document.getElementById("total-amount");
for(var i=0;i<40;i++){
    for(var j=1;j<41;j++){
        var seatNo="seatNo"+j;
        seatNo=document.getElementsByClassName(seats[i])[0];
        if (!selectedSeats.includes(seatNum)){
            selectedSeats= selectedSeats+seatNum+",";   
        amount=amount+x;     }
        }   


         
}
temp.innerHTML = "Selected Seats: " + selectedSeats;
temp1.innerHTML=amount;
console.log(selectedSeats);}
const final = document.getElementById("final");

function refreshPage() {
    setTimeout(function () {
        window.location.reload();
    }, 5000);
}

final.addEventListener('click', function () {
    contactUs.remove();
if(selectedSeats==""){
    alert("No seats selected");
    window.location.reload();
}
else{
    var setseat = confirm("seats selected: " + selectedSeats);
    if (setseat == true) {
        var amt = confirm("amount:" + amount);
        if (amt == true) {
            const vticket = document.getElementById("vticket");
            const ln1 = document.getElementById('ln1');
            const ln2 = document.getElementById('ln2');
            const ln3 = document.getElementById('ln3');
            const ln4 = document.getElementById('ln4');
            const ln5 = document.getElementById('ln5');
            const dd = document.getElementById('d1');

            vticket.style.visibility = 'visible';
            BusLayout.style.visibility = 'hidden';
            dateset.remove();
            ln1.innerText = selectedSeats;
            ln2.innerText = amount;
            ln3.innerText = dd.value;
            ln4.innerText = textvalue11;
            ln5.innerText = textvalue21;

            refreshPage();
        } else {
            alert("Payment cancelled");
            window.location.reload();
        }
    } else {
        alert("Payment cancelled");
        window.location.reload();
    }
}});
