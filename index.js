#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.green("\n\ Q1: Which of the following is the correct way to declare a variable with a type annotation in TypeScript?"),
        choices: ["var x: number = 10",
            "int x = 10",
            "number x = 10",
            "x: number = 10"]
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.magenta("\n\ Q2: How can you create a strongly typed array of numbers in TypeScript?"),
        choices: ["let numbers: Array<number> = [1, 2, 3]",
            "let numbers: number[] = [1, 2, 3]",
            "let numbers: [number] = [1, 2, 3]",
            "Both A and B"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.red("\n\ Q3:what is the result of the expression ` x === y` where x: number = 5 & y: string = `5`?"),
        choices: ["true",
            "false",
            "Error: Type mismatch",
            "5"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.yellow("\n\ Q4: Which statement is true regarding case sensitivity in TypeScript?"),
        choices: ["Variable names `myVariable` and `myvariable` refer to the same variable.",
            "Function names `MyFunction` and `myfunction` are interchangeable in TypeScript.",
            "TypeScript is case-insensitive for variable, function, and class names",
            "TypeScript is case-sensitive, meaning` MyClass` and `myclass` are different identifiers"]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.green("\n\ Q5: Which of the following statements is true regarding logical operators in TypeScript?"),
        choices: ["The `&&` operator returns `true` if at least one of its operands is `true`",
            "The` || `operator returns` true` if both of its operands are `true`",
            "The `!` operator inverts the Boolean value of its operand",
            "The` &&` operator returns` false` if both of its operands are` true`"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "var x: number = 10":
        console.log("1. Correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "Both A and B":
        console.log("2. Correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "false":
        console.log("3. Correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case "TypeScript is case-sensitive, meaning` MyClass` and `myclass` are different identifiers":
        console.log("4. Correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "The `!` operator inverts the Boolean value of its operand":
        console.log("5. Correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(chalk.red(`Score: ${score}`));
