// Created by - Aye Chan Aung Thwin

function setAnalogClock() {
    let hrHand = document.querySelector('[data-hr-hand]');
    let minHand = document.querySelector('[data-min-hand]');

    const currentDate = new Date();
    const  secondRatio = currentDate.getSeconds()/60;
    const  minRatio = (secondRatio+currentDate.getMinutes())/60;
    const  hrRatio = (minRatio+currentDate.getHours())/12;
    setRotation(minHand, minRatio, '--min-hand-rotation');
    setRotation(hrHand, hrRatio, '--hr-hand-rotation');
}

function setRotation(element, rotationRatio, rotation) {
    element.style.setProperty(rotation, rotationRatio * 360);
}

// setInterval(setAnalogClock, 1000);
// setAnalogClock();