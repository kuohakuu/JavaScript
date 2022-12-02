

function htmlConstructor() {
    const body = document.querySelector('body')

    //Crindo os inputs que recebem o valor das colunas
    let inputColunm = document.createElement('input')
    inputColunm.type = 'text'
    inputColunm.placeholder = 'Digite a quantidade de colunas'
    inputColunm.classList.add('inputColumn')

    let inputRow = document.createElement('input')
    inputRow.type = 'text'
    inputRow.placeholder = 'Digite a quantidade de linhas'
    inputRow.classList.add('inputRow')

    body.append(inputColunm, inputRow)

    let buttonConfirm = document.createElement('button')
    buttonConfirm.innerText = 'Gerar'
    body.append(buttonConfirm)


    const table = document.createElement('table')
    body.append(table)

    let inputColor = document.createElement('input')
    inputColor.classList.add('inputColor')
    inputColor.type = 'color'

    let lengColumn = document.querySelector('.inputColumn')
    let lengRow = document.querySelector('.inputRow')

    buttonConfirm.addEventListener('click', () => createTable(table, lengColumn, lengRow, buttonConfirm))


    body.append(inputColor)
}


function changeColor(id) {
    let Box = document.getElementById(id)
    let actualColor = sofiaChoice()
    if (Box.getAttribute('style') === null) {
        Box.style.backgroundColor = actualColor
    } else {
        Box.removeAttribute('style')
    }
}

function sofiaChoice() {
    let valueColor = document.querySelector(".inputColor").value
    return valueColor;
}

function createTable(table, column, row, button) {
    if (table.children.length === 0) {
        for (let i = 0; i < row.value; i++) {
            let newTr = document.createElement('tr')
            table.append(newTr)
            for (let i = 0; i < column.value; i++) {
                let newTd = document.createElement('td')
                newTr.append(newTd)
                let newDiv = document.createElement('div')
                newDiv.classList.add('boxes')
                newDiv.setAttribute('id', `${Math.random()}`)
                newTd.append(newDiv)
                newDiv.addEventListener('click', () => changeColor(newDiv.id))
                button.innerText = 'Limpar'
            }
        }
    } else {
        clear(table)
        button.innerText = 'Gerar'
    }

}

function clear(table) {
    table.innerText = ''
}
