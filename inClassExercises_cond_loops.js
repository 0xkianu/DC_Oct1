function findLarger(x,y) {
    if (x > y) {
        return(x);
    } else {
        return(y);
    } 
}

function findSign(x,y,z) {
    product = x*y*z;
    if (product >= 0) {
        return('+');
    } else {
        return('-');
    }
}

function sortNumbers(x,y,z) {
    let sortedArr = [];
    let sortedStr = '';
    if(x < y && x < z) {
        sortedArr.push(x);
        if(y < z) {
            sortedArr.push(y);
            sortedArr.push(z);
        } else {
            sortedArr.push(z);
            sortedArr.push(y);
        }
    } else if(y < x && y < z) {
        sortedArr.push(y);
        if(x < z) {
            sortedArr.push(x);
            sortedArr.push(z);
        } else {
            sortedArr.push(z);
            sortedArr.push(x);
        }
    } else {
        sortedArr.push(z);
        if(x < y) {
            sortedArr.push(x);
            sortedArr.push(y);
        } else {
            sortedArr.push(y);
            sortedArr.push(x);
        }
    }
    sortedStr = sortedArr.join(',');
    return(sortedStr);
}

function findLargest5(a,b,c,d,e) {
    let arrayOfNums = [a,b,c,d,e];
    let largestNumber = arrayOfNums[0];
    for(let i=1; i < arrayOfNums.length; i++) {
        if(largestNumber < arrayOfNums[i]) {
            largestNumber = arrayOfNums[i];
        }
    }
    return(largestNumber);
}

function iterateSign() {
    for(let i=0; i <= 15; i++) {
        if(i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

function getGrades() {
    let mark = 0;
    for(i = 0; i < students.length; i++) {
        mark = students[i].mark;
        if(mark <= 100 && mark >= 90) {
            students[i].grade = 'A';
        } else if(mark < 90 && mark >= 80) {
            students[i].grade = 'B';
        } else if(mark < 80 && mark >= 70) {
            students[i].grade = 'C';
        } else if(mark < 70 && mark >= 60) {
            students[i].grade = 'D';
        } else {
            students[i].grade = 'F';
        }
    }
    console.log(students);
}

function fizzBuzz() {
    let fBStr;
    for(let i=0; i <= 100; i++) {
        fBStr = '';
        if(i % 3 === 0) {
            fBStr = fBStr.concat("Fizz");
        } 
        if(i % 5 === 0) {
            fBStr = fBStr.concat('Buzz');
        }
        console.log(`${i} ${fBStr}`);
    }
}

function findHappyNums() {
    let happyArray = []; //array of happy numbers
    let tempArray = []; //temp array used in loop to check for repeating numbers 
    let numLength = 0; //number of digits in number we are checking
    let loopBool; //boolean to either stay in loop or leave
    let checkNum; //variable for the number we are checking
    let square = 1; //variable for square of number
    let squareSum = 0; //variable for sum of squares of all digits
    
    //for loop which will check each number starting from 1 until we find 5 happy numbers
    for(i=1; happyArray.length < 5; i++) {
       checkNum = i;
       loopBool = true;
       tempArray = [];
       console.log(`checking ${i}`);
       //while loop to iterate through sum of squares of digits until either we find happy num or repeating pattern
       while(loopBool) {
         tempArray.push(checkNum);
         numLength = Number(String(checkNum).length);
         squareSum = 0;
         //for loop to get sum of squares of the number
         for(let i=0; i < numLength; i++) {
            square = Number(String(checkNum)[i]);
            square *= square;
            squareSum += square;
         }
         if(squareSum === 1) { //if sum of squares is 1 then we found a happy number!
            console.log(`${i} is a happy number!`);
            happyArray.push(i);
            loopBool = false;
         } else if(tempArray.indexOf(squareSum) === -1) { //if the number was not one of the previous numbers checked, iterate again with new sum of squares
            checkNum = squareSum;
         } else { //if sum of squares was previously checked we have a repeating pattern and can exit the loop
            console.log(`${i} is not a happy number`); 
            loopBool = false;
         }   
       }
    }
    return(happyArray); //return the array of the first 5 happy numbers
}

function drawPattern() {
    for(let i=1; i < 6; i++) {
        let counter = i;
        let prntStr = '';
        while(counter > 0) {
            prntStr += '*';
            counter--;
        }
        console.log(prntStr);
    }
}


//1 console.log(findLarger(3,9));
//2 console.log(`Output: The sign is ${findSign(-9,1,2)}`);
//3 console.log(`Output: ${sortNumbers(23,7,7)}`);
//4 console.log(`Output: ${findLargest5(400,2,33,76,10234)}`);
//5 iterateSign();

const students = [
    {name: "David",
     mark: 80,
     grade: ''
    },
    {name: "Vinoth",
     mark: 77,
     grade: ''
    },
    {name: "Divya",
       mark: 88,
       grade: ''
    },
    {name: "Ishitha",
       mark: 95,
       grade: ''
    },
    {name: "Thomas",
       mark: 68,
       grade: ''
    }
]

//6 getGrades();
//7 fizzBuzz();
//8 console.log(findHappyNums());
//10 drawPattern();
