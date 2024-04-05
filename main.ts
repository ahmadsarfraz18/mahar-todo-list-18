#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let condition = true;

console.log(chalk.bgCyan("\n\tWelcome to my Todos"))
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.magenta("Enter your new task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(chalk.cyan(`${addTask.task} task added successfully in your todo list`))
     let addmoreTask = await inquirer.prompt([
        {
        name: "addMore",
        type: "confirm",
        message: ("Do you want to add more tasks?"),
        default: "false",
    }
]);
condition = addmoreTask.addMore 

}
// console.log("Your updated Todo-List:" , todoList);
console.log(todoList);
