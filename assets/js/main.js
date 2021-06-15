let cat = document.getElementById('cat');

let walkInterval;
let catMove = 0;
let walk = 20;
let defaultTime = 100;

console.log(window.innerWidth)

const catWalk = () => {
    walkInterval = setInterval(() => {
        catMove += walk;
        cat.style.left = catMove + "px";
        if (catMove + 300 > window.innerWidth) {
            turn()
        }
        if (catMove < 0) {
            turn()
        }

        if (walk === -20) {
            cat.style.transform = 'scaleX(-1)'
        } else {
            cat.style.transform = 'scaleX(1)'
        }
    }, defaultTime)
}

function pause() {
    clearInterval(walkInterval)
}

const turn = () => {
    walk *= -1
}

const catSpeed = () => {
    defaultTime -= 20
    pause()
    catWalk()
}