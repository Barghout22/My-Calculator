const display=document.querySelector('.display');
const firstLine=document.createElement('p');
//const secondLine=document.createElement('p');
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



function clearAllValues()
{
  operation=undefined;
  firstLine.textContent='';
  firstdisplayValue='';
  secondDisplayValue='';
  calcResult='';
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

      firstdisplayValue+=button.getAttribute('id');
    }
    else
    {
      secondDisplayValue+=button.getAttribute('id');
    }
    firstLine.textContent+=button.getAttribute('id');
    }
  
  else if (button.classList.value==='operations')
    {
     if((!operation)&&(button.getAttribute('id')!=='=')&&(button.getAttribute('id')!=='clear'))
       {
        if(calcResult!='')
        {
          firstdisplayValue=calcResult;
          firstLine.textContent=firstdisplayValue;
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
            firstLine.textContent=firstdisplayValue;
            operation=button.getAttribute('id');
            firstLine.textContent+=operation;
            secondDisplayValue='';
          }
        
        else
        {
          operation=button.getAttribute('id');
        }
        
      }
     else if(button.getAttribute('id')==='=')
       {
          if((operation)&&(firstdisplayValue!=='')&&(secondDisplayValue!==''))
          {
            calcResult=operate(operation,Number(firstdisplayValue),Number(secondDisplayValue));
            firstLine.textContent =firstdisplayValue+operation+secondDisplayValue +button.getAttribute('id') + calcResult;
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




/*{

  if(button.classList.value==='numbers')
  {
    if(!operation)
    {
      if(calcResult!=='')
      {
        firstLine.textContent=calcResult;
        secondLine.textContent='';
        displayValue='';
        secondDisplayValue='';
        calcResult='';
        displayValue+=button.getAttribute('id');
        secondLine.textContent+=button.getAttribute('id');
      }
      else{
      displayValue+=button.getAttribute('id');
      firstLine.textContent+=button.getAttribute('id');
      secondDisplayValue='';
      }
    }
    else
    {
      secondDisplayValue+=button.getAttribute('id');
      secondLine.textContent+=button.getAttribute('id');
    }
  }
  else if(button.classList.value==='operations')
  {
  if(((button.getAttribute('id'))!=='=')&&((button.getAttribute('id'))!=='clear'))
  {
  if((!operation)||(operation==='=')||(operation==='clear'))
  {
    operation=button.getAttribute('id');
    firstLine.textContent='';
    firstLine.textContent+=displayValue+operation;
    secondLine.textContent='';
  }
  else if  ((displayValue!=='')&&(operation)&&(secondDisplayValue!==''))
  {
    calcResult=operate(operation,Number(displayValue),Number(secondDisplayValue));
    displayValue=calcResult;
    console.log(displayValue);
    firstLine.textContent=calcResult;
    operation=button.getAttribute('id');
    firstLine.textContent+=operation;
    secondLine.textContent='';
    secondDisplayValue='';
  }
  
  }
  else if (((button.getAttribute('id'))==='=')&&((displayValue)&&(operation)&&(secondDisplayValue)))
  {
    calcResult=operate(operation,Number(displayValue),Number(secondDisplayValue));
    firstLine.textContent+=secondDisplayValue;
    secondLine.textContent=calcResult;
    operation='';
  }  
  else if((button.getAttribute('id'))==='clear')
  {
    displayValue='';
    secondDisplayValue='';
    operation='';
    firstLine.textContent='';
    secondLine.textContent='';
  }
 }


}
*/



const buttons=document.querySelectorAll('button');

buttons.forEach(button=>button.addEventListener('click',()=>sortEnteredButtons(button)));
display.appendChild(firstLine);
//display.appendChild(secondLine);
