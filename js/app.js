const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const list = listUl.children;

//LIST REMOVE AND MOVE BUTTONS FUNCTION
function attachListButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'up';
  li.appendChild(up);
  
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'down';
  li.appendChild(down);
  
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'remove';
  li.appendChild(remove);
}

//CALLS ATTACHING FUNCTION
for (let i = 0; i < list.length; i += 1) {
  attachListButtons(list[i]);
}

//BUTTON EVENT LISTENER
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if(event.target.className == 'remove') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
  if (event.target.className == 'up') {
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;
    if (prevLi) {
      ul.insertBefore(li, prevLi);
    }
  }
  if (event.target.className == 'down') {
    let li = event.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;
    if (nextLi) {
      ul.insertBefore(nextLi, li);
    }
  }
}
});

//HIDE AND SHOW LIST EVENT LISTENER
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = "Show List";
    listDiv.style.display = 'none';
  }
});

//DESCRIPTION BUTTON EVENT LISTENER
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

//ADD ITEM BUTTON EVENT LISTENER
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});

//REMOVE ITEM BUTTON EVENT LISTENER
removeItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});
