const decCache = [],
    decCases = [2, 0, 1, 1, 1, 2];

function decOfNum(number, titles) {
    if (!decCache[number]) decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
    return titles[decCache[number]];    
}


function countdown() {
    setInterval(function() {
        const hoursLeft = document.getElementById('timer__hours');
        const hoursText = document.getElementById('hours');
        const minutesLeft = document.getElementById('timer__minutes');
        const minutesText = document.getElementById('minutes');
        const secLeft = document.getElementById('timer__seconds');
        const secText = document.getElementById('seconds');

        
        const dateNow = moment().format('HH:mm:ss').getTime();
        // dateNow.setMilliseconds  (dateNow.getMilliseconds());
        const dateFinish = moment().format('HH:mm:ss').getTime();
        dateFinish.add(23, 'hours');
        dateFinish.add(59, 'minutes');
        dateFinish.add(59, 'seconds');
        
        // dateFinish.setSeconds(dateFinish.getSeconds() + 86400000);  
        // dateFinish.setMilliseconds(dateFinish.getMilliseconds() + 86400000);


        const sec = Math.floor((dateFinish - dateNow) / 1000);
        const secToMinutes = sec % 3600;
        const hoursNumber = Math.floor(sec / 3600);
        const minutesNumber = Math.floor(secToMinutes / 60);
        const secondsNumber = secToMinutes % 60;
        hoursText.innerHTML = decOfNum(hoursNumber, ['час', 'часа', 'часов']);
        minutesText.innerHTML = decOfNum(minutesNumber, ['минута', 'минуты', 'минут']);
        secText.innerHTML = decOfNum(secondsNumber, ['секунда', 'секунды', 'секунд']);
        hoursLeft.innerHTML = hoursNumber;
        minutesLeft.innerHTML = minutesNumber;
        secLeft.innerHTML = secondsNumber;

    },1000)
}

countdown();

// https://ru.stackoverflow.com/questions/632528/%D0%92%D1%8B%D1%87%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%B0%D1%82-%D0%B8-%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%B8-%D0%B2-js
// https://flaviocopes.com/momentjs/ 



