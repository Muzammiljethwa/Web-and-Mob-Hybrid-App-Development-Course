// ------------------------ Chp 21 to 25 ------------------------------------

// Question # 1
first_name = prompt("Enter your First Name:");
last_name = prompt("Enter your last Name:");
fullName = first_name+" "+last_name;
alert("----Question 1-----"+"\n"+"Helow "+fullName);

// Question # 2
fav_m = prompt("Enter your favorite Mobile Name:");
alert("----Question 2-----"+"\n"+"Your favourite mobile is: "+fav_m+"\n"+"Length of String: "+fav_m.length);

// Question # 3
var a = "Pakistani";
var index = a.indexOf("n");
alert("----Question 3-----"+"\n"+"String: "+a+"\n"+"Index of 'n' : "+index);

// Question # 4
var a = "Hello World";
var LastIndex = a.lastIndexOf("l");
alert("----Question 4-----"+"\n"+"String: "+a+"\n"+"Last ndex of 'l' : "+LastIndex);

// Question # 5
var a = 'Pakistani'
index = a[3]
alert("----Question 5-----"+"\n"+"String: "+a+"\n"+"Character at index 3 : "+index);

// Question # 6
first_n = prompt("Enter your First Name:");
last_n = prompt("Enter your last Name:");
fullName = first_n.concat(last_n);
alert("----Question 6-----"+"\n"+"Helow "+fullName);

// Question # 7
var a = "Hyderabad";
var b = a.replace("Hyder","Islam");
alert("----Question 7-----"+"\n"+"City: "+a+"\n"+"After replacement: "+b);

// Question # 8
var message = 'Ali and Sami are best friends. They play cricket and football together.';
var b = message.replace(/and/g,"&");
alert("----Question 8-----"+"\n"+"Old Text: "+message+"\n"+"After replacement: "+b);

// Question # 9
var a = "472";
var at = typeof(a);
var c = +a;
var ct = typeof(c);
alert("----Question 9-----"+"\n"+"Value: "+a+'\n'+"Type: "+at+"\n"+"Value: "+c+'\n'+"Type: "+ct);

// Question # 10
var str = prompt("Enter string: ");
var ustr = str.toUpperCase();
alert("----Question 10-----"+"\n"+"User Input: "+str+"\n"+"Uppercase: "+ustr);

// Question # 11
var str = prompt("Enter string: ");
var ustr = str[0].toUpperCase()+str.slice(1);                          //RTCPeerConnectionIceErrorEvent();
alert("----Question 10-----"+"\n"+"User Input: "+str+"\n"+"Uppercase: "+ustr);

//  Question # 12
var num = 35.36 ;
var num2 = ""+num;
var str = num2.replace(".","");
alert("----Question 12-----"+"\n"+"Number: "+num+'\n'+"Result: "+str);

// Question # 13
var str = prompt("Enter string: ");
for (let i=0; i<str.length ; i++){
    if (str[i] === "@"){
        alert("Please enter a valid user name.");
    }
    else if (str[i] === ","){
        alert("Please enter a valid user name.");
    }
    else if (str[i] === "."){
        alert("Please enter a valid user name.");
    }
    else if (str[i] === "!"){
        alert("Please enter a valid user name.");
    }
}

// Question # 14
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var name = prompt("Enter: ");
var b;
b = name.toLowerCase();
if(b==A[0]){
    alert(name+" is available at index 0 in our bakery.");
}
else if(b==A[1]){
    alert(name+" is available at index 1 in our bakery.");
}
else if(b==A[2]){
    alert(name+" is available at index 2 in our bakery.");
}
else if(b==A[3]){
    alert(name+" is available at index 3 in our bakery.");
}
else if(b==A[4]){
    alert(name+" is available at index 4 in our bakery.");
}
else{
    alert("We are sorry "+name+" is not available in our bakery.");
}


// Question # 15
var str = prompt("Enter password: ");
if (str.length<6){
    alert("Please enter a valid answer.")
}
if (typeof(+str[0]) == "number"){
    alert("Password cannot begin with a anumber.")
}

// Question # 16
var university = 'University of Karachi';
var str = university.split(" ");
for (let i=0; i<university.length; i++){
    document.write(university[i]+"<br>");
}

// Question # 17
var str = prompt("Enter String: ");
var endStr = str[str.length-1];
alert("----Question 17-----"+"\n"+"Input: "+str+"\n"+"Last character of input : "+endStr);

// Question # 18
var tex = "The quick brown fox jumps over the lazydog";
var tex2 = tex.split(" ");
let count = 0;
for(let i=0; i<tex2.length ; i++){
    if(tex2[i].toLowerCase() == "the"){
        count = count+1;
    }
}
alert("----Question 18-----"+"\n"+"Text: "+tex+"\n"+"There are "+count+" occurance(s) of word 'the' ");



// ------------------------ Chp 26 to 30 ------------------------------------

// Question # 1
var num = prompt("Enter Postive Integer: ")
if (num<0){alert("Please Enter Positive Integer.")}
document.write("Number: "+num+"<br>");
document.write("Round Off Value: "+Math.round(num)+"<br>");
document.write("Floor Value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num)+"<br>");

// Question # 2
var num = prompt("Enter Negative Integer: ")
if (num>0){alert("Please Negative Positive Integer.")}
document.write("Number: "+num+"<br>");
document.write("Round Off Value: "+Math.round(num)+"<br>");
document.write("Floor Value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num)+"<br>");

// Question # 3
var num = prompt("Enter Number: ");
if (num<0){alert("Aboslute Number of "+num+" is "+num*-1)}
else if (num>=0){alert("Aboslute Number of "+num+" is "+num)}

// Question # 4
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6);
var numberOfStars = Math.ceil(improvedNum);
alert("Random dice value: "+numberOfStars)

// Question 5
var ran = Math.random();
var HorT = ran*2;
var imp = Math.ceil(HorT);
if(imp==1){alert("Random Coin Value: Tails")}
else if(imp==2){alert("Random Coin Value: Heads")}

// Question # 6
var ran = Math.random();
var num = ran*100;
var imp = Math.ceil(num);
alert("Random number between 1 & 100: "+imp);

// Question # 7
var str = prompt("Enter name in kilograms: ");
var matches = str.match(/(\d+)/);
var pounds = +matches[0]*2.205;
alert("The weight of user is "+pounds+" Pounds.")


// Question # 8
var num = Math.random();
var numm = num*10;
var ex = Math.ceil(numm);
var user = prompt("Guess a Number between 1 to 10: ");
if (user==ex){alert("Well Done")}
else{alert("Try Again")}



// ------------------------ Chp 31 to 34 ------------------------------------

// Question 1
var now = new Date; alert(now);

// Question 2
var now  = new Date;
var month = now.getMonth();
var months = ["January","Feburary","March","April","May","June",
             "July","August","September","October","November","December"]
alert("Current Month: "+months[month]);

// Questiom # 3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date;
var day = now.getDay();
alert("Today is "+dayNames[day]);

// Question # 4'
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date;
var day = now.getDay();
if(dayNames[day]=="Sun" || dayNames[day] == "Sat"){alert("Its Fun day")}
else{alert("Its "+dayNames[day])}

// Question # 5
var now = new Date;
date = now.getDate();
if(date<=15){alert("First fifteen days of themonth")}
else{alert("Lastdays of the month")}

// Question # 6
var now = new Date;
milli = now.getTime()
minutes = milli/(1000*60);
alert("Current Date: "+now+"\n"+"Ellapsed milliseconds since January 1,1970: "+milli+'\n'+
"Ellapsed minutes since January 1,1970: "+minutes);


// Question # 7
var now = new Date;
hours = now.getHours();
if (hours<=12){alert("Its A.M.")}
else{alert("Its P.M.")}

// Question # 8
var laterDate = new Date(2020,11,31);
alert(laterDate)

// Question # 9
var ramadan = new Date(2020,3,24);
var now = new Date;
rmdays = ramadan.getTime();
today = now.getTime();
NumberOfDays = ((+today) - (+rmdays) )/ (1000*60*60*24) ;
alert(Math.ceil(NumberOfDays)+" days have passed since 1st Ramadan 2020.");


// Question # 10
var jan1 = new Date(2020,0,1);
var now = new Date;
var jan1m = jan1.getTime();
var nowm = now.getTime();
var sec = (+nowm)-(+jan1m)/1000;
alert("On reference Date: "+now+", "+sec+" seconds had passed since beginning of 2020.")

// Question # 11
var exact = new Date;
var now = new Date;
var h = now.getHours();
now.setHours(+h-1);
alert("Current Date: "+exact+"\n"+"1 hour ago it was "+now);

// Question # 12
var now = new Date;
var x = new Date;
xy = x.getFullYear();
x.setFullYear(+xy-100);
alert("Current Date: "+now+"\n"+"100 years back, it was "+x);

// Question # 13
var now = new Date;
var age = prompt("Enter your age: ");
n = now.getFullYear();
now.setFullYear(+n-age);
year = now.getFullYear();
alert("Your Birthday year is: "+year);

// Question # 14

var name = prompt("Enter Your Name: ");
var now = new Date;
month = now.getMonth();
var months = ["January","Feburary","March","April","May","June",
              "July","August","September","October","November","December"]
var units = Math.random();
units = +units*500;
document.write("<p>"+ "<br>"+"<h2><b>K-Electric Bill </h2></b>"+
               "Customer Name: "+"<b>"+name[0].toUpperCase()+name.slice(1)+"</b><br>"+
               "Month: "+"<b>"+months[month]+"</b><br>"+
               "Number of Units: "+"<b>"+Math.ceil(+units)+"</b><br>"+
                "Charges per Unit: "+"<b>16</b><br>"+
                "<br>"+
                "Net Amount Payable (Within Due Date): "+"<b>"+(+Math.ceil(+units)*16)+"</b><br>"+
                "Late payment surcharge: "+"<b>350</b><br>"+
                "Gross Amount Payable (After Due Date): "+"<b>"+((+Math.ceil(+units)*16)+350)+"</b><br>"+
                "</p>");

// ------------------------ Chp 35 to 38 ------------------------------------


// Question # 1
function CurrentDate(){
    var now = new Date;
    document.write("Current Date & Time: "+"<b>"+now+"<b>");
}
CurrentDate();

// Question # 2
function greeting(){
    var name = prompt("Enter Name: ");
    var last = prompt("Enter Last Name: ");
    alert("Hello, "+name+" "+last);
}
greeting();

// Question # 3
function AddNumber(){
    var name = prompt("Enter First Number: ");
    var last = prompt("Enter Second Number: ");
    return (+name)+(+last);
}
n = AddNumber();
alert(n);

// Question # 4
function calculator(num1,num2,opr){
    if(opr=="+"){return "Addition of 2 numbers is : "+(+num1)+(+num2)}
    else if(opr=="-"){return "Subtraction of 2 numbers is : "+(+num1)-(+num2)}
    else if(opr=="/"){return "Division of 2 numbers is : "+(+num1)/(+num2)}
    else if(opr=="*"){return "Multiplication of 2 numbers is : "+(+num1)*(+num2)}
    else if(opr=="%"){return "Remainder between 2 numbers is : "+(+num1)%(+num2)}
    else{return "Invalid Operator"}
}
var result = calculator(5,4,'/');
document.write(result);

// Question # 5
function square(x){
    return "Square of "+x+" is "+((+x)*(+x))
}
document.write(square(5))

// Question # 6
function factorial(num){
    var fact = 1;
    for(let i = 1; i<=num ; i++)
    {
        fact = fact * i;
    }
    return "Factorial of "+num+" is "+fact
}
document.write(factorial(5))

// Question # 7
function Count(){
    num1 = prompt("Enter Starting Numevr: ");
    num2 = prompt("Enter Ending Numevr: ");
    for(num1; num1<=num2;num1++){
        document.write("Counting: "+num1 +"<br>")
    }
}
Count();

// Question # 8
function hypotenuse(){
    base = prompt("Enter Base: ");
    perp =prompt("Enter Perpendicular: ");
    function square(num){return ((+num)*(+num))}
    base = square(base);
    perp = square(perp);
    return "Hypotenuse is : "+(Math.sqrt((+base)+(+perp))).toFixed(2)
}
document.write(hypotenuse())

// Question # 9
function area_as_variable(){
    h = prompt("Enter Height: ");
    w = prompt("Enter Width: ");
    return "Area of rectangle is : "+((+h)*(+w))+"<br>"
}
function area_as_value(h,w){return "Area of rectangle is : "+((+h)*(+w))+"<br>"}
document.write(area_as_value(2,2)+area_as_variable())

// Question # 10
function check_palindrome(str){
    var p="";
    for(i= ((+str.length)+1) ; i>=0; i--){
        p = p+str[i];
    }
    pe = p.replace(/undefined/g,"")

    if (pe==str){var res = str + " and " + pe +" is palindrome."}
    else{var res = str + " and " + pe +" is not palindrome."}
    return res
}
document.write(check_palindrome("madam"))

// Question # 11
function FirstUpper(str){
    var str2 = str.split(' ');
    var p = " ";
    for (let i=0; i<str2.length; i++){
        var str3 = str2[i][0].toUpperCase()+str2[i].slice(1);
        p = p+str3+" ";
    }
    return p
}
document.write(FirstUpper("my name is muzammil"));

// Question # 12
function longest(str){
    var str2 = str.split(' ');
    for (let i=0; i<(str2.length-1); i++){
        if (str2[i].length>str2[i+1].length){re = str2[i]}
        else { re = str2[i+1]}
    }
    return re
}
alert(longest("long longest longer"))

// Question # 13
function FindNumberOfLetter(str,letter){
    var str1 = str.toLowerCase();
    var str2 = str1.split('');
    var count = 0;
    for (let i = 0 ; i<=str2.length ; i++){
        if (str2[i]==letter){ count = count+1 }
    }
    return "Most repeated '"+letter+"' in '"+str+ "' are "+count
}
document.write(FindNumberOfLetter("long longest longer","l"));

// Question # 14
function calcCircumference(radius){
    return "Circumference of circle: "+ (2*(Math.PI)*(+radius)).toFixed(2)+"<br>"
}
function calcArea(radius){
    return "Area of circle: " +((Math.PI)*(+radius)*(+radius)).toFixed(2)+"<br>"
}
document.write(calcCircumference(5)+calcArea(5))