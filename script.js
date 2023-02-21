const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const toDoList = document.querySelector('.todolist');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0) {
        addBtn.classList.add('active'); 
    } else {
        addBtn.classList.remove('active'); 
    }
}

showTasks();

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('Add a new thorn in my side');
    if(getLocalStorage == null) { 
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem('Add a new thorn in my side', JSON.stringify(listArr));
    showTasks();
    addBtn.classList.remove('active');
}