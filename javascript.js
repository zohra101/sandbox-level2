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

function myFunction(callbackFunction) {
    callbackFunction();
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

function newObject() {
    const myCar = new MyCar();
    const myCar2 = new MyCar();
    const myCar3 = new MyCar();
    display(JSON.strigify (myCar));
    display(JSON.strigify (myCar2));
    display(JSON.strigify (myCar3));
}

function handleSubmit(event) {







}

function getServerResponse(resolve) {
    setTimeout(activateResolve, 5000)
    
    function activateResolve () {
        const response = {
            message: "Successfully processed.",
        };
       const resolveValue = JSON.stringify(response);
       resolve(resolveValue);
    }

}

function parseResponse(resolveValue) {   
    
}