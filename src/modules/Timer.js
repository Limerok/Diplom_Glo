function Timer (deadline) {

    const timerDay = document.querySelectorAll('.count_1 span'),
        timerHours = document.querySelectorAll('.count_2 span'),
        timerMinutes = document.querySelectorAll('.count_3 span'),
        timerSeconds = document.querySelectorAll('.count_4 span'); 

    console.log(timerHours);
    function getTimeRemainning() {
        const dataStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dataStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60 / 60) % 24),
            day = Math.floor((timeRemaining / 60 / 60 / 24));

        return { timeRemaining, seconds, minutes, hours, day };
    }

    const idSetInt = setInterval(() => {
        const timer = getTimeRemainning();
        timerDay.forEach((item) => {
            if (timer.day < 10) {
                item.textContent = '0' + timer.day;
            } else {
                item.textContent = timer.day;
            }
        });
        timerHours.forEach((item) => {
            if (timer.hours < 10) {
                item.textContent = '0' + timer.hours;
            } else {
                item.textContent = timer.hours;
            }
        });
        timerMinutes.forEach((item) => {
            if (timer.minutes < 10) {
                item.textContent = '0' + timer.minutes;
            } else {
                item.textContent = timer.minutes;
            }
        });
        timerSeconds.forEach((item) => {
            if (timer.seconds < 10) {
                item.textContent = '0' + timer.seconds;
            } else {
                item.textContent = timer.seconds;
            }
        });
        

        if (timer.timeRemaining < 0) {
            clearInterval(idSetInt);

            timerDay.forEach((item) => {
                item.textContent = '00';
            });
            timerHours.forEach((item) => {
                item.textContent = '00';
            });
            timerMinutes.forEach((item) => {
                item.textContent = '00';
            });
            timerSeconds.forEach((item) => {
                item.textContent = '00';
            });
        }

    }, 1000);

}

export default Timer;