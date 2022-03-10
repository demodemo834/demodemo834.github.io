// Created by - Aye Chan Aung Thwin

function getDayOfTheWeek() {
    const days = ["SU", "MN", "TU", "WD", "TH", "FR", "ST"];

    const date = new Date();
    let day = days[date.getDay()];
    return day;
}

function getMonthInDigit() {
    const date = new Date();
    let month = date.getMonth()+1;
    return month;
}

function getDate() {
    const date = new Date();
    let nthDay = date.getDate();
    return nthDay;
}

function getHours() {
    const date = new Date();
    let hour = date.getHours();
    return hour;
}

function getMinutes() {
    const date = new Date();
    let min = date.getMinutes();
    return min;
}

function getSeconds() {
    const date = new Date();
    let sec = date.getSeconds();
    return sec;
}

function isPM() {
    if (getHours()>=12) {
        return true;
    }
    return false;
}

function isAM() {
    return !isPM();
}

function getAmPm() {
    if (isAM()) {
        return "A";
    }
    return "P";
}

function setDay() {
    let daysOfTheWeek = document.querySelector('[data-days-of-the-week]');
    daysOfTheWeek.innerHTML = getDayOfTheWeek();
}

let alternate = false;

function setDigitalClock() {
    let digitHrMin = document.querySelector('[data-digit-hr-min]');
    let digitSec = document.querySelector('[data-digit-sec]');
    let digitDate = document.querySelector('[data-digit-date]');

    let hr=getHours();
    let min=getMinutes();
    let sec=getSeconds();
    let date=getDate();
    let month=getMonthInDigit();

    let colon=":";
    alternate = !alternate;
    if (alternate) {
        colon = " ";
    }
    else {
        colon = ":";
    }

    if (hr>12) {
        hr -= 12;
    }
    if (hr.toString().length==1) {
        hr = '!'+hr; //Exclamation mark will left a blank with that font!
    }
    if (min.toString().length==1) {
        min = '0'+min;
    }
    if (sec.toString().length==1) {
        sec = '!'+sec;
    }
    if (date.toString().length==1) {
        date = '0'+date;
    }
    if (month.toString().length==1) {
        month = '0'+month;
    }
    digitHrMin.innerHTML = `${hr}${colon}${min}`;
    digitSec.innerHTML = sec;
    digitDate.innerHTML = `${month}-${date}`;
}

setInterval(setDigitalClock, 1000);
setDay();
setDigitalClock();