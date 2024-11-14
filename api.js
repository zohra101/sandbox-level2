//
function handleClick(event) {
    const promise = fetch("https://opentdb.com/api.php?amount=1&type=multiple")
    promise.then(parseResponse);
}

function parseResponse (resolveValue) {
    const promise = resolveValue.text();
    promise.then(viewResponse);
}

// function viewResponse(resolveValue) {
//     const response=JSON.parse(resolveValue);
// }

// function viewTriviaResponse(resolveValue) {
// //THE RESOLVE VALUE WILL BE A STRINGIFIED OBJECT
// //THE PARSE METHOD GENERATES AN OBJECT FROM THE STRING
// const response = JSON. parse(resolveValue);
// const results = response.results;
// const item = results [0];
// const question = item.question;
// const answer = item. correct_answer;
// const incorrects = item.incorrect_answers;

// const trivia = `<div>${question}</div>
//        <ol type="a">
//                     <li>${incorrects[0]}</li>
//                     <li>${incorrects[1]}</li>
//                     <li>${incorrects[2]}</li>
//                     <li>${answer}</li>
//                 </ol>`;
//     display(trivia);
// }

//TRIVIA GAME TEMPLATE
function viewResponse(resolveValue) {
    //THE RESOLVE VALUE WILL BE A STRINGIFIED OBJECT
    //THE PARSE METHOD GENERATES AN OBJECT FROM THE STRING
    const response = JSON. parse(resolveValue);
    const results = response.results;
    const item = results [0];
    const question = item.question;
    const answer = item. correct_answer;
    const incorrects = item.incorrect_answers;
    
    const trivia = `<div>${question}</div>
           <ol type="a">
                        <li>${incorrects[0]}</li>
                        <li>${incorrects[1]}</li>
                        <li>${incorrects[2]}</li>
                        <li>${answer}</li>
                    </ol>`;
        output(trivia);
    }