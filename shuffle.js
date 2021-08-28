function addInput() {
    const nameList = document.getElementById('name-list');
    const itemList = document.getElementById('item-list');
    
    const nameListItem = document.createElement('li');
    const itemListItem = document.createElement('li');

    const nameInput = document.createElement('input');
    const itemInput = document.createElement('input');

    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'not-selectable');

    itemInput.setAttribute('type', 'text');
    itemInput.setAttribute('class', 'not-selectable item');

    nameList.appendChild(nameListItem);
    itemList.appendChild(itemListItem);

    nameListItem.appendChild(nameInput);
    itemListItem.appendChild(itemInput);
    
    document.getElementById('remove-btn').style.display = 'block';
}

function removeInput() {
    const nameList = document.getElementById('name-list');
    const itemList = document.getElementById('item-list');

    if (nameList.children.length <= 1) return;

    nameList.removeChild(nameList.lastElementChild);
    itemList.removeChild(itemList.lastElementChild);
    
    if (nameList.children.length == 1) {
        document.getElementById('remove-btn').style.display = 'none';
    }   
}

function shuffle() {
    const values = [];
    const fields = document.getElementsByClassName('item');

    for (let f of fields) values.push(f.value);

    for (let f of fields) {
        const index = Math.floor(Math.random() * values.length);
        f.value = values.splice(index, 1)[0];
    }
}
