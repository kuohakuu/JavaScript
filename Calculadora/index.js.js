const buttons = document.querySelectorAll('button');
const cleanersContainer = document.querySelector('.cleaners');
const result = document.getElementById('result')

buttons.forEach(item => item.addEventListener('click', gotcha))

let num1 = '';
let num2 = '';
let operation = '';

function gotcha(value) {
    const valueBtn = this.innerHTML;
    const valueResult = result.innerHTML;
    const valuesOnScreen = showScreen(result, valueBtn);

    if (valueBtn === 'CE' || valueBtn === 'C' || valueBtn === 'Apagar') {

        clear()
        return;
    }
    calcular(valueBtn, valueResult, result)



}

function calcular(value, screenResult, result) {
    if (+value >= 0) {
        return
    }
    if (!+value && value !== '.') {
        let noSpaceResult = result.innerHTML.trim()
        if (operation === '') { operation = value; return }

        if (operation !== '' && value === '=' && noSpaceResult.length >= 3) {
            let realResult = 0;
            realResult = resultCount(operation, noSpaceResult)
            clear()
            result.innerHTML += realResult
            operation = ''
            //diferentemente  do outro aqui eu posso calcular quantas vezes precisar até o usuário não querer mais
            if (result.innerHTML === realResult) {
                calcular()
            }
            return

        }
        return
    }
    return
}


function resultCount(operator, noSpace,) {
    let newResult = 0;
    let arrayResult = noSpace.split(`${operator}`);
    if (operator === '+') {
        return newResult = parseFloat(arrayResult[0]) + parseFloat(arrayResult[1]);
    }
    if (operator === '-') {
        return newResult = parseFloat(arrayResult[0]) - parseFloat(arrayResult[1]);
    }
    if (operator === 'x') {
        return newResult = parseFloat(arrayResult[0]) * parseFloat(arrayResult[1]);
    }
    if (operator === '/') {
        return newResult = parseFloat(arrayResult[0]) / parseFloat(arrayResult[1]);
    }

    return
}


function showScreen(items, values) {
    if (values !== '=') {
        return items.innerText += values
    }
    return

}
function showResult(screenResult, countResult) {
    screenResult.innerHTML = countResult
}

function clear() {
    result.innerHTML = '';
    num1 = '';
    num2 = '';
    operation = '';
}




