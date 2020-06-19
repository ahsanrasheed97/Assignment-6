//=======Chap 21 to 25

//task 1

// var name1 = prompt("Enter your First  Number")

// var name2 = prompt("E nter your Last name")

// document.write(name1+ " " + name2)

//task 2

// var str = prompt("Enter Mobile Model");

// var n = str.length;

// document.write(n)

//task 3

// var str = "Pakistani";
// var n = str.indexOf("n");
// document.write(n+"Is index of n in Pakistan");


// task 4

// var str = "Hello World";
// var n = str.lastIndexOf("l");
// document.write(n)

//task 5

// var str ="Pakistani";
// // var n = str[1];

// var res = str.charAt(3)

// document.write(res)

//task 6

// var str1 = "Hello ";
// var str2 = "world!";
// var str3 = " Have a nice day!";
// var res = str1.concat(str2, str3);

// document.write(res)


//task 7

// var city1 ="Hyderabad"

// // var city2 ="Hyderabad"

// // var n = city1.slice(0,5)

// var m = city1.replace(/Hyder/g ,"Islam");

// document.write(m);


//task 8


// var m = " Ali and Sami are best friends. They play cricket and football together"


// var n = m.replace("and","&");


// document.write(n)



//task 9

// var text = '42px';
// var integer = parseInt(text, 10);


// document.write(" value = " +text )
// document.write(" <br> type = String"  )

// document.write(" <br> value = " +integer )

// document.write(" <br> type = Number "  )


//task 10

// var n = prompt("Enter ANy text To Convert in upper case")

// var m = n.toUpperCase()

// document.write(m)



//task 11

// var n = prompt("Enter ANy text to convert in lower case")

// var m = n.toLowerCase()

// document.write(m)



// task 12

// var num = 35.36;

// alert((num + '').replace('.', ''));


// task 13

// var name = prompt("Enter name");

// var letters = /[0-9a-zA-Z ! , . @]/;
// if(name.match(letters))
// {
// alert('Your registration number have accepted : you can try another');


// }
// else
// {
// alert('Please input alphanumeric characters only');

// }







//task 14


//  var a = ["cake", "apple pie","cookie", "chips"," patties"];



//  if(fruits.indexOf("cake") !== -1){
//     alert("Value exists!")
// } else if(fruits.indexOf("apple pie") !== -1) {
//     alert("Value does not exists!")
// }


// else if(fruits.indexOf("cookie") !== -1) {
//     alert("Value does not exists!")
// }



//task 15
// var name = prompt("Enter name");

// var letters = /^[0-9a-zA-Z]+$/;
// if(name.match(letters))
// {
// alert('Your registration number have accepted : you can try another');


// }
// else
// {
// alert('Please input alphanumeric characters only');

// }



//task 16
// var n = " University of karachi ";

// var m =[];

// for(var i = 0;i<n.length;i++)
// {
//     console.log(m[i]=n[i]);
    
// }


//task 17

// var n =prompt("Enter any single word ")

// var res = n.charAt(n.length-1);
// document.write(res)


//task 18

// var m = "the quick brown fox jumps over the lazy dog";


// //var r = "Geeks For Geeks "; 
//   alert((m.match(/the/g)).length); 



//=====Chap 26-30


//task 1

// var m = +prompt("Enter Number")

// document.write("Number =" +m)


// var n =Math.round(m)
// document.write(" <br> Round off value =" +n)


// var o =Math.floor(m)
// document.write(" <br> floor value =" +o)


// var p =Math.ceil(m)
// document.write(" <br> Ceil value =" +p)



//task 2

// var m = +prompt("Enter Number")

// document.write("Number =" +m)


// var n =Math.round(m)
// document.write(" <br> Round off value =" +n)


// var o =Math.floor(m)
// document.write(" <br> floor value =" +o)


// var p =Math.ceil(m)
// document.write(" <br> Ceil value =" +p)


//task 3

// var m = +prompt("Enter Number")

//  document.write("Number =" +m)


//  var n =Math.abs(m)

//  document.write("<br>Absolute =" +n)


//task 4

//  var m = +prompt("Enter Number")

//   document.write("Define Range for your random digit = " +m)


//   var n =(Math.random()*+m)

//   document.write("<br>Random Between 0-99 = " +n)


//task 5

//  var m = +prompt("Enter Number 1 for head and 0 for Tail")

//  var a = 1;
//  var b = 0;



//   var n =(Math.random()*+2)
//   document.write("Result is = "+n)

//   if(n<a)
//   {
//       alert("Its Tails 0 ")
//   }

//   else
//   {
//       alert("Its Head 1")
//   }

  
//task 6

//  var m = +prompt("Enter Number")

//   document.write("You select  = " +m)


//   var n =(Math.random()*101)

//   document.write("<br>result is = " +n)


//task 7

//  var m = prompt("Enter Number")

//  n = parseInt(m)


//   document.write("You select  = " +n)


//task 8


// var a = +prompt("Enter any Number 1-100")

// var b = 67

// if(a===b)
// {
// alert("Yahoo You win")

// }

// else 
// {
// alert("Sorry You Loose")

// }



//=====Chap 31-34


//task 1

// var d = new Date()

// document.write(d)


//task 2


// var d = new Date();

// var n = d.getMonth();

// if(n===0)
// {

//     alert("Jan")
// }

// else if(n===1){

//     alert("Feb")
// }
// else if(n===2){

//     alert("Mar")
// }

// else if(n===3){

//     alert("Apr")
// }
// else if(n===4){

//     alert("May")
// }
// else if(n===5){

//     alert("June")
// }
// else if(n===6){

//     alert("July")
// }

// else if(n===7){

//     alert("August")
// }

// else if(n===8){

//     alert("Sept")
// }

// else if(n===9){

//     alert("October")
// }

// else if(n===10){

//     alert("Nov")
// }

// else if(n===11){

//     alert("Dec")
// }

// document.write("This is current monoth " +n);

//task 3

// var d = new Date();

// var n = d.getDay();

// if(n===0)
// {
//     alert("Sunday Funday")
// }

// else if(n===1)
// {
//     alert("Mon")
// }
// else if(n===2)
// {
//     alert("Tue")
// }
// else if(n===3)
// {
//     alert("Wed")
// }

// else if(n===4)
// {
//     alert("Thur")
// }
// else if(n===5)
// {
//     alert("Fri")
// }

// else if(n===6)
// {
//     alert("Sat")
// }
// document.write("This is current Date " +n);


//task 4


// var d = new Date();

// var n = d.getDay();

// if(n===0)
// {
//     alert("Its Sunday Funday")
// }

// else if(n===1)
// {
//     alert("Mon")
// }
// else if(n===2)
// {
//     alert("Tue")
// }
// else if(n===3)
// {
//     alert("Wed")
// }

// else if(n===4)
// {
//     alert("Thur")
// }
// else if(n===5)
// {
//     alert("Fri")
// }

// else if(n===6)
// {
//     alert("Its Sat Fun Day")
// }
// document.write("This is current Date " +n);


//task 5
//  var d = new Date();

//  var n = d.getDate();
//  if(n>15)
//  {
//      alert("last days of month")
//  }

//  else 
//  {
//      alert("First days of month");
//  }
//  document.write(n)


//task 6

//   var d = new Date();

//   var n = d.getMinutes();
 
//   var m = d.getMilliseconds();
//   document.write("This is current time in miin " +n);
//   document.write("<br>This is current time in mmilisec " +m);


//task 7

// var hours = new Date().getHours();
//     var hours = (hours+24)%24; 
//     var mid='am';
//     if(hours==0){ 
//     hours=12;
//     }
//     else if(hours>12)
//     {
//     hours=hours%12;
//     mid='pm';
//     }
//     alert ('Paksitan time: ' + hours + mid);


//task 8
// var date = new Date()
// var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

// document.write(lastDay);

//task 9

// var date = new Date()
// var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

// document.write(firstDay);

//task 10

// var date0 = new Date(2015, 0, 1); // 1 Jan 2015
// var date1 = new Date(); // 1 Feb 2015

// var numberOfDays = Math.ceil((date1 - date0));
// document.write(numberOfDays);

//task 11

// var m = new Date();

// document.write(m);

// var n = m.getHours()+1
// document.write("<br> This the increase of one hour "+n);


//task 12

//  var m = new Date();

// document.write(m);

// var n = m.getFullYear()-100;

// document.write("<br> This is the 100 back year "+n);


//task 13


// var dob = new Date("November 10,1997");
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime();
// var diff = todaymili -dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12));
//  document.write("<br>Birth year is "+dob+ "<br>Age is "+accuage);


//task 14

// var m = "ABC Customer";

// var mon = " Febuary";

// var unit = '410';

// var charges = '16';

// var late = '350';
// document.write("K-Electric Bill " );
// document.write("<br>Customer Name = " +m);
// document.write("<br>Month = " +mon);
// document.write("<br>Numbers of unit = " +unit);
// document.write("<br>Charges per unit = " +charges);
// document.write("<br>Net payable within due date = ", +unit*charges);
// document.write("<br> Late payment Charges = " +late);
// document.write("<br> Net payable after due date = ", +unit*charges + +late);



//======Chap 35-38


//task 1

// function func(){
//   date = new Date;
//   alert(date)
//     return date; 
// }
// func();

//task 2


// function func(m,n)
// {
     
//       var m = prompt("Enter 1 name ");
//       var n = prompt("Enter 2nd name");
//       document.write(m+ " "+n)
//         return m,n ; 
        
//     }
//     func();
   
    
//task 3

//  function func(m,n)
// {
     
//       var m = +prompt("Enter 1 name ");
//       var n = +prompt("Enter 2nd name");
//       document.write(m + n)
//         return m,n ; 
        
//     }
//     func();

   //task 4



//     function func(m,opr,n)
// {
     
//       var m = +prompt("Enter 1 name ");
      
//       var opr = prompt("Enetr operator");
//       var n = +prompt("Enter 2nd name");
// if(opr==="+")
// {
//     return m + n;
// }

// else if(opr==="-")
// {
//     return m - n;
// }
// else if(opr==="*")
// {
//     return m * n;
// }

// else if(opr==="/")
// {
//     return m / n;
// }

// else{
//     return "incorrect operator"
// }

     
// }
// func();
// var result = func() ;
// document.write(result);
     
//task 5

//  function func(m)
// {
     
//       var m = +prompt("Enter 1 name ");
     
//       document.write(m * 2)
//         return m ; 
        
//     }
     
//     func();
//     document.write(m)
   

//task 6

  

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);


//task 7


// function count(m)
// {
//    var  m=+prompt("Enter num");
//    var n=+prompt("How much count u need");

//    for(var i=m;i<=n;i++)
//    {
//        document.write("<br>"+i)
//    }

// }

// count()

//task 8

// function count(h,b,p){
//     var h=+ prompt("Enter hypo")
//     var b = +prompt("Enter base")
//     var p = +prompt("Enter perpendicular")

//     h = h*2;
//     h= b*2 + p*2

//     alert(h)


// }

// count()


//task 9


// function count(w,h){
    
//   var a;

   
//     a= w  * h

//     alert(a)


// }

// count(3,7)


//task 10



// function check_Palindrome(str_entry){
  
//       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//       var ccount = 0;

//       if(cstr==="") {
//          console.log("Nothing found!");
//          return false;
//       }

//       if ((cstr.length) % 2 === 0) {
//          ccount = (cstr.length) / 2;
//       } else {
  
//          if (cstr.length === 1) {
//             console.log("Entry is a palindrome.");
//             return true;
//          } else {

//             ccount = (cstr.length - 1) / 2;
//          }
//       }
   
//       for (var x = 0; x < ccount; x++) {
   
//          if (cstr[x] != cstr.slice(-1-x)[0]) {
//             console.log("Entry is not a palindrome.");
//             return false;
//          }
//       }
//       console.log("The entry is a palindrome.");
//       return true;
//    }
//    check_Palindrome('madam');
//    check_Palindrome('nurses run');
//    check_Palindrome('fox')

//task 11

// var m;
// function capital_letter(m) 
// {var m = prompt("Enter string")
//     m = m.split(" ");

//     for (var i = 0, x = m.length; i < x; i++) {
//         m[i] = m[i][0].toUpperCase() + m[i].substr(1);
//         alert(m)
//     }

//     return m.join(" ");
    
// }

// capital_letter();

//task 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));


//task 13

// var temp = " 'JSResourceS.com'";
// var count = (temp.match(/o/g) || []).length;

// alert(count);


