let userName="MilesInada";
let email="Milesinada219@gmail.com";
let location1="Kalaheo,HI";
let thankYou="Thank you for your continued business."

let amount1=12.99;
let amount2=8.34;
let amount3=5.34;
let amount4=60.99;
let amount5=1.50;

let product1="Lamp " + amount1;
let product2="Vase " + amount2;
let product3="Soap " + amount3;
let product4="Pan " + amount4;
let product5="Sponge " + amount5;

let tax=4.16;
let shipping=16;
let cart=amount1 + amount2 + amount3 + amount4 + amount5;
let total=amount1 + amount2 + amount3 + amount4 + amount5 + tax + shipping;

let accountBalance=1200;
let remainingBalance=accountBalance - total;

document.write(`Hello <b>${userName}</b>, Today's purchase of: <b>${product1}, ${product2}, ${product3}, ${product4}, and  ${product5}</b> will come out to <mark>${cart}</mark>. With shipping and taxes your total today will be <mark>${total}</mark>. Your current balance is <i><b>${accountBalance}</b></i> bringing your account balance to <mark><b>${remainingBalance}</b></mark> a confirmation will be sent to <b>${email}</b>. Your package will arrive at <b>${location1}</b> in the next few days. <mark><b>${thankYou}</mark></b>`)