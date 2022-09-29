//Biggie Size

function biggeSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        } 
    }
    return arr
}

//Print Low, Return High

function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] < low) {
            low = arr[i];
        }
        else if (arr[i] > high) {
            high = arr[i];
        } 
    }
    console.log(low)
    return(high)
}

//Print One, Return Another

function printOneReturnUnother(arr){
    for (var i=0; i < arr.length; i++){
        if (arr[i] % 2 != 0){
            console.log(arr[arr.length - 3]);
            return arr[i]
        }
    }

}

//Double Vision

function doubleVision(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2);
    }
    return newArray
}   


//Count Positives

function countPositives(arr) {
    let count = 0;
    for (var i = 0; i <arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr
}

//Evens and Odds

function evenAndOdds(arr) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even++;
            odd = 0;
            if (even == 3) {
                console.log("Even more so!")
                even = 0;
            }
        }
        else if (arr[i] % 2 != 0) {
            odd++;
            even = 0;
            if (odd == 3) {
                console.log("That's odd!")
                odd = 0;
            }
        }
    }
}

//Increment the Seconds

function incrementTheSeconds(arr) {
    for (var i = 0; i < arr.length; i++){
        if (i % 2 != 0) {
            arr[i]++;
            console.log(arr[i]);
        }
        else {
            console.log(arr[i])
        }
    }
    return arr
}

//Previous Lengths
//You are passed an array containing strings. Working within that same array,
// replace each string with a number – the length of the string at previous array index, 
//replace the first value with the length of the last string – and return the array.

Example ['this', 'is', 'an', 'array']

Output [5,4,2,2]

function previousLengths(arr) {
    var end = arr[arr.length - 1].length;
    for (var i = arr.length - 1; i >= 1; i--) {
        var temp = arr[i - 1].length;
        arr[i] = temp;
    }
    arr[0] = end;
    return arr
}
console.log(previousLengths(['this', 'is', 'an', 'array']))

//Add Seven to Most

function addSevenToMost(arr) {
    let newArray = [];
    for (var i = 1; i < arr.length; i++) {
        newArray.push(arr[i] + 7);
    }
    return newArray
}
console.log(addSevenToMost([1,2,3,4,5]))

//Reverse Array

function reverseArray(arr) {
    var j = arr.length-1;
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr
}



//Outlook: Negative

function outlookNegative(arr) {
    for (var i = 0; i<arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = Number("-" + arr[i])
        }
    }
    return arr
}

//Always Hungry

function alwaysHungry(arr) {
    if (arr.includes("food") == false) {
        console.log("I'm hungry");
    }
    else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == "food") {
                console.log("yummy")
            }
        }
    }
}

//Swap Toward the Center

function swapTowardTheCenter(arr) {
    var j = arr.length-1;
    var temp = arr[0];
    arr[0] = arr[j];
    arr[j] = temp;
    var x = arr.length - 3;
    var temp2 = arr[2];
    arr[2] = arr[x];
    arr[x] = temp2
    return arr
}

//Scale the Array

function scaleArr(arr, num) {
    for (var i = 0; i <arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
