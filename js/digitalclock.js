function currentTime() {
    let theTime = new Date();
    
    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ['SUN', 'MON','TUE', 'WED', 'THU', 'FRI','SAT']

    let ampm = "AM";

    if(theHour >= 12){
        ampm = "PM"
    } 

    if(theHour > 12) {
        theHour = theHour % 12;
    }

    if(theHour < 10) {
        theHour = "0" + theHour;
    }
    if(theSeconds < 10) {
        theSeconds = "0" + theSeconds;
    }
    if(theMinutes < 10) {
        theMinutes = "0" + theMinutes;
    }

    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minute').innerHTML = theMinutes;
    document.getElementById('second').innerHTML = theSeconds;
    document.getElementById('ampm').innerHTML =  ampm;

    let evenSeconds = theSeconds % 2

    if(evenSeconds === 0) {
        document.getElemendByID('colon1').style.color = "red";
        document.getElemendByID('colon2').style.color = "red";
    }
    else{
        document.getElemendByID('colon1').style.color = "black";
        document.getElemendByID('colon2').style.color = "black";
    }

}

setInterval(() => {
    currentTime();
}, 1000);