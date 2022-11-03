var fileGenerator = require("./filegenerator");
var fs = require("fs");
var inquirer = require('inquirer');

//Questions//

 const questions=[
    {

    type: "input",
    message:"what is the title of your repository?",
    name: "title",

},{
    type: "input",
    message: "what is your Github user name? ",
    name: "userName"
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
    message: "instructions 1 (1/3).",
    name: "contents1",
},{
    type: "input",
    message: "instructions 2 (2/3).",
    name: "contents2",
},{
    type: "input",
    message: "instructions 3 (3/3).",
    name: "contents3",
},{
    type: "input",
    message: "user story 1 (1/9).",
    name: "userstory1",
},{
    type: "input",
    message: "user story 2 (2/9).",
    name: "userstory 2",
},{
    type: "input",
    message: "user story 3 (3/9).",
    name: "userstory3",
},{
    type: "input",
    message: "user story 4 (4/9).",
    name: "userstory4",
},{
    type: "input",
    message: "user story 5 (5/9).",
    name: "userstory5",
},{
    type: "input",
    message: "user story 6 (6/9).",
    name: "userstory6",
},{
    type: "input",
    message: "user story 7 (7/9).",
    name: "userstory7",
},{
    type: "input",
    message: "user story 8 (8/9).",
    name: "userstory8",
},{
    type: "input",
    message: "user story 9 (9/9).",
    name: "userstory9"
},{
    
    type: "input",
    message: "Please describe the repository.",
    name: "description"
},{
    type: "input",
    message: "State your accomplishments.",
    name: "accomplishments",
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