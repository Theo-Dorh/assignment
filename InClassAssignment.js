// In class assignment assignment 

// Write a function to determine the length of the string.
function strgLength(someString) {
    console.log(someString.length);
}
strgLength("Theophilus");

// Write a function that can convert any string to all uppercase letters.
function strgToUpper(someString) {
    let upp = someString.toUpperCase();
    console.log(upp)
}
strgToUpper("My name is theo");

// Write a function that can convert any string to all lowercase letters.
function strgToLower(someString) {
    let res = someString.toLowerCase();
    console.log(res)
}
strgToLower("MY NAME IS THEO");

//  Write a function to retrieve the first character of any string.
function retFirstChar(someString){
    let firstChar = someString.slice(0)[0];
    console.log(firstChar);
}
retFirstChar("MARIE WOODWORTH ETHER");

//  Write a function to retrieve the first character of any string.
function retFirstChar(someString){
    console.log(someString.charAt(0));
}
retFirstChar("MARIE WOODWORTH ETHER");

//  Write a function to retrieve the last character of any string.
function retLastChar(someString){
    console.log(someString[someString.length-1]);
}
retLastChar("MARIE WOODWORTH ETHER");

//  Write a function to retrieve the last character of any string.
function retLastChar(someString){
    console.log(someString.charAt(someString.length-1));
}
retLastChar("MARIE WOODWORTH ETHER");

// Write a function to find the index of a specific character or substring within a string.
function charIndex(someString, srcStrng) {
    console.log(someString.indexOf(srcStrng));
}
charIndex("Onomatopoeia","t");

//  Write a function to find the index of the last occurrence of a specific character or substring within a string.
function lastStrgIndex(someString, srcStrng) {
    console.log(someString.lastIndexOf(srcStrng));
}
lastStrgIndex("Onomatopoeia","o");

// Write a function to retrieve a portion of a string between two specified indices.
function subStrg(someString, start, end) {
    console.log(someString.substring(start, end));
}
subStrg("Onomatopoeia", 6, 8);

//  Write a function to retrieve a portion of a string starting at a specified index and including a specified number of characters.
function spcStrg(someString, start, len) {
    console.log(someString.substr(start, len));
}
spcStrg("Onomatopoeia", 5, 4);

// Write a function to replace a specific character or substring within a string with another character or substring.
function repStrg(someString, searchStr, strRep) {
    console.log(someString.replace(searchStr, strRep));
}
repStrg("Onomatopoeia", "top", "rap");

// Write a function to split a string into an array of substrings based on a specified delimiter.
function splitStrg(someString, delimiter, limit) {
    console.log(someString.split(",", limit));
}

splitStrg("apple, banana, mango, orange, pawpaw, coconut", ",", 4);

//  Write a function to concatenate two or more strings together.
function concatStrngs (...someStrings) {
    console.log(someStrings.join(""));
}
concatStrngs("apple", "boy", "dog");

// Write a function to remove any whitespace from the beginning or end of a string.
function remWhiteSpace (someString) {
    console.log(someString.replace(/\s/g, ""));
}
remWhiteSpace("My name is  Theophilus  Dorh");

//  Write a function to determine if a string starts with a specific character or substring.
function strgStartsWith(someString, srcStrng) {
    console.log(someString.startsWith(srcStrng));
}
strgStartsWith("Aberdeen", "Ac");

// Write a function to determine if a string ends with a specific character or substring.
function strgEndsWith(someString, srcStrng) {
    console.log(someString.endsWith(srcStrng));
}
strgEndsWith("Aberdeen", "en");

//  Write a function to determine if a string contains a specific character or substring.
function containsStrg (someString, srcStrng) {
    console.log(someString.includes(srcStrng));
}
containsStrg("Aberdeen", "dee");

// Write a function to retrieve an array of all matches of a specified regular expression within a string.
function retAllMatches (someString, regExp) {
    let searchString = new RegExp(regExp, "g");
    console.log(someString.match(searchString));
}
retAllMatches("The boy beat the other boy with the other boys around", "boy");

// Write a function to find the index of the first occurrence of a specified regular expression within a string.
function indexOfFirstMatch (someString, regExp) {
    let searchString = new RegExp(regExp, "g");
    console.log(someString.search(searchString));
}
indexOfFirstMatch("The boy beat the other boy with the other boys around", "boy");