var seconds=-1,minutes=0,hours=0,watch;
watch=setInterval(timer,1000);
function timer() {
        seconds++;
        if(seconds<10)
        document.getElementById("tmr").innerText=`\u00a0 0${hours}:0${minutes}:0${seconds}`;
        else if(seconds>=10&&minutes<10)
        document.getElementById("tmr").innerText=`\u00a0 0${hours}:0${minutes}:${seconds}`;
        else if(seconds>=10&&minutes>=10)
        document.getElementById("tmr").innerText=`\u00a0 0${hours}:${minutes}:${seconds}`;
        if(seconds%60==59){
            minutes++;
            seconds=-1;
        }
        if(minutes%60==59) {
            hours++;
            minutes=0;
        }
        var ct=document.getElementById("score").innerText;
        if(ct==7)
        {
            clearInterval(watch);
            alert("Congratulations U have passed this test and time taken by you is "+hours+":"+minutes+":"+seconds);
            document.body.style.backgroundImage="url(fireworks.gif)";
            
        }
}