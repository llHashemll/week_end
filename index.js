//exc_1.1
function boolean (value)
{
if (value===true )
return 'yes';
else 
return ('no');
}

console.log(boolean(false))
//--------------------------------------------------------

//exc_2.1
function sumLowest(arr)
{
    let num1=arr[0];
    let num2=arr[1];
    for (let i=1; i<arr.length; i++)
    {
        if (arr[i]<num1)
        {
            num2=num1;
            num1=arr[i];
        }
        else if (arr[i]<num2)
        {
            num2=arr[i];
        }
    }
    const sum=num1+num2;
    return sum;
}
const arr=[1,9,3,4];//output:4
console.log(sumLowest(arr));
//------------------------------------------------

//exc_2.2

/*
binary number:   1     1     1     0    0     1
power of 2:     2^5   2^4    2^3    2^2   2^1  2^0 
*/
function binToDec(arr) 
{
let res = 0;

for (let i = 0; i < arr.length; i++) {
    res = res * 2 + arr[i];
}

return res;
}

console.log(binToDec([0, 1, 0, 1])); // Output: 5

//-----------------------------------------------------------------------------


//exc_2.3

function findNextSquare(num){
    //tNN== the next new number 
        let tNN = Math.sqrt(num);
        if (num % tNN != 0) {
          return -1;
        }
        tNN++;
        return tNN * tNN;
    }
    console.log(findNextSquare(9));//output:16








//-----------------------------------------------------------------------------

/*
//exc_2.4


function findUniq(arr)
for(let i=0;i<arr.length; i++) {
    if(arr[i]==arr[0])
    continue;
    else
    return arr[i];

}
console.log(findUniq([0, 1,1, 1]));
*/
//-----------------------------------------------------------------------------


//exc_2.5
function Summation(num){
    let i,res=0;
    for(i=1;i<=num;i++){
        res=res+i;
    }
return res;
}

console.log(Summation(8));//output:36

//-----------------------------------------------------------------------------


//exc_2.6

function centuryFromYear(num) {
    if (num > 0) {
        let century = Math.ceil(num / 100);
      return century;
    }
    
}

console.log(centuryFromYear(2000)); // Output: 20
console.log(centuryFromYear(1801)); // Output: 19
console.log(centuryFromYear(1910)); // Output: 20

//-----------------------------------------------------------------------------


//exc_2.7
function basicOp(math, num1, num2) {
    switch (math) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
    }
  }
  
  console.log(basicOp("*", 5,5));//output:25
  
  //-----------------------------------------------------------------------------


//exc_3.1
function nb_year(p0,percent,aug,p)
  {

let first = p0 ;
let year=0;
while (first<=p)
{
  year++;
  first += first*percent/100+aug;
}

return ` ${year} year  ( new pepole)  ${first}`;

  }


console.log(nb_year(1000,2,50,1200));
/*H..M */
  //-----------------------------------------------------------------------------


//exc_3.2


  //-----------------------------------------------------------------------------


//exc_4.1
function fibonacciSeq(n) {
    let array = [0, 1];
    for (let i = 2; i <= n; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}

console.log(fibonacciSeq(2)); // Output: [0, 1]
console.log(fibonacciSeq(3)); // Output: [0, 1, 1]

 //-----------------------------------------------------------------------------


//exc_4.2
const Tribonacci =(signature,n)=>{
    for (i=3;i<n; i++){
        signature.push(signature[i-1]+signature[i-2]+signature[i-3]);
    }
    return signature.slice(0,n);
}

console.log(Tribonacci([0,0,1],8));


 //-----------------------------------------------------------------------------


// ex 5.1  

  function trimString(str) {
    return str.substring(1, str.length - 1);
  }

//-----------------------------------------------------------------------------



// ex 5.2 
function repeat_str(repeatNum, str) {
    let repeatStr = '';
    if (repeatNum === 0) {
        return null
    } else {
        for (i = 0 ; i < repeatNum ; i++){
            repeatStr = repeatStr + str;
        }
    }
    return repeatStr;
}

//-----------------------------------------------------------------------------


// ex 5.3



//-----------------------------------------------------------------------------


// ex 5.4

const toWeirdCase = (str) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
        newStr += str[i].toUpperCase();
      } else if (i % 2 != 0) {
        newStr += str[i].toLowerCase();
      }
    }
    return newStr;
  }


  //-----------------------------------------------------------------------------


// ex 5.5
function nameToInitials(string) {
    return string
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join(".");
  }
  
  console.log(nameToInitials("fifA WORd"));

   //-----------------------------------------------------------------------------


// ex 6.1