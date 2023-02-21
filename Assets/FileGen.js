function fileGenerator(response) 
{
    var content = `# ${response.title}
##### [${response.userName}](${response.GitHub})[Email Me @](${response.email}) 
#### Readme generator [License used]  ${response.license} 

## Table of Contents
    - [Repository Description](#Repository-Description)
    - [User story](#User-Story)
    - [Installation Instructions](#Instructions)
    - [Accomplishments](#Accomplishments)
    - [Repositiory Goals ](#Goals)
 
# Repository Description
###### [Back to Table of Contents](#Table-of-Contents)
${response.description}

###### [Back to Table of Contents](#Table-of-Contents)
## User Story

1.${response.userstory1}
2.${response.userstory2}
3.${response.userstory3}
4.${response.userstory4}
5.${response.userstory5}
6.${response.userstory6}




##  Instructions
###### [Back to Table of Contents](#Table-of-Contents)
1.  ${response.contents1}
2.  ${response.contents2}
3.  ${response.contents3}


## Overview: What We Accomplished!
### Accomplishments [Back to Table of Contents](#Table-of-Contents)
${response.accomplishments}


## Repositiory Goals Criterea
###### [Back to Table of Contents](#Table-of-Contents)
${response.Goals}

## License
This application is covered under ${response.license} license.
    
    Copyright (c) [2022] [Je'Rontai Mcfee]

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    
    return content;
};
module.exports = fileGenerator;