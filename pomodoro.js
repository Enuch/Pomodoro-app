let minutes = 24
let seconds = 59

let startSound = new Audio('click.mp3')
let endAudio = new Audio('bell.mp3')

function load() {
    document.querySelector('#minutes').innerHTML = minutes
    document.querySelector('#seconds').innerHTML = seconds
}

function start() {
    startSound.play()

    minutes = 24
    seconds = 59

    document.querySelector('#minutes').innerHTML = minutes
    document.querySelector('#seconds').innerHTML = seconds

    let minutes_interval = setInterval(minutesTimer, 60000)
    let seconds_interval = setInterval(secondsTimer, 1000)

    function minutesTimer() {
        minutes = minutes - 1
        document.querySelector('#minutes').innerHTML = minutes
    }
    
    function secondsTimer() {
        seconds = seconds - 1
        document.querySelector('#seconds').innerHTML = seconds
    
        if (seconds <= 0) {
            if (minutes <= 0) {
                endAudio.play()
                clearInterval(minutes_interval)
                clearInterval(seconds_interval)
            }
            seconds = 59
        }
    }
}

function restart() {
    startSound.play()

    minutes = 24
    seconds = 59

    document.querySelector('#minutes').innerHTML = minutes
    document.querySelector('#seconds').innerHTML = seconds
}



