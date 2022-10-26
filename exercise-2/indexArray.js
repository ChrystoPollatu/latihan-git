const people = ["Greg", "Mary", "Devon", "James"];
let answer = "";

//Using a for-loop, iterate through this array and console.log all of the people.
for (let i = 0; i < people.length; i++) {
    answer += people[i] + "<br>";

    console.log(people);
  }

//Using a forEach(),  iterate through this array and console.log all of the people.
people.forEach(element => console.log(element));

//Write the command to remove "Greg" from the array.
people.shift();
//Write the command to remove "James" from the array.
people.pop();
//Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
//Write the command to add your name to the end of the array.
people.push("Chrysto");

//Using a for-loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
//(hint: use break keyword to exit loop)
for (let e = 0; e < people.length; e++){
  if (e==2){ break;}
  console.log(people[e]);
}

//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
console.log(people.slice(2,4));

//Redefine the people variable with the value you started with. Using the splice command,
//remove "Devon" from the array and add "Elizabeth" and "Artie".
//Your array should look like this when you are done ["Matt", "Mary", "Elizabeth", "Artie", "Your Name"].
people.splice(2,1, "Elizabeth", "Artie");
console.log(people);

//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
const withBob = people.slice(0);
withBob.push("Bob");

console.log(withBob);