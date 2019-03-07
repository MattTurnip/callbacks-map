var words = ["ground", "control", "to", "major", "tom"];


var wordLength = map(words, function(word) {
  return word.length;
});

var wordUpper = map(words, function(word) {
  return word.toUpperCase();
});

var wordReverse = map(words, function(word) {
  return word.split('').reverse().join('');
});


//a higher order function (that means it takes functions as args.)
function map(array, callback){
    var results = []
    for (let i = 0; i < array.length; i++) {
        results.push(callback(array[i]))
    }   
    return results
}

console.log(wordLength);
console.log(wordUpper);
console.log(wordReverse);





