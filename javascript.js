function display(message) {
    document.write(message);
}

function classVObject() {
    class MyCar {
        color = "red";
        year = 2024;
    }
    
    const myCar {
        color = "red";
        year = 2024;
    }
}

display(MyCar);
display(myCar);


function createObjectFromClass() {
    const myCar = new MyCar();
    display(myCar);
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

function submitForm(event) {
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Submitting for " + email + " ...");
    setTimeout(serverResponse, 5000);
}

function serverResponse() {
   display("Form was successfully processed.");
}

function displayObject() {
    const myCar = { color: "red", year: 2024 };
    const result = JSON.stringify(myCar);
    display(result);
}

// class MyCar {
//     color = "red";
//     year = 2024;
// }

// const myCar {
//     color = "red";
//     year = 2024;
// }



