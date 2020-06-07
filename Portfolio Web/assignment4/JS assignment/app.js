//CHAPTER 01

// Chapter 01 - Task 01
alert("Welcome To My Site!!");

// Chapter 01 - Task 02
alert("Error! Please Enter a Valid Password", "Javascript Task");

// Chapter 01 - Task 03
alert("Welcome to JS Land..\nHappy Coding!!");

// Chapter 01 - Task 04
alert("Welcome to JS Land..");
alert("Happy Coding!!");

// Chapter 01 - Task 05
alert("Hello..I can run JS through my web browser's console");

//CHAPTER 02

// Chapter 02 - Task 01
var username;

// Chapter 02 - Task 02
var myName = "Muhammad Basit";

// Chapter 02 - Task 03
var message;
message = "Hello World"
alert(message);

// Chapter 02 - Task 04
var stdName = "Muhammad Basit";
var stdAge = "20 Years Old";
var Course = "Web & Mobile Hybrid App";
alert(stdName);
alert(stdAge);
alert(Course);

// Chapter 02 - Task 05
var food = "PIZZA";
alert(food.slice(0,5) + "\n" + food.slice(0,4) + "\n" + food.slice(0,3) + "\n" + food.slice(0,2) + "\n" + food.slice(0,1));

// Chapter 02 - Task 06
var email = "basit@gmail.com";
alert("My email address is " + email);

// Chapter 02 - Task 07
var book =  "A smarter way to learn JavaScript";
alert("I am trying to learn from a Book: " + book);

// Chapter 02 - Task 07
document.writeln("Yah! I can write HTML Content through JavaScript \n");

// Chapter 02 - Task 08
var somethin = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(somethin)

//CHAPTER 03

// Chapter 03 - Task 01
var age = 20;
alert("I am " + age + " years old");

// Chapter 03 - Task 02
var times = 19;
alert("You have visited this site " + age + " times \n");

// Chapter 03 - Task 03
var birthYear = 2000;
document.writeln("My birth year is " + birthYear + "\n") 
document.writeln("Data type of my declared variable is " + typeof(birthYear) + "\n");

// Chapter 03 - Task 04
var VName = "Muhammad Basit";
var PTitle = "T-Shirt Gray";
var Qty = 5;
document.writeln("<b>" + VName + "</b> ordered <b>" + Qty + " " + PTitle + "</b>(s) on Clothing Store \n") 

//CHAPTER 04

// Chapter 04 - Task 01
var v1, v2, v3;

// Chapter 04 - Task 02
var LegalVar, $1Name, _Name, I4Name; //Legal Names
//var alert, 4Name, 45, 5no, typeof; //Illegal Names

// Chapter 04 - Task 03
document.write("<h1>Rules for naming JS Variables</h1> \n\nVariable names can only contain alphabets, $, numbers and _. For example: $my_1stVariable\nVariables must begin with a letter, $ or _. For example $name, _name or name\nVariable names are case sensitive\nVariable names should not be JS keywords");

//CHAPTER 05

// Chapter 05 - Task 01
var no1 = 5, no2 = 10;
var res = no1 + no2;
document.writeln("Sum of" + no1 + " and " + no2 + " is " + res);

// Chapter 05 - Task 02
var no1 = 5, no2 = 10;
var res = no1 - no2;
document.writeln("Subtracition of " + no1 + " from " + no2 + " is " + res);
res = no1 * no2;
document.writeln("Multiplication of" + no1 + " and " + no2 + " is " + res);
res = no1 % no2;
document.writeln("Modulus of" + no1 + " and " + no2 + " is " + res);

// Chapter 05 - Task 03
var number;
document.writeln("Value after variable declaration is: " + number);
number = 5;
document.writeln("Initial value: " + number);
number++;
document.writeln("Value after increment is: " + number);
number = number + 7;
document.writeln("Value after addtion is: " + number);
number--;
document.writeln("Value after decrement is: " + number);
document.writeln("The remainder is: " + number % 3);

// Chapter 05 - Task 04
var cost = 600;
var priceOf5 = cost * 5;
document.writeln("Total cost to but 5 tickets to a movie is: " + priceOf5 + "PKR");

// Chapter 05 - Task 05
var mnumber = 4;
document.writeln("Table of " + mnumber);
for(i = 1; i <= 10; i++)
{
    document.writeln(mnumber + " x " + i + " = " + mnumber * i);
}

// Chapter 05 - Task 06
var CTemp = 25;
var FTemp = 70;
var ToCelsiusDegree = (FTemp - 32) * 5 / 9;
var ToFarenheitDegree = (CTemp * 9 / 5) + 32;
document.write(CTemp + " degree C is" + ToFarenheitDegree + " degree Farenheit");
document.write(FTemp + " degree F is" + ToCelsiusDegree + " degree Celsius");

// Chapter 05 - Task 07
var PI1 = 650, QI1 = 3, PI2 = 100, QI2 = 7, SCharges = 100;
var TCost = (PI1 * QI1) + (PI2 * QI2) + SCharges;
document.write("<h1>Shopping Cart</h1> \n\n Price of item 1 is " + PI1 + "\n Quantity of item 1 is " + QI1 + "\nPrice of item 2 is " + PI2 + "\n Quantity of item 2 is " + QI2 + "\n Shipping Charges " + SCharges + "\n\n Total Cost of your order is " + TCost);

// Chapter 05 - Task 08
var TMarks = 980;
var OMarks = 804;
var Percentage = (804 * 100) / TMarks;
document.write("<h1>Mark Sheet</h1>\n\n Total Marks: " + TMarks + "\n Marks Obtained: " + OMarks + "\n Percentage: " + Percentage); 

// Chapter 05 - Task 09
const dollar = 163.48;
const riyal = 43.54;
var Cdollar = 10, CRiyal = 25;
var totalCurrency = (Cdollar * dollar) + (CRiyal * riyal);
document.write("<h1>Currency in PKR</h1> \n\n Total Currency in PKR: " + totalCurrency);

// Chapter 05 - Task 10
var numberone = 5;
var result = ((5 + 5) * 10) / 2;
document.write("the result of "+ numberone +" after addin 5 multiplying with 10 and then dividing by 2 is " + result);

// Chapter 05 - Task 11
var birth = 1992, todayYear = 2020;
var age = todayYear - birth;
document.write("Your Age is " + age);

// Chapter 05 - Task 12
var radius = 20; const pi = 3.142;
var area = radius * radius * pi;
var circumferunce = 2 * radius * pi;
document.write("<h1>The Geometrizer</h1>\n\n Radius of a circle : "+ radius + "\n The Circumference is: " + circumferunce + "\n The area is: " + area);

// Chapter 05 - Task 13
var snack = "Lays";
var cage = 20;
var eage = 65;
var NofSnaks = 3;
document.write("\n You will need " + (eage - cage) * NofSnaks + " to last you until the ripe old age of " + eage);

//CHAPTER 06-09

// Chapter 6 - Task 1
var a = 10;
document.write("\n Result: \n The value of a: " + a);
document.write("\n\n The value of ++a is" + ++a);
document.write("\n Now the value of a is" + a);
document.write("\n\n The value of a++ is" + a++);
document.write("\n Now the value of a is" + a);
document.write("\n\n The value of --a is" + --a);
document.write("\n Now the value of a is" + a);
document.write("\n\n The value of a-- is" + a--);
document.write("\n Now the value of a is" + a);

// Chapter 6 - Task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("\n a is: "+ a + "\n b is: "+ b + "\n result is: "+ result);

// Chapter 6 - Task 3
var nameofuser = prompt("What is your name?");
alert("Welcome to my site, "+ nameofuser + "!");

// Chapter 6 - Task 5
var mnumber = prompt("Enter a number", 5);
document.writeln("Table of " + mnumber);
for(i = 1; i <= 10; i++)
{
    document.writeln(mnumber + " x " + i + " = " + mnumber * i);
}

// Chapter 6 - Task 5
var S1Name = prompt("Enter 1st Subject Name: ");
var S2Name = prompt("Enter 2nd Subject Name: ");
var S3Name = prompt("Enter 3rd Subject Name: ");
var S1Marks = 100, S2Marks = 100, S3Marks = 100;
var S1OMarks = parseInt(prompt("Enter 1st Subject Obtained Marks: "));
var S2OMarks = parseInt(prompt("Enter 2nd Subject Obtained Marks: "));
var S3OMarks = parseInt(prompt("Enter 3rd Subject Obtained Marks: "));
document.write("<table><th><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td><td>Percentage></td></th><tr><td>"+ S1Name +"</td><td>"+ S1Marks +"</td><td>"+ S1OMarks +"</td><td>"+ (S1OMarks * 100 / S1Marks) +"%</td></tr><tr><td>"+ S2Name +"</td><td>"+ S2Marks +"</td><td>"+ S2OMarks +"</td><td>"+ (S2OMarks * 100 / S2Marks) +"%</td></tr><tr><td>"+ S3Name +"</td><td>"+ S3Marks +"</td><td>"+ S3OMarks +"</td><td>"+ (S3OMarks * 100 / S3Marks) +"%</td><tr><td></td><td>"+ S1Marks+S2Marks+S3Marks+ +"</td><td>"+ S1OMarks+S2OMarks+S3OMarks +"</td><td>"+ (S1OMarks * 100 / S1Marks) + (S2OMarks * 100 / S2Marks) + (S3OMarks * 100 / S3Marks) +"%</td></tr></tr>")

//CHAPTER 09-11

// Chapter 9 - Task 1
var city = prompt("Enter City Name: ");
if (city === "Karachi")
{
    alert("Welcome to the city of Lights!");
}

// Chapter 9 - Task 2
var gend = prompt("Enter Gender: ");
if (gend === "male")
{
    alert("Good Morning Sir!");
}
else if (gend === "female")
{
    alert("Good Morning Madam!");
}

// Chapter 9 - Task 3
var color = prompt("Enter Light color: ");
if (color === "red")
{
    alert("Must Stop!");
}
else if (color === "yellow")
{
    alert("Ready to move!");
}
else if (color === "green")
{
    alert("Move now!");
}

// Chapter 9 - Task 4
var fuel = parseFloat(prompt("Enter remaining fuel (in litres): "));
if (fuel <= 0.25)
{
    alert("Please refill the fuel in your car!");
}

// Chapter 9 - Task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat");
}

// Chapter 9 - Task 6
var marks1 = parseInt(prompt("First sub. marks: "));
var marks2 = parseInt(prompt("Second sub. marks: "));
var marks3 = parseInt(prompt("Third sub. marks: "));
var tmar = marks1 + marks2 + marks3
var perc = tmar * 100 / 300;
var grade = "fail";
var remarks = "Sorry";
if(perc >= 80)
{
    grade = "A-one";
    remarks = "Excellent";
}
else if(perc >= 70)
{
    grade = "A";
    remarks = "Good";
}
else if(perc >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}
document.write("\n <h1>Marks Sheet</h1> \n\n Total Marks :  300 \n Marks Obt. " + tmar + "\n Percentage: " + perc + "\n Grade: "+ grade + "\n Remarks: " + remarks);

// Chapter 9 - Task 7
var randno = Math.random(1,10);
var guessed = parseInt(prompt("Guess the number: "));
if (randno == guessed)
{
    alert("Bingo! Correct Answer");
}
else if(guessed == --randno)
{
    alert("So Close!");
}

// Chapter 9 - Task 8
var gno = parseInt(prompt("Enter number: "));
if( (gno % 3) == 0)
{
    alert("It is divisible by 3")
}
else
{
    alert("It is not divisible by 3")
}

// Chapter 9 - Task 9
var gino = parseInt(prompt("Enter number: "));
if( (gino % 2) == 0)
{
    alert("It is even")
}
else
{
    alert("It is odd")
}

// Chapter 9 - Task 10
var gtemp = parseInt(prompt("Enter temperature: "));
if( gtemp > 40)
{
    alert("Today's weather is so Cool")
}
else if( gtemp > 30)
{
    alert("The weather is normal")

}
else if( gtemp > 20)
{
    alert("Today's weather is so Cool")    
}
else if( gtemp > 10)
{
    alert("OMG! Today's weather is so Cool")
}

// Chapter 9 - Task 11
var Fno = parseInt(prompt("Enter first Number: "));
var Sno = parseInt(prompt("Enter second Number: "));
var res;
var operation = prompt("Enter operation:")
if(operation == "+")
{
    res = Fno + Sno;
}
else if(operation == "-")
{
    res = Fno - Sno;
}
else if(operation == "*")
{
    res = Fno * Sno;
}
else if(operation == "/")
{
    res = Fno / Sno;
}
else
{
    res = "Wrong operation";
}
document.write("Result is " + res);

//CHAPTER 12-13

// Chapter 12 - Task 2
var no01 = parseInt(prompt("Enter 1st no: "));
var no02 = parseInt(prompt("Enter 2nd no: "));
if (no01 > no02)
{
    alert("1st is bigger");
}
else if (no01 == no02)
{
    alert("both are equal");
}
else
{
    alert("2nd is bigger");

}

// Chapter 12 - Task 3
var chkno = parseInt(prompt("Enter no: "));
if (chkno > 0)
{
    alert("it is psotive");
}
else if (chkno == 0)
{
    alert("it is zero");
}
else
{
    alert("it is negative");

}
