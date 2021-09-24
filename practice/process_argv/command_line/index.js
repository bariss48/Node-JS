const express = require('express');
const chalk = require('chalk');
const yargs = require('yargs');
const { demandOption } = require('yargs');
const task_route = require('./tasks.js')
const app = express();

yargs.command({
   command: 'add',
   describe: 'adding a task',
   builder:{
      title:{
         describe: 'task title',
         demandOption: true,
         type: 'string'
      },
      body:{
         describe: 'value of task',
         demandOption: true,
         type: 'string'
      }
   },
   handler: function (argv){
     task_route.addTask(argv.title , argv.body);
   }
})

yargs.command({
   command: 'delete',
   describe: 'deleting a task',
   builder: {
      title: {
         describe: "task title",
         demandOption: true,
         type: 'string'
      }
   },
   handler: function (argv) {
        task_route.delete_task(argv.title);
   }
})

yargs.command({
   command: 'read',
   describe: 'reading a task',
   handler: function (){
      console.log('reading a task!');
   }
})

yargs.command({
   command: 'list',
   describe: 'listing a task',
   handler: function (){
      task_route.listTasks();
   }
})

yargs.parse();

app.listen(3000, () => {
   console.log("server active");
});
