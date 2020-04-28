const inquirer = require("inquirer");
const fs = require("fs");
const CURR_DIR = process.cwd();
const NAME_REGEX = /^([A-Za-z\-\_\d])+$/;
const CHOICES_Q1 = fs.readdirSync(`${__dirname}/templates`);

(async () => {
  //  Question 1
  const QUESTIONS_1 = [
    {
      name: "project-language",
      type: "list",
      message:
        "Choose a language for project template would you like to generate?",
      choices: CHOICES_Q1
    }
  ];

  const ans1 = await inquirer.prompt(QUESTIONS_1);

  // Question 2
  const QUESTIONS_2 = [
    {
      name: "project-choice",
      type: "list",
      message: "What project template would you like to generate?",
      choices: fs.readdirSync(
        `${__dirname}/templates/${ans1["project-language"]}`
      )
    },
    {
      name: "project-name",
      type: "input",
      message: "Enter Project name:",
      validate: function(input) {
        if (NAME_REGEX.test(input)) return true;
        else
          return "Project name may only include letters, numbers, underscores and hashes.";
      }
    }
  ];

  const ans2 = await inquirer.prompt(QUESTIONS_2);

  return { ...ans1, ...ans2 };
})()
  .then(answers => {
    const languageChoice = answers["project-language"];
    const projectChoice = answers["project-choice"];
    const projectName = answers["project-name"];
    const templatePath = `${__dirname}/templates/${languageChoice}/${projectChoice}`;
    fs.mkdirSync(`${CURR_DIR}/${projectName}`);
    createDirectoryContents(templatePath, projectName);
  })
  .catch(console.error);

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    const stats = fs.statSync(origFilePath);
    if (stats.isFile()) {
      let contents = fs.readFileSync(origFilePath, "utf8");
      let projectName = contents.match(/%(.*?)%/g);
      if (projectName)
        for (const rep of projectName)
          contents = replaceAll(contents, rep, newProjectPath);
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
}

function replaceAll(message, search, replacement) {
  return message.split(search).join(replacement);
}
