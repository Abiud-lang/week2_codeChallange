const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const newItem = input.value;
     (newItem === '') ; 

    const itemList = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.textContent = newItem;
    itemList.appendChild(itemText);

    const itemDelete = document.createElement('button');
    itemDelete.textContent = 'Delete';
    itemDelete.className = 'delete-button';
    itemList.appendChild(itemDelete);

    const itemPurchase = document.createElement('button');
    itemPurchase.textContent = 'Purchased';
    itemPurchase.className = 'purchase-button'
    itemList.appendChild(itemPurchase);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.className = 'clear-button'
    itemList.appendChild(clearButton);

    list.appendChild(itemList);


    input.value = '';

   
    itemDelete.addEventListener('click', () => {
        list.removeChild(itemList);
    });

    
    itemPurchase.addEventListener('click', () => {
        itemText.style.textDecoration = 'line-through';
    });

    clearButton.addEventListener('click', () => {
        list.innerHTML= '';
    });


});