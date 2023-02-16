function solve(s){
  // initialize count variables to 0
  let uppercase = 0, lowercase = 0, number = 0, special = 0;
  
  // loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    // increment count variables based on character type
    s[i] >= "A" && s[i] <= "Z" ? uppercase++ : 
    s[i] >= "a" && s[i] <= "z" ? lowercase++ : 
    s[i] >= "0" && s[i] <= "9" ? number++ :
    special++;
  }
  
  // create array of character counts and return it
  let list = [uppercase, lowercase, number, special];
  return list;
}
