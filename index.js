
// function runToWendaniGym() {
//     console.log("Run to Wendani Gym");
// }

// function legChestTricepWorkouts() {
//     console.log("Do leg,chest and tricep workouts");
// }

// function backShoulderBicepWorkouts() {
//     console.log("Do back, shoulder and bicep workouts");
// }

// function exerciseRoutine(postRunWorkout) {
//     runToWendaniGym();
//     postRunWorkout();
// }

// function Monday() {
//     exerciseRoutine(legChestTricepWorkouts);
// }

// function Tuesday() {
//     exerciseRoutine(backShoulderBicepWorkouts);
// }

// function Wednesday() {
//     exerciseRoutine(legChestTricepWorkouts);
// }

// function Thursday() {
//     exerciseRoutine(backShoulderBicepWorkouts);
// }

// function Friday() {
//     exerciseRoutine(legChestTricepWorkouts);
// }

// function Saturday() {
//     exerciseRoutine(() => console.log('work the core of your body'))
// }

// Saturday();

// function morningRoutine(exercise) {
//     let breakfast;

//     if (exercise === legChestTricepWorkouts) {
//         breakfast = 'eggs';
//     }else if (exercise === backShoulderBicepWorkouts) {
//         breakfast = 'rice';
//     }else{
//         breakfast = 'bread';
//     }

//     exerciseRoutine(exercise);
//     // we could give this function a name if we wanted to, but since
//     // it's only available _inside_ morningRoutine(), we don't need to

//     return function() {
//         return `Wow this ${breakfast} is perfect`;
//     }

// }

// const afterExercise = morningRoutine(legChestTricepWorkouts);
// console.log(afterExercise());


function receivesAFunction(cb) {

    return cb();

}

console.log(receivesAFunction(function() {return 'this function returns a callback function'}));

function returnsANamedFunction() {
    let exercise = 'curls';
    if (exercise === 'curls') {
        return function bicep() {
            return 'wow! curls are my favourite bicep exercise';
        }
    }else {
        return 'thats not a bicep exercise';
    }

}
const namedFunction = returnsANamedFunction();
console.log(namedFunction());


function returnsAnAnonymousFunction() {
    let colour = 'blue';

    if (colour === 'green') {
        return 'Bro! thats my favourite colour';
    }else {
        return function() {
            return 'thats not my favourite colour';
        }
    }

}

console.log(returnsAnAnonymousFunction());



