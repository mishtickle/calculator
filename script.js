var variable = [];
var numberVariable=[];
var pos = 0;
var numberPos = 0;
var number = 1;
const container = document.querySelector(".container");
const displayText = document.createElement('p');
displayVariable();
function displayVariable(){
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(buttons => {
        buttons.addEventListener('click', function(e){
        let text = buttons.textContent;
        if (text == "Clear"){
            variable = [];
            pos = 0;
            numberVariable = [];
            numberPos = 0;
            displayText.textContent = "";
            displayText.replaceChildren();
            return;
        }
        else if (checkForEquals(text) == true){
            if (numberVariable.length >= 3){
                for (i = 2; i < numberVariable.length; i+=2){
                    number = operate(numberVariable[i - 1], numberVariable[i-2], numberVariable[i]);
                    numberVariable[i] = number;
                    if (i == (numberVariable.length - 1)){
                        displayText.textContent = number;
                        container.appendChild(displayText);
                        return;
                    }
                }
            }
            }    
        variable[pos] = text;
        pos++;
        displayText.textContent = variable.toString();
        displayText.textContent = variable.join("");
        container.appendChild(displayText);
        if (checkForOperator(text) == false){
            if (checkForEquals(text) == false){
                numberVariable[numberPos] = arrayToNumber(variable);
                }
            }
        else if(checkForOperator(text) == true){
            numberPos++;
            numberVariable[numberPos] = text;
            numberPos++;
            variable = []
            }
        });
    });
}

function arrayToNumber(array){
    theNumber = array.join("");
    newNumber = Number(theNumber);
    return newNumber;
}
function checkForOperator(string){
    switch(string){
        case " X ": return true;
        case " - ": return true;
        case " + ": return true;
        case " / ": return true; //division symbol
        //case " = ": return true;
        default: return false;  
    }
}
function checkForEquals(string){
    if (string == " = "){
        return true
    }return false;
}
function checkForDecimal(string){
    if (string == "."){
        return true;
    }return false;
}


function add(a, b){
    return a + b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a/b;
}
function subtract(a, b){
    return (a - b)
}


function operate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case ' + ': 
            return add(a, b);
        case ' - ': 
            return subtract(a, b);
        case ' X ': 
            return multiply(a, b);
        case ' / ' : //division symbol
                if (b === 0){
                return null
            }
            else{
                return divide(a, b);
            }
        default: return  null;   
    }
}