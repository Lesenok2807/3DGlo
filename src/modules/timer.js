const timer = (deadline) => {
    
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStope = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStope - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
       

        return { timeRemaining, hours, minutes, seconds };        
    };

    const pad = (n) => {
        if (n < 10)
        return '0' + n;

        return n;
    };

    
    const updateClock = () => {
        let getTime = getTimeRemaining();
        
        timerHours.textContent = pad(getTime.hours);
        timerMinutes.textContent = pad(getTime.minutes);
        timerSeconds.textContent = pad(getTime.seconds);

        

        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    };  
       
    updateClock();
};

export default timer;