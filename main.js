var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var n, i, k = 0;
var r = [];
var r2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

for (n = 1; n < 21; n++) {
    var i = Math.floor((Math.random() * (20 - n)));
    r.push(a[i]);
    a[i] = a[20 - n];
}

for (i = 0; i < 20; ++i) {
    document.getElementById(i).innerHTML = r[i];
}

var x = document.getElementById("button").addEventListener('click', timer);
var flag = true,
    c = 0,
    myTimer;

function timer() {
    myTimer = setInterval(counter, 1000);
}

function counter() {
    c++;
    document.getElementById("clock").innerHTML = c + ' Sec';
    flag = false;
}

function myFunction(pos) {
    var audio = document.getElementById("audio");
    audio.play();

    if (r[pos] == 1 && flag == true) {
        document.querySelector("button").disabled = true;
        myTimer = setInterval(counter, 1000);
    }
    if (r[pos] == ar[k]) {
        document.getElementById(pos).innerHTML = r2[k];
        document.getElementById(pos).style.backgroundColor = "#005082";
        k++;
    } else if (k > 19) {
        const pos2 = r[pos] + 19;
        if (pos2 == k) {
            var x = document.getElementById(pos).innerHTML;
            document.getElementById(pos).style.color = "#27496d";
            document.getElementById(pos).style.backgroundColor = "#27496d";
            k++;
        }
    }
    if (k == 40) {
        window.clearInterval(myTimer);
        var score = c;

        localStorage.setItem("score", score);
        var highscore = localStorage.getItem("highscore");

        if (highscore !== null) {
            if (score < highscore) {
                localStorage.setItem("highscore", score);
            }
        } else {
            localStorage.setItem("highscore", score);
        }
        var high = localStorage.getItem("highscore");
        document.getElementById("showbTime").innerHTML = high;
        document.getElementById("best_clock").innerHTML = high + " secs";

        document.getElementById("showTime").innerHTML = score;
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal)
                modal.style.display = "none";
        }
    }
}