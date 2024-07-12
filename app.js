const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const newItem = input.value;
    if (newItem === '') return; // Do nothing if the input is empty

    const itemList = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.textContent = newItem;
    itemList.appendChild(itemText);

    const itemDelete = document.createElement('button');
    itemDelete.textContent = 'Delete';
    itemList.appendChild(itemDelete);

    const itemPurchase = document.createElement('button');
    itemPurchase.textContent = 'Purchased';
    itemList.appendChild(itemPurchase);

    list.appendChild(itemList);

    
    input.value = '';

   
    itemDelete.addEventListener('click', () => {
        list.removeChild(itemList);
    });

    
    itemPurchase.addEventListener('click', () => {
        itemText.style.textDecoration = 'line-through';
    });
});