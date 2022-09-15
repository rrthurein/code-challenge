const findSum = function(array) {
    let total = 0
  for(let i = 0; i < array.length; i++){
      total += array[i]
};
    return total;
};

const findFrequency = function(array) {
  const frequency = {};
  let maxValue = -9999;
  let minValue = 9999;
  let minKey = '';
  let maxKey = '';
    
    for(let str of array){
        if(frequency[str]){
            frequency[str]++;
        } else{
            frequency[str] = 1;
        }
    } //this for loop is for the number of occurences which is the key
  keys = Object.keys(frequency); //returns the array of keys
  for(let i=0; i<keys.length; i++){
      let value = frequency[keys[i]] //accessing the value of each key
    if(minValue > value){
        minValue = value;
        minKey = keys[i];
    } 
    if(maxValue < value){
        maxValue = value;
        maxKey = keys[i];
    }
    return {most: maxKey, least: minKey};
  }
}

function checkPalindrom (str) {
 let word = str.toLowerCase().split('').reverse().join('');
    finalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
    if(str === finalizeWord){
        return true
    } else {
return false}
};

const largestPair = function(array) {
  const largestPair = function(array) {
  let max = 0

for(let i=0; i < array.length; i++){
    let result = array[i] * array[i + 1]
    if(max < result){
        max = result;
    } 
}
return max;
};
};


  const removeParenth = function(str) {
  return str.replace(/ *\([^)]*\) */g, "");
};


const scoreScrabble = function(str) {
 
};
