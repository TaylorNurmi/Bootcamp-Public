// Countdown

function createArray(num) {
    var arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i)
    }
    console.log("Array is " + arr.length + " long");
    return arr
}

// First Plus Length

/* If added with a string it concats to the number such as an array with the length of 4 would output what4 
If a Boolean is add false will act as 0 and true will act as 1 then add to the length of the array.*/
function firstPlusLength(arr) {
    return arr[0] + arr.length;
}

// Values Greater than Second

function valueGreaterThanSecond() {
    var arr = [1,3,5,7,9,13];
    var greaterValues = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            greaterValues++;
        }
    }
    return greaterValues
}

// Values Greater than Second, Generalized

// If the array is only one element long we would return 0 as there are no numbers larger and it cannot be larger than itself.

function valueGreaterThanSecondGeneralized(arr) {
    var greaterValues = 0;
    if (arr.length < 2){
        return "Array too small"
    }
    else{
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[1]) {
                greaterValues++;
            }
        }
    }
    return greaterValues
}

// This Length, That Value

function thisLengthThatValue(num1, num2) {
    var arr = [];
    if (num1 == num2) {
        console.log("Jinx!");
    }
    else {
        for (var i = 0; i < num1; i++) {
            arr.push(num2);
        }
    }
    return arr
}

//Fit the First Value

function fitTheFirstValue(arr) {
    if (arr[0] == arr.length) {
        console.log("Just right!")
    }
    else if (arr[0] > arr.length) {
        console.log("Too big!")
    }
    else {
        console.log("Too small!")
    }
}

// Fahrenheit to Celsius

function fahrenheitToCelsius(fDegrees){
    var cDegrees = (fDegrees - 32) * 5/9;
    return cDegrees
}

