// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 4,15];
const players = [75, 65, 67, 72, 55, 59];
//const selected = players.filter(p => p > 60);
//const selected = players.filter(p => p > 80);
//const selected = players.filter(p => p > 50);


//const selected = players.filter(p => p % 2 === 1); for odd number
const selected = players.filter(p => p % 2 === 0);  // for even number

console.log(selected); 

const friends = [ 'tom', 'john', 'micheal', 'oliver', 'tim', 'josna'];
const oddFriends = friends.filter(p => p.length > 2);
console.log(oddFriends);