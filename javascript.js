//Display message
function display(message) {
    document.write(message);
}


//Class v. object
// function classVObject() {
//         class MyCar {
//             color = "red";
//             year = 2024;
//         }
    
//     const myCar {color = "red", year = 2024}
// }

// display(MyCar);
// display(myCar);

//Create object fron class
// const myCar = new MyCar();
// const myCar2 = new MyCar();
// const myCar3 = new MyCar();

// myCar2.color = "white";
// myCar3.year = 2025;
        
function newObject() {
const myCar = new MyCar();
const myCar2 = new MyCar();
const myCar3 = new MyCar();
display(JSON.strigify(myCar));
display(JSON.strigify(myCar2));
display(JSON.strigify(myCar3));
}


//Callback function
function myFunction(callbackFunction) {
    callbackFunction();
}

//Activator functions
function greeting () {
    display("Hello World!");
}

function activator() {
    myFunction(greeting);
}
activator();

function activatorTest() {
    display("Experimenting with an activator function.");
    }

    function activatorTest(myParameter){
    display(myParameter);
    }

//Aysnchronous function
function asynchronous () {
    setTimeout(greeting, 5000);
    display("Waiting for the greeting...");
}

//Promise
const results = new Promise(myFunction);
const promise = new Promise(myFunction);

function makePromise() {
    const promise = new Promise(myFunction);
    display("Make a promise.")
}

//setTimeout function
function delayedGreeting () {
    setTimeout(greeting, 300);
}

//Resolve function
function resolveFunction(resolve) {
    setTimeout(serverResponse, 5000);
    display("Inside my myFunction.");
}

function madePromise() {
    const promise = new Promise(resolveFunction);
    display("Made a promise.")
}

function serverResponse2() {
   display("Your information has been processed successfully.");
   resolve();
}

//Nested function 
function outerFunction () {
    const message = "Hello world!";
    innerFunction();

    function innerFunction () {
        display(message);
    }
}

//Nested resolve function
function serverResolve(resolve) {
    setTimeout(nestedServerResponse, 5000);
    display("Inside serverResolve.");
                        
        function nestedServerResponse() {
        display("Form was successfully processed.");
            resolve("The promise is fulfilled.");
        }
    }

function serverResponsePromise() {
    const promise = new Promise(serverResolve);
     promise.then(getMessage);
     display("Made a promise.");
}

function getMessage(resolveValue) {
    display(resolveValue);
}

//Form processing message
function submitForm(event) {
    const inputs = event.target;
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Submitting for " + email + "...");
    setTimeout(serverResponse, 5000);
}

//Stringify
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

//New object from class
// function newObject() {
//     const myCar = new MyCar();
//     const myCar2 = new MyCar();
//     const myCar3 = new MyCar();
//     display(JSON.strigify (myCar));
//     display(JSON.strigify (myCar2));
//     display(JSON.strigify (myCar3));
// }

//Submit handler
// function handleSubmit (event) {
//     event. preventDefault;
//     const inputs = event. target;
//     const emailInput = inputs[0];
//     const email = emailInput.value;
//     display ("Submitting form for " + email +"...");
//     const promise = new Promise (getServerResponse);
//     promise. then (parseResponse);
// }

// function getServerResponse(resolve) {
//     setTimeout(activateResolve, 5000)
    
//     function activateResolve () {
//         const response = {
//             message: "Successfully processed.",
//         };
//        const resolveValue = JSON.stringify(response);
//        resolve(resolveValue);
//     }

// }

// function parseResponse(resolveValue) {   
    
// }

//Promise best practices 2024-11-12
// function makeRequest(url) {
//     const promise = new Promise ();

// }

// function handleSubmit (event) {
//     event. preventDefault();
//     const inputs = event. target;
//     const emailInput = inputs[0];
//     const email = emailInput.value;
//     display ("Submitting form for " + email +"...");
//     const promise = makeRequest("https://dummyurl.com");
//     promise.then(parseResponse);
// }

// function getServerResponse(resolve) {
//     setTimeout( , 5000);
    
// }
