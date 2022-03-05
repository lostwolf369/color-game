var n = 6;
var color
var squares = document.querySelectorAll(".square")
var mode = document.querySelectorAll(".mode")
var rgb = document.getElementById("RGBvalue")
var h1 = document.querySelector("h1")
var resetbtn = document.getElementById("newgame")
var msg = document.getElementById("message")
var perc = document.getElementById("percent")

function init() {
    setupmode()
    setupsquares()
    reset()
}
resetbtn.addEventListener("click", function () {
    reset()
})

function setupmode() {
    for (var i = 0; i < mode.length; i++) {
        mode[i].addEventListener("click", function () {
            mode[0].classList.remove("selected")
            mode[1].classList.remove("selected")
            this.classList.add("selected")

            if (this.textContent === "Easy") {
                n = 3
            }
            else {
                n = 6
            }
            reset()

        })
    }
}

function setupsquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var c = this.style.backgroundColor
            if (c === color) {
                message.textContent = "correct guess"
                resetbtn.textContent = "Play Again?"
                h1.style.backgroundColor = c;
                changeallsquarecolor(c)

            }
            else {
                message.textContent = "incorrect guess"
                this.style.backgroundColor = "#000000"

            }

        })
    }

}
function changeallsquarecolor(x) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = x
    }
}
function randomcolor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
function generaterandomcolors(y) {
    var a = []
    for (var i = 0; i < y; i++) {
        a.push(randomcolor());
    }
    return a
}
function pickedcolor() {
    var z = Math.floor(Math.random() * n)
    return z
}
function reset() {
    var arr = []
    arr = generaterandomcolors(n)
    color = arr[pickedcolor()]
    rgb.textContent = color
    resetbtn.textContent = "New Colors"
    message.textContent = ""
    for (var i = 0; i < squares.length; i++) {
        if (arr[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = arr[i]
        }
        else {
            squares[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = "rgb(148, 207, 226)"
}
init()