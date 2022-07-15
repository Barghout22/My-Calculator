const display=document.querySelector('.display');
const firstLine=document.createElement('p');
let firstdisplayValue='';
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
    return Math.round((add(firstNum,secondNum))*1000)/1000;
    break;
    
    case'-':
    return Math.round((subtract(firstNum,secondNum))*1000)/1000;
    break;
    
    case'x':
    return  Math.round((multiply(firstNum,secondNum))*1000)/1000;
    break;
    
    case'/':
    return Math.round((divide(firstNum,secondNum))*1000)/1000;
    break;
  }
}



function clearAllValues()
{
  operation=undefined;
  firstLine.textContent='';
  firstdisplayValue='';
  secondDisplayValue='';
  calcResult='';
}

function isInt(n) {
  return n % 1 === 0;
}

function sortEnteredButtons(button)
{
  if(button.classList.value==='numbers')
    {
    if(!operation)
    {
      if(calcResult!=='')
      {
        clearAllValues();
      }
      if(button.getAttribute('id')==='.')
      {
        if(!isInt(firstdisplayValue))
        {
          return;
        }

      }
      firstdisplayValue+=button.getAttribute('id');
    }
    else
    {
      if(button.getAttribute('id')==='.')
      {
        if(!isInt(secondDisplayValue))
        {
          return;
        }
      }
      secondDisplayValue+=button.getAttribute('id');
    }
    firstLine.textContent+=button.getAttribute('id');
    }
  
  else if (button.classList.value==='operations')
    {
      if(button.getAttribute('id')==='delete')
      {

        firstLine.textContent=firstLine.textContent.slice(0,-1);
      }
      else{
     if((!operation)&&(button.getAttribute('id')!=='=')&&(button.getAttribute('id')!=='clear'))
       {
        if(calcResult!='')
        {
          firstdisplayValue=calcResult;
          firstLine.textContent=firstdisplayValue;
          secondDisplayValue='';
          calcResult='';
        }
        operation=button.getAttribute('id');
        firstLine.textContent+=button.getAttribute('id');
       }  
        else if((operation)&&(button.getAttribute('id')!=='=')&&(button.getAttribute!=='clear'))
       {
      
          if((firstdisplayValue!=='')&&(secondDisplayValue!==''))
          {
            firstdisplayValue=operate(operation,Number(firstdisplayValue),Number(secondDisplayValue));
            if(firstdisplayValue==Infinity)
            {
              firstLine.textContent='you can\'t divide by zero';
              operation=undefined;
              firstdisplayValue='';
              secondDisplayValue='';
              calcResult=NaN;
              
            }
            else
            {
            firstLine.textContent=firstdisplayValue;
            operation=button.getAttribute('id');
            firstLine.textContent+=operation;
            secondDisplayValue='';
            }
          
          }
        
        else
        {
          operation=button.getAttribute('id');
          firstLine.textContent=firstdisplayValue+operation;
        }
        
      }
     else if(button.getAttribute('id')==='=')
       {
          if((operation)&&(firstdisplayValue!=='')&&(secondDisplayValue!==''))
          {
            calcResult=operate(operation,Number(firstdisplayValue),Number(secondDisplayValue));
            if(calcResult==Infinity)
            {
              firstLine.textContent='you can\'t divide by zero';
            }
            else{
              firstLine.textContent =firstdisplayValue+operation+secondDisplayValue +button.getAttribute('id') + calcResult;
            }
            operation=undefined;
          }
          else
          {
            clearAllValues();
          }
       }
     else if( button.getAttribute('id')==='clear')
     {
      clearAllValues();
     }
    }
  }
}


const buttons=document.querySelectorAll('button');

buttons.forEach(button=>button.addEventListener('click',()=>sortEnteredButtons(button)));
display.appendChild(firstLine);
