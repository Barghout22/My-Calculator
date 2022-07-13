const display=document.querySelector('.display');
let firstLine=document.createElement('p');
let secondLine=document.createElement('p');
let displayValue='';
let secondDisplayValue='';
let operation;
let calcResult='';
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
  if (calcResult!=='')
  {
    displayValue='';
    secondDisplayValue='';
    operation='';
    firstLine.textContent='';
    calcResult='';
    display.removeChild(secondLine);
  }
  if(button.classList.value==='numbers')
  {
    if(!operation)
    {
      displayValue+=button.getAttribute('id');
      firstLine.textContent+=button.getAttribute('id');
      
    }
    else
    {
      secondDisplayValue+=button.getAttribute('id');
      firstLine.textContent+=button.getAttribute('id');
    }
  }
  else if(button.classList.value==='operations')
  {
  if(((button.getAttribute('id'))!=='=')&&((button.getAttribute('id'))!=='clear'))
  {
  operation=button.getAttribute('id');
  firstLine.textContent+=operation;
  }
  else if (((button.getAttribute('id'))==='=')&&((displayValue)&&(operation)&&(secondDisplayValue)))
  {
    calcResult=operate(operation,Number(displayValue),Number(secondDisplayValue));
    secondLine.textContent=calcResult;
    display.appendChild(secondLine);
  }  
  else if((button.getAttribute('id'))==='clear')
  {
    displayValue='';
    secondDisplayValue='';
    operation='';
    firstLine.textContent='';
  }
 }


}




const buttons=document.querySelectorAll('button');

buttons.forEach(button=>button.addEventListener('click',()=>sortEnteredButtons(button)));
display.appendChild(firstLine);
