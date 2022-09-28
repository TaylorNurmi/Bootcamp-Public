//Multiples of Three – but Not All

for (var i = 3; i >= -300; i -= 3) {
    if (i == -3 || i == -6) {
        continue
    }
    else{
        console.log(i)
    }
}

//Printing Integers with While

var count = 2000;

while (count <= 5280) {
    console.log(count);
    count++;
}

//Counting, the Dojo Way

for (var i = 1; i <=100; i++) {
    if (i % 5 == 0 && i % 10 == 0) {
        console.log("Coding Dojo")
    }
    else if (i % 5 == 0) {
        console.log("Coding")
    }
    else {
        console.log(i)
    }
}

//Flexible Countdown

function flexibleCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i-- ) {
        if (i % mult == 0) {
            console.log(i)
        }
    }
}