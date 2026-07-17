<<<<<<< HEAD
const messages = [
"Happy Day",
"Good Day",
"Help Ever",
"Serve All",
"Be Positive",
"Stay Strong",
"Dream Big",
"Never Give Up",
"Keep Smiling",
"Believe in Yourself"
];

function showRandomMessage(){

let random = Math.floor(Math.random()*messages.length);

document.getElementById("message").innerHTML = messages[random];

}

=======
const messages = [
"Happy Day",
"Good Day",
"Help Ever",
"Serve All",
"Be Positive",
"Stay Strong",
"Dream Big",
"Never Give Up",
"Keep Smiling",
"Believe in Yourself"
];

function showRandomMessage(){

let random = Math.floor(Math.random()*messages.length);

document.getElementById("message").innerHTML = messages[random];

}

>>>>>>> 3022ceb41a2d86718d68ef1c1b2447bae0ea0896
window.onload = showRandomMessage;