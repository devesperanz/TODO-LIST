const form = document.querySelector('.task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const addBtn = document.querySelector('.add-btn');
const filterTask = document.querySelector('#filter-task');
const taskInput = document.querySelector('#task-input');
const errorMessage = document.querySelector('.error')

//list of task 
const list = document.createElement('li');
list.className = 'total-task';


list.appendChild(link);

addBtn.addEventListener('click', (addTask) =>{
   if(taskInput.value === ''){ 
    form.innerHTML += '<p class= "task-error">*Add a task</p>';     
   }
   else{
    list.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild (list);
    taskList.style.display = 'block'
    taskInput.value = '';    
   }
   
   addTask.preventDefault();
})


