
const allTheBtns = document.querySelectorAll(".button");

const numberKeys = document.querySelectorAll(".btn-num");
const operaterKeys = document.querySelectorAll(".btn-operator");
const resultKey = document.querySelector("#btn-equal");
const resetKey = document.querySelector("#btn-reset");

const displayNum = document.querySelector(".display-container");


let currentInput ="";
let currentOperator ="";
let previousInput ="";


//*allTheBtns.forEach(button => {button.addEventListener("click", ()=>)})



numberKeys.forEach(button => { button.addEventListener("click", () => { currentInput = currentInput + button.textContent;
  updateDisplay();
    })
})


operaterKeys.forEach(button => {
  button.addEventListener("click", () => {
      // Step 1: Check if we have any numbers to work with
      if (currentInput === "" && previousInput === "") {
          return; // If no numbers, do nothing
      }
      // Step 2: Check if this is the first number entered
      else if (previousInput === "") {
          // This is the first number, so:
          previousInput = currentInput;
          currentOperator = button.textContent;
          currentInput = '';  // Clear the current input for the next number
      }
      else {
          // We already have a previous number, so:
          calculate();
          currentOperator = button.textContent;
          
      }
      updateDisplay();
  })
})

resultKey.addEventListener("click", ()=>{
if (currentInput !== "" && previousInput !== "")
  calculate();

})

resetKey.addEventListener("click",()=>{
  reset();
})


function reset() {
  currentInput = '';
  currentOperator = '';
  previousInput = '';
  updateDisplay();
}


function calculate () {
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(current)) return;
  switch(currentOperator) {
      case "+": currentInput = (prev + current).toString(); break;
      case "-": currentInput = (prev - current).toString(); break;
      case "/": 
          currentInput = current !== 0 ? (prev / current).toString() : "Error"; 
          break;
      case "*": currentInput = (prev * current).toString(); break;
      default: return;
  }
  previousInput = '';
  currentOperator = '';

  updateDisplay();
}

function updateDisplay () {
  displayNum.textContent = currentInput;
  
}

updateDisplay();