const display=document.querySelector('.display');
let firstLine=document.createElement('p');
let displayValue='';
let firstValue;
let SecondValue;
let operation='';
function add(firstNum,secondNum)
{
    return firstNum+secondNum;
}

function subtract(firstNum,secondNum)
{
    return firstNum-secondNum;
}

function multiply(firstNum,secondNum)
{
    return firstNum*secondNum;
}

function divide(firstNum,secondNum)
{
    return firstNum/secondNum ;
}

function operate(operator,firstNum,secondNum)
{
  switch (operator)
  {
    case'+':
    return add(firstNum,secondNum);
    break;
    
    case'-':
    return subtract(firstNum,secondNum);
    break;
    
    case'x':
    return  multiply(firstNum,secondNum);
    break;
    
    case'/':
    return divide(firstNum,secondNum);
    break;
  }
}

function sortEnteredButtons(button)
{
  if(button.classList==='numbers')
  {

  }
  else if(button.classList==='operations')
  {
    
  }
  firstLine.textContent+=button.getAttribute('id');
}


const buttons=document.querySelectorAll('button');

buttons.forEach(button=>button.addEventListener('click',()=>sortEnteredButtons(button)));
//firstLine.textContent=displayValue;
console.log((firstLine.textContent));
display.appendChild(firstLine);