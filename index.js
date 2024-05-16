#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// initilize user ballance and password
let myBallance = 10000;
let myPassword = "ab1234";
// print a welcome message 
console.log(chalk.blue("\n\t Welcome to your ATM Machine\n"));
let key_password = await inquirer.prompt([
    {
        name: "password",
        type: "any",
        message: chalk.yellow("Enter your Password")
    }
]);
if (key_password.password === myPassword) {
    console.log(chalk.green("Your paswword is corret to login successfully."));
    let opreationanswers = await inquirer.prompt([
        {
            name: "opreation",
            type: "list",
            message: "select one option",
            choices: ["cash withdraw", "check ballance"]
        }
    ]);
    if (opreationanswers.opreation === "cash withdraw") {
        let amountAnswer = await inquirer.prompt([
            { name: "amount",
                type: "number",
                message: (chalk.yellow("Enter your Amount"))
            }
        ]);
        if (amountAnswer.amount > myBallance) {
            console.log(chalk.red("you have insufficient ballance."));
        }
        else {
            myBallance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} ,successfully withdraw`);
            console.log(chalk.green(`Your Remaining Amount is ${myBallance}`));
        }
    }
    else if (opreationanswers.opreation === "check ballance") {
        console.log(chalk.blue(`your Account Ballance is ${myBallance}`));
    }
}
else {
    console.log(chalk.red("Your Password is incorrect , Try Again!"));
}
;
