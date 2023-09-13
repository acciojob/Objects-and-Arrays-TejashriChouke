
const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the 'players' array
const team = players;

// Create a shallow copy of the 'players' array
const team1 = [...players];

// Create a shallow copy of the 'person' object
const cap1 = { ...person };

// Testing to make sure modifications don't affect the original arrays/objects
team.push("Megan");
team1.push("Eva");
cap1.name = "Jane Smith";

console.log("Original players array:", players);
console.log("team:", team);
console.log("team1:", team1);
console.log("Original person object:", person);
console.log("cap1:", cap1);

