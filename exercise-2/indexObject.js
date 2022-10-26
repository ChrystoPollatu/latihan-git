let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"

};

//Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
//By using the bracket notation, change the difficulty to the value of 7.
programming["difficulty"] = "7";
//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
//By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;

console.log(programming);
//Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”,
//where 0 represents the index of the array, and console.log the output.
let numb = ["0", "1", "2"];
let languages = languages.map(languages => numb + "-" + languages);

console.log(programming);
