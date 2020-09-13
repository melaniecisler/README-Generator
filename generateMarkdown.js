// function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.Title}
    
    (https://github.com/${data.UserName}/${data.Title})

  # License
    ${data.License}

  # Description
    ${data.Description}
    
  # Table of Contents
    ${data.Contents}

    [Installation](#installation)

    [Usage](#usage)

    [License](#license)

    [Contributing](#contributing)

    [UserName](#userName)

    [Email](#email)

    [Tests](#tests)

    [Questions](#questions)

  # Installation

      You must run these applications for proper installation: ${data.Installation}

  # Usage

      This is for: ${data.Usage}

  # License

      This is licensed under: ${data.License}

  # Contributions

      Contributors: ${data.Contributing}

  # Tests

      To run tests provide the following: ${data.Tests}
 
  # Questions

      Direct any follow up questions to my  github at   ${"https://github.com/" + data.UserName} or at ${data.Email} 
    `
  }
  
  module.exports = generateMarkdown;
  
  //title, description, contents, installation, usage, license, contributing, userName, email, tests, questions