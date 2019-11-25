// JS tutorial のコード練習

// Prompt
let age = prompt('How old are you?', 100);
alert('You are ${age} years old!');

// Confirm
let isBoss = confirm('Are you the boss?');
alert(iBoss);

// if
let year =prompt('when did you start learning?');
if(year===2015) alert('you are right!');

if(year==2015) {
    alert('Thats correct!');
    alert('you are so smart!');
}

let year = prompt('In which year was ECMAScript-2015?');
if(year < 2015) {
    alert('too early...');
} else if(year > 2015){
    alert('Too late');
} else {
    alert('Exactly!');
}

let accessAllowed;
let age = prompt("How old are you?", '');

if(age > 18) {
    accessAllowed = true;
}else {
    accessAllowed = false;
}

alert(accessAllowed);

let company = prompt('which company created Javascript?', '');

if(company == 'Netscape'){
    alert('Right!');
}else {
    alert('Wrong.');
}

 let officialName = prompt('What is the official name of javascript?');
 if(officialName == 'ECMAScript'){
     alert('Right!');
 }else {
     alert('You don\'t know? "ECMAScirpt!"' );
 }

 let value = prompt('Enter your number.');
 if(value > 0) {
   alert('value is ' + 1);
 }else if(value <0) {
     alert('value is ' + -1);
 }else if(value ===0) {
     alert('value is ' + 0);
 }

 let result;
 if(a+b <4) {
     result ='Below';
 }else {
     result='Over';
 }

 let result(a+b <4)? 'Below': 'Over';

 let userName = prompt('Who\'s there?', ' ');
 if(userName == 'Admin'){
     let pass = prompt('Password?', ' ');

     if(pass = 'TheMaster'){
         alert('Welcome!');
     }else if(pass==null) {
         alert('Canceled.');
     }else {
         alert('Wrong password');
     }

 }else if (userName == null) {
     alert('Canceled');
 }else {
     alert('I don\'t know you');
 }

 if(1 || 0) {
     alert('truthy!');
 }

 let hour = 9;
 if(hour < 10 | hour > 18) {
     alert('The office is closed.');
 }

 let hour = 12;
 let isWeekend = true;

 if(hour < 10 || hour > 18 || isWeekend) {
     alert('The office is closed.')
 }

 let hour = 12;
 let minute = 30;
 if(hour == 12 && minute == 30) {
     alert('Time is 12:30');
 }

 let x = 1;
 (x > 0) && alert('Greater than zero!');

 let i= 0;
 while(i <3) {
     alert(i);
     i++;
 }

 let i = 3;
 while(i){
     alert(i);
     i--;
 }

 let i = 0;
 do{
     alert(i);
     i++;
 }while(i <3);

 for(let i =0; i < 3; i++) {
     alert(i);
 }

 let a = 2 + 2;
 switch(a) {
     case 3:
         alert('Too small');
         break;
     case 4:
         alert('Exactly!');
         break;
     case 5:
         alert('Too large');
         break;
     default: 
        alert("I don't know such values");
    }

    if(browser === 'Edge'){
        alert('You\'ve got the Edge!);
    }else if (browser === 'Chrome' 
    || browser ==='Firefox'
    || browser === 'Safari' 
    || browser ==='Opera'){
       alert('OK we support these browsers too');
    }else {
       alert('We hope that this page looks ok!');
    }

    let a = +prompt('a?', '');

    switch(a) {
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3: 
            alert('2,3');
            break;
    }

    function showMessage(){
        alert('Hello everyone!');
    }

    showMessage();
    showMessage();

    function showMessage () {
        let message = 'Hello, I\'m Javascript!';
        alert('message');
    }
    showMessage();

    let userName = 'John';

    function showMessage() {
        let message = 'Hello,' + userName;
        alert('message');
    }
    showMessage();

    function showMessage(from, text) {
        alert(from + ': ' + text);
    }
    showMessage('Ann', 'Hello!');

    function sum(a, b) {
        return a + b;
    }
    let result = sum (1,2);
    alert(result);

    function checkAge(age) {
        if(age > 18) {
            return true;
        }else {
            return confirm('Got a permission from the parents?');
        }
    }
    let age = prompt('How old are you?', 18);
    if(checkAge(age)){
        alert('Access granted');
    }else {
        alert('Access denied');
    }

    function min(a, b) {
        if(a < b) {
            return a;
        } else {
            return b;
        }
    }

    function sayHi() {
        alert('Hello');
    }

   let sayHi = function() {
       alert('Hello');
   };

   function ask(question, yes, no) {
       if(confirm(question)) yes()
       else no();
   }
   function showOk() {
       alert('You agreed.');
   }
   function showCancel() {
       alert('You canceled the execution.');
   }
   ask("Do you agree?", showOk, showCancel);

   function ask(question, yes, no) {
   if(confirm(question)) yes()
   else no ();
   }
   ask(
       "Do you agree?",
       function() {alert('You agreed.');},
       function() {alert('You canceled the execution.');}
   )

   let sum =(a, b) => a+b;
   alert(sum(1,2));

   let double = n => n*2;
   alert(double(3));

   let sayHi = () => alert('Hello!');
   sayHi();

   let age = prompt('What is your age?', 18);
   let welcome = (age < 18)?
    () => alert('Hello'):
    () => alert('Greetings!');
    welcome();

    function ask(question, yes, no) {
        if(confirm(question)) yes()
        else no();
    }

    ask (
        "Do you agree?",
        () => alert('You agreed.'),
        () => alert('You canceled the execution.')
    );