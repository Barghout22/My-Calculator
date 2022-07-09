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
    
    case'*':
    return  multiply(firstNum,secondNum);
    break;
    
    case'/':
    return divide(firstNum,secondNum);
    break;
  }
}