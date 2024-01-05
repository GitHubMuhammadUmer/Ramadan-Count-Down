function countDown(){

    setInterval(function(){
        var dest = new Date("March 10, 2024, 19:00:00").getTime();
        var cur = new Date().getTime();
        var diff = dest - cur;
        var day = Math.floor(diff/(1000*60*60*24));
        console.log(day);
        var hr = Math.floor(diff % (1000*60*60*24)/(1000*60*60));
        console.log(hr);
        var min = Math.floor(diff %(1000*60*60)/(1000*60));
        console.log(min);
        var sec = Math.floor(diff %(1000*60)/(1000));
        console.log(sec);
    
        document.getElementById("day").innerHTML=day+"<br>"+"Days";
        document.getElementById("hr").innerHTML=hr+"<br>"+"Hours";
        document.getElementById("min").innerHTML=min+"<br>"+"Minutes";
        document.getElementById("sec").innerHTML=sec+"<br>"+"Seconds";
    },1000)
   
}
countDown()