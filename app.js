const list = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')

button.onclick = function ()
{
    let newItem= input.value
    input.value = '';


let itemList = document.createElement('li')


let itemText = document.createElement('span')
itemText.textContent = newItem
itemList.appendChild(itemText)

let itemDelete = document.createElement('button')
itemDelete.textContent = 'Delete'
itemList.appendChild(itemDelete)


list.appendChild(itemList)

itemDelete.onclick = function () {
    list.removeChild(itemList)


    
}

}



