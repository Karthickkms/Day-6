alert("I'm invoked!");



alert("I'm JavaScript!");
alert('Hello') 
// this line is not having semicolon
alert(`World`)
alert(3 +1+ 2);
 // this is multiple line code and its working


let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin );


let sname=10.5; 
sname = "Guvi";
lname = "geek"
let name = sname+lname;
alert( name );

let a = prompt (1);
let b = prompt(2);
alert(a + b);


var zen = 2 > 12;
if (zen) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}
// // a should be changed string to number


let y = prompt(12 + 12);
//Don't modify any code below this
if (y) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
// // a should be changed string to number


let value = 4;
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// value should be change



let login = 'Employee';
let message = (login == 'Employee');
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : ",";
console.log(message);

if (null || 2 || undefined )
{
      console.log("welcome boss");
}
else
{
      console.log("Go Away");
}
  
// 


let x = prompt("First number?",);
let l = prompt("Second number?",);
a=parseInt(x);
l=parseInt(l);
alert(x + l);


//



var p = "2" > "12";
// the string will compare the character by character...\par
// first part is "2" and 2nd part is "1" so"2" is bigger and will not check others.
if (p){
      console.log("Code is Blasted")
    }
    else
    {
      console.log("Diffused");
    }

//     Change the code to print 1 to 10 in 4 lines

for(let i=1;i<=10;i++){
      console.log(i)
}


// Write a code to print the numbers in the array

// Output: 1234567891011

var Arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var string = "";
 
for (var i = 0; i < Arr.length; i++) {
 string += Arr[i] ;
}
console.log(string);




// Write a code to print the numbers in the array
// Output: 1,2,3,4,5,6,7,8,9,10,11

var num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var str = [];
 
for (var i = 0; i < num.length; i++) {
 str.push(num[i]);
}
console.log(str.join());


// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
// Output: 11 10 9 8 7 6 5 4 3 2 1

var newStr = "";
 
for (var i = newStr.length-1; i >= 0; i-- ) {
 newStr += newNum[i] + " "
}
console.log(newStr.trim());


// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var newNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <newNum.length; i++) {
 if(newNum[i] %2 == 0 )
 {
 newNum[i]="even";
 }
}
console.log(newNum);


// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var nNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <nNum.length; i++) {
 if(nNum[i] %2 == 0 )
 {
 nNum[i]="even";
 }
}
console.log(nNum);



// Write a code to add all the numbers in the array
// Output: 66

var nNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var calc=0;
for (var i = 0; i <=10; i++) {
 
 calc += nNum[i]
}
console.log(calc);


// Write a code to add the even numbers only
// Output: 30


var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0){
 sum += numsArr[i];
 }
}
console.log(sum);




// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30


var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)
 {
 sum_odd += inner_array[j];
 }
 else
 {
 sum_even += inner_array[j];
 }
}
}
console.log(sum_odd);
console.log(sum_even);


// Write a code to print elements in the inner arrays
// Output: 1234567891011



var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
     str_all +=inner_array[j];
 }
}
console.log(str_all);



// Fix the code to give the below output:
// Swap the odd and even digits

let inp = data=>{
      var val1=data;
      var val2="";
     for(var i=0;i<val1.length-1;i++){
      
      var s=val1[i+1];
      var b=val1[i];
      val2+=s
      val2+=b
      i=i+1
     }
     if((val1.length%2)!=0){
      val2+=val1[val1.length-1]
     }
     console.log(val2);
     }
     inp("1234");


     // // Fix the code to give the below output:
// Expected Output:
// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}

var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[];
var new_object={};
while(array.length!=0){
  final.push(new_object)

 var outer_remove = array.shift();
 
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0];
 var red =inner_remove[1];
 new_object[key]=red;
 
 }
final.push(new_object)
 
}
console.log(final)


// Fix the code to give the below output:
// Sum of odd numbers in an array
// Code:


var vl=[12,34,5,6,2,56,6,2,1];
var ov=vl.reduce(function(nuu,sur){
 if(sur%2!=0)
 {
 return nuu+sur;
 }
 return nuu;
},0);
console.log(ov);


// Fix the code to remove duplicates.
var res = function(arr){
      var newArr = [];
     for(var i=0; i < arr.length; i++){
     
     if(newArr.indexOf(arr[i]) == -1) {
     newArr.push(arr[i]);
     } }
     console.log(newArr);
    }
    res(["guvi","geek","guvi","duplicate","geek"])


    // Fix the code to remove duplicates.
var res = function(arr){
      var newArr = [];
     for(var i=0; i < arr.length; i++){
     
     if(newArr.indexOf(arr[i]) == -1) {
     newArr.push(arr[i]);
     } }
     console.log(newArr);
    }
    res(["guvi","geek","guvi","duplicate","geek"])



    var arr = ["guvi","geek", "zen", "fullstack"];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i].toUpperCase());
 }
})(arr);