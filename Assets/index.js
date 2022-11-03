var fileGenerator = require("./filegenerator");
var fs = require("fs");
var inquirer = require('inquirer');

//Questions//

let questions=[
    {

    type: "input",
    message:"what is the title of your repository?",
    name: "title",

},{
    type: "input",
    message: "what is your Github user name? ",
    name: "username"
},{
    type: "input",
    message: "Please give your GitHub profile link.",
    name: "GitHub"
},{
    type: "input",
    message: "What is your email?",
    name: "email"
},{
    type:"list",
    name:"license",
    message:"Please select which license you would like to use.",
    choices : [
        "APACHE 2.O",
        "BSD 3",
        "GVL-GPL 3.0",
        "MIT",
        "None"
    ],
},{
    type: "input",
    message: "Please describe the repository.",
    name: "description"
},{
    type: "input",
    message: "State your accomplishments.",
    name: "accomplish"
},{
    type: "input",
        message: "Please state your goals.",
        name: "Goals"
}
];

// Function to write to my ReadMe.md file. //
inquirer.prompt(questions).then(function(response) {
    console.log(response);
    
     var content = fileGenerator(response);
     console.log(content);
      fs.writeFile("./ReadMe.md", content, function(err){
          if (err) throw err
          console.log("success");
      });
 } ); 