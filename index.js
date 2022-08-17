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



