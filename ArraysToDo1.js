/*Shuffle
In JavaScript, the Array object has numerous useful methods. It does not, however, 
contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), 
to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?*/

console.log(Math.floor(Math.random() * 5))

function shuffle(arr) {
    var used = []
    for (var i = 0; i < arr.length; i++) {
        var random = Math.floor(Math.random() * arr.length);
        if (used.includes(random) == false) {
            var temp = arr[i];
            arr[i] = arr[random];
            used.push(random)
            arr[random] = temp;
        }
    }
    return arr
}
console.log(shuffle([1,2,3,4,5]))

/*Skyline Heights
Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. 
Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, 
third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, 
in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().*/

function skylineHeights(arr) {
    let visable = [];
    let tallest = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && arr[i] > tallest) {
            visable.push(arr[i])
            tallest = arr[i]
        }
    }
    return visable
}



/*Zip It
Create a standalone function that accepts two arrays and combines their values sequentially into a new array. 
Extra values from either array should be included afterward. Given [4,15,100] and [10,20,30,40], 
return new array containing [4,10,15,20,30,40,100].*/

function zipIt(arr1,arr2) {
    let newArray = [];
    for (var i = 0; i < arr1.length; i++){
        newArray.push(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++){
        newArray.push(arr2[j]);
    }
    for (var x = 1; x < newArray.length; x++) {
        var y = x -1;
        var temp = newArray[x];
        while ( y >= 0 && newArray[y] > temp){
            newArray[y + 1] = newArray[y];
            y--;
        }
        newArray[y+1] = temp;
    }
    return newArray
}
console.log(zipIt([4,15,100],[10,20,30,40]))
