const form = document.querySelector('.task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-btn');
const addBtn = document.querySelector('.add-btn');
const filterTask = document.querySelector('#filter-task');
const taskInput = document.querySelector('#task-input');
const errorMessage = document.querySelector('.error')

//ADD TASK
addBtn.addEventListener('click', (addTask) =>{
   if(taskInput.value === ''){ 
    form.innerHTML += '<p class= "task-error">*Add a task</p>';        
   }
   else{
    const list = document.createElement('li');
    list.className = 'total-task';
    list.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-task';
    link.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
    taskList.style.display = 'block'     
    list.appendChild(link); 
    taskList.append(list); 
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value = ''; 
   }     
   addTask.preventDefault();
})

//STORE TASK
function storeTaskInLocalStorage(task) {
   let tasks;
   if(localStorage.getItem('tasks') === null){
     tasks = [];
   } else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }
 
   tasks.push(task);
 
   localStorage.setItem('tasks', JSON.stringify(tasks));
 }
 



//REMOVE TASK

taskList.addEventListener('click', (removetask)=>{
   if(removetask.target.parentElement.classList.contains('delete-task')){
      if (confirm('ARE YOU SURE ?')){
         removetask.target.parentElement.parentElement.remove();
      }      
   }
   removeTaskFromLocalStorage( removetask.target.parentElement.parentElement)
})

//REMOVE TASK FROM LOCAL STORAGE
function removeTaskFromLocalStorage(taskItem) {
   let tasks;
   if(localStorage.getItem('tasks') === null){
     tasks = [];
   } else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }

   tasks.forEach(function(task, index){
      if(taskItem.textContent === task){
        tasks.splice(index, 1);
      }
    });
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//CLEAR TASK
clearBtn.addEventListener('click', (removetask)=>{
   taskList.innerHTML= '';
   clearTasksFromLocalStorage()
})

//CLEAR TAASK FROM LOCAL STORAGE
function clearTasksFromLocalStorage(){
   localStorage.clear();
}

//FILTERTASK 

filterTask.addEventListener('keyup', filterTasks);
function filterTasks(e) {
   const text = e.target.value.toLowerCase(); 
   document.querySelectorAll('.total-task').forEach(function(task){
     const item = task.firstChild.textContent;
     if(item.toLowerCase().indexOf(text) != -1){
       task.style.display = 'block';
       console.log(item)
     } else {
       task.style.display = 'none';       
     }
   });
 }

//GET TASK FROM LOCAL STORAGE
document.addEventListener('DOMContentLoaded', (getTasks)=>{
   let tasks;
   if(localStorage.getItem('tasks') === null){
     tasks = [];
   } else {
     tasks = JSON.parse(localStorage.getItem('tasks'));
   }
   tasks.forEach(function(task){
      const list = document.createElement('li');
      list.className = 'total-task';
      list.appendChild(document.createTextNode(task));
      const link = document.createElement('a');
      link.className = 'delete-task';
      link.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>'
      taskList.style.display = 'block'     
      list.appendChild(link); 
      taskList.append(list); 
   })
})