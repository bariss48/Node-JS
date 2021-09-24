const { notEqual } = require('assert');
const fs = require('fs');
const chalk = require('chalk');

const getTasks = function (){
    return ''
}

const addTask = function (title, body) {
   const tasks = loadTasks()
   const duplicateTasks = tasks.filter(function (task_array) {
      return task_array.title === title
   })    
   if (duplicateTasks.length === 0) {
    tasks.push({
        title: title,
        body: body
    })   
      saveTasks(tasks);
      console.log(chalk.green.inverse('Success You are added a new task!'));
    } else {
        console.log(chalk.red.inverse('You are using same title change it!'));
    }
   }

   debugger
  
   const delete_task = function (title){
       const tasks = loadTasks()
       console.log(tasks);
       const find_remove_item = tasks.filter(function (task_array) {
           return task_array.title !== title
       })
       if(tasks.length > find_remove_item.length){
           console.log(chalk.green.inverse('task deleted'));
       }else{
           console.log(chalk.red.inverse('task not deleted'))
       }
       console.log(find_remove_item);
       saveTasks(find_remove_item);
   }

   const listTasks = function(){
      const tasks = loadTasks()
      console.log(chalk.green.inverse('All Tasks Here:'));
      tasks.forEach(element => {
          console.log('<--Tasks-->'+' '+element.title+' '+'<--Body-->'+' '+element.body);
      });
   }


   const saveTasks = function(task_array){
     const dataJSON = JSON.stringify(task_array);
     fs.writeFileSync('tasks.json',dataJSON);
   }

const loadTasks = function () {
   try{
    const dataBuffer = fs.readFileSync('tasks.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
   }catch(err){
       return []
   }
 
}

module.exports = {
    getTasks: getTasks,
    addTask: addTask,
    delete_task: delete_task,
    listTasks: listTasks,
}