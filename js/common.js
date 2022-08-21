function allExpenses(elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldString = elementField.value ;
    const elementValue = parseInt(elementFieldString);
    return elementValue;

}

function calculation(fieldId,expenditureValue){
    const textElement = document.getElementById(fieldId);
    textElement.innerText = expenditureValue;
}