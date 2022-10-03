let is_Array = testArray => Array.isArray(testArray);

let array_Clone = myArray => myArray.slice(0);

let first = (myArray,n) => {
    if(typeof n === "undefined") {
        return(myArray[0]);
    } else {
        let retArray = [];
        for(let i=0; i < n; i++) {
            retArray.push(myArray[i]);
        }
        return(retArray);
    }
}

let last = (myArray,n) => {
    if(typeof n === "undefined") {
        return(myArray[myArray.length - 1]);
    } else {
        let retArray = [];
        for(let i=(myArray.length - n); i < myArray.length; i++) {
            retArray.push(myArray[i]);
        }
        return(retArray);
    }
}

let arrayToString = myArray => myArray.join(',');

let dashes = (myNumber) => {
    let retArray = [];
    let notFirst = false;
    for(let i=0; i < myNumber.length; i++) {
        if(notFirst) {
            if((myNumber[i-1] % 2 === 0) && (myNumber[i] % 2 === 0)) {
                retArray.push('-');
                retArray.push(myNumber[i]);
            } else {
                retArray.push(myNumber[i]);
            }
        } else {
            retArray.push(myNumber[i]);
            notFirst = true;
        }
    }
    return(retArray.join(''));
}

let sortArray = (myArray) => {
    return(myArray.sort(function(a, b){return a - b}));
}

let countElement= (myArray, element) => {
    let count = 0;
    for(let i=0; i < myArray.length; i++) {
        if(myArray[i] === element) {
            count++;
        }
    }
    return count;
}

let mostFrequent = (myArray) => {
    let mostElement = {
        value: myArray[0],
        count: countElement(myArray, myArray[0])
    };
    
    let tempCount = 0;
    let tempElement;
    for(let i=1; i < myArray.length; i++) {
        tempElement = myArray[i];
        tempCount = countElement(myArray,myArray[i]);
        if((tempElement !== mostElement.value) && (tempCount > mostElement.count)) {
            mostElement.value = tempElement;
            mostElement.count = tempCount;
        }
    }
    return(mostElement);
}

const myArray = [1,2,3];

//1 if(is_Array(myArray)) {
//    console.log('myArray is an array');
//} else {
//    console.log('myArray is not an array');
//}

//2 console.log(array_Clone(myArray));

//3 console.log(first(myArray,2));

//4 console.log(last(myArray,2));

//5 let myColor = ["Red", "Green", "White", "Black"];
//console.log(arrayToString(myColor));

//6 let myNumber = "0254689224";
//console.log(dashes(myNumber));

//7 let arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
//console.log(sortArray(arr1));

//8 let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//mostElement = mostFrequent(arr1);
//console.log(`${mostElement.value} (${mostElement.count})`);