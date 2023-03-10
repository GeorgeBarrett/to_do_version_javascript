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
    };
};

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
};


// function to add task list inside ul
function showTasks() {
    let getLocalStorage = localStorage.getItem('Add a new thorn in my side');
    if(getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    const pendingNumb = document.querySelector('.pendingNumb');
    pendingNumb.textContent = listArr.length;
    
    if(listArr.length > 0){
        deleteAllBtn.classList.add('active');
    } else {
        deleteAllBtn.classList.remove('active');
    }

    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick='deleteTask(${index})'; ><i class="fas fa-trash-alt"></i></span></li>`;
    });
    toDoList.innerHTML = newLiTag;
    inputBox.value = '';
};


// delete task function
function deleteTask(index) {
    let getLocalStorage = localStorage.getItem('Add a new thorn in my side');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem('Add a new thorn in my side', JSON.stringify(listArr));
    showTasks();
};


// delete all button
deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem('Add a new thorn in my side', JSON.stringify(listArr));
    showTasks();
};
