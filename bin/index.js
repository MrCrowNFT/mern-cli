import inquirer from "inquirer";
import chalk from "chalk";

async function main() {
  console.log(chalk.blueBright("WELCOME TO MERN CLI \n"));
  const answers = await inquirer.prompt([
    { name: "projectName", message: "Project Name:" },
    {
      type: "list",
      name: "languages",
      message:
        "What programming language will you use for backend and frontend (in that order)",
      choices: [
        "Typescript + Typescript",
        "Typescript + Javascript",
        "Javascript + Typescript",
        "Javascript + Javascript",
      ],
    },
    {
      type: "confirm",
      name: "useShared",
      message: "Do you want a shared folder for types?",
      when: (answers) => answers.languages === "Typescript + Typescript",
    },
  ]);
  console.log(answers);
}

main();
