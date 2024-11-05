function display(message) {
    document.write(message);
}

function greeting () {
    display("Hello World!");
}

function myFunction(callbackFunction){
    callbackFunction();
}
function activator(){
    myFunction(greeting);
}
activator();

function dekayedGreeting () {
    setTimeout(greeting, 300);

}

function asynchronous () {
    setTimeout(greeting, 5000);
    display("Waiting for the greeting...");
}