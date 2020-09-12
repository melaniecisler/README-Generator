var inquirer = require("inquirer");
var generatorMarkdown = require("./generateMarkdown")
var fs = require("fs");

//user questions
  var questions = [
    {
      type: "input",
      message: "What is your project title?",
      name: "Title"
    },
    {
        type: "list",
        message: "What type of License would you like?",
        name: "License",
        choices: ["MIT   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)" , 
        "ISC   ISC [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", 
        "Mozilla    MPL 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"]
    },
    {
      type: "input",
      message: "What is your project Description?",
      name: "Description"
    },
    {
      type: "input",
      message: "What is your Table of Contents?",
      name: "Contents"
    },
    {
        type: "input",
        message: "What is your Installation?",
        name: "Installation"
    },
    {
        type: "input",
        message: "What is your Usage?",
        name: "Usage"
    },
    
    {
        type: "input",
        message: "Who Contributed?",
        name: "Contributing"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "UserName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email"
    },
    {
        type: "input",
        message: "What are your Tests?",
        name: "Tests"
    },
    {
        type: "input",
        message: "Any Questions?",
        name: "Questions"
      }
  ];

  
  //Write to File

  function writeToFile(fileName, data) {

fs.writeFile("./demo/"+fileName, data, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("Success! wrote to " + fileName);
})
  }

//initialize function
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("generateREADME.md", generatorMarkdown(data));
    })
        }
  
//run
init();

//MIT license: License: MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//ISC license: License: ISC [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//Mozilla License: License: MPL 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)