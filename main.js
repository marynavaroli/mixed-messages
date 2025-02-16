const message1 = (_future, _current, _past) => {
    return {
        _future,
        _current,
        _past,
        get future() {
            return this._future;
        },
        get current() {
            return this._current;
        },
        get past() {
            return this._past
        }
    } 
};

let achieve = message1(
    "You will achieve ",
    "You are achieving ",
    "You have acheived "
)

let accomplish = message1(
    "You will accomplish ",
    "You are accomplishing ",
    "You have accomplished "
)

let fulfill = message1(
    "You will fulfill ",
    "You are fulfilling ",
    "You have fulfilled ")

let complete = message1(
    "You will complete ",
    "You are completing ",
    "You have completed "
)

let attain = message1(
    "You will attain ",
    "You are attaining ",
    "You have attained "
)

let execute = message1(
    "You will execute ",
    "You are executing ",
    "You have executed "
)

let message1Arr = [achieve, accomplish, fulfill, complete, attain, execute];
let message2Arr = ["goals", "tasks", "jobs", "dreams", "fate", "journey"];

function randomSelectTense() {
    let selector = Math.floor(Math.random() * 3);
    switch (selector) {
        case 0:
            return "future";
        case 1:
            return "current";
        case 2:
            return "past";
        default:
            return "";
    }
}

function randomSelectMessage1(message1Arr) {
    let index = Math.floor(Math.random() * message1Arr.length);
    return index;
}

function randomSelectMessage2(message2Arr) {
    let index = Math.floor(Math.random() * message2Arr.length);
    return index;
}

function createMessage (message1Arr, message2Arr) {
    let message1Obj = message1Arr[randomSelectMessage1(message1Arr)];
    let tense = randomSelectTense();
    let message1 = "";
    switch (tense) {
        case "future":
            message1 = message1Obj.future;
            break;
        case "current":
            message1 = message1Obj.current;
            break;
        case "past":
            message1 = message1Obj.past;
            break;
        default:
            message1 = "error"
    }
    let message2 = message2Arr[randomSelectMessage2(message2Arr)];
    let finalMessage = `${message1}your ${message2}.`;
    return finalMessage;
}

console.log(createMessage(message1Arr, message2Arr));