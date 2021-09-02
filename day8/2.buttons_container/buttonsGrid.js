// Define array to store button elements
const myButtons = [];
const changeOrder = [1,2,3,6,9,8,7,4];

// Access buttons and store in myButtons array
for (let i = 1; i < 10; i++) {
  if (i == 5) {continue;}
  let btn = document.getElementById(`btn${i}`);
  myButtons.push(btn);   
}

// Create function to change buttons
function changeButton(){
  
  myButtons[1].innerHTML = changeOrder[0]; // Button 2 becomes 1
  myButtons[2].innerHTML = changeOrder[1]; // Button 3 becomes 2
  myButtons[4].innerHTML = changeOrder[2]; // Button 6 becomes 3
  myButtons[7].innerHTML = changeOrder[3]; // Button 9 becomes 6
  myButtons[6].innerHTML = changeOrder[4]; // Button 8 becomes 9
  myButtons[5].innerHTML = changeOrder[5]; // Button 7 becomes 8
  myButtons[3].innerHTML = changeOrder[6]; // Button 4 becomes 7
  myButtons[0].innerHTML = changeOrder[7]; // Button 1 becomes 4

  // Update the order of the numbers in the changeOrder array
  let x = changeOrder.pop();
  changeOrder.unshift(x)
} 