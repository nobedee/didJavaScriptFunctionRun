# Did JavaScript Function Run

`Ctrl + click` to see example of [didJavaScriptFunctionRun.js](https://isocialpractice.github.io/didJavaScriptFunctionRun/)

On the server check to see if JavaScript was run in the browser. 
Stores results in a variable **didJavaScriptFunctionRunCheck** with 
a value of 1 if JavaScript was run in the browser, and 0 if JavaScript 
was not run in the browser. This will enable server code to respond 
accordingly. It is meant for low key sites, and good for something along the
lines of a simple form submission on a **php** page where:
``` 
 <input id="didJavaScriptFunctionRunCheck" name="didJavaScriptFunctionRunCheck">
 
 if (didJavaScriptFunctionRunCheck == 1) {
   document.getElementById("someHTMLForm").setAttribute(
    "action", "server_script.php");
 } else {
   // Change time as needed.
   setTimeout( function() { return; }, 500);
 }
```
Will add the form action page to an HTML form element in - say - a page named "form.php".

The main function **didJavaScriptFunctionRun()** in `didJavaScriptFunctionRun.js`:

1. Genereates a random sequence of data
2. Uses AJAX to ouput to php
3. Makes a random php file from that ouput
4. Uses the random php file to out "yes", deleting it afterwards
5. Then defines the value of **didJavaScriptFunctionRunCheck** accordingly.


## To Use:
This tool only needs the folder "didJavaScriptFunctionRun" and its contents in order to work.
To use this tool:

1. Clone this directory, and then copy the folder "didJavaScriptFunctionRun" 
into the root of the website. Or copy/paste below to only get "didJavaScriptFunctionRun"
folder into a directory on your machine or the root of the site: 
```markdown
mkdir didJavaScriptFunctionRun && cd didJavaScriptFunctionRun && curl https://codeload.github.com/isocialpractice/didJavaScriptFunctionRun/tar.gz/main | tar -xz --strip=2 didJavaScriptFunctionRun-repo-main/didJavaScriptFunctionRun && cd ..
```

2. Once the folder is in the site root paste the script below into the HTML head 
of the pages you want the tool to run. <br>
```markdown
<script src="/didJavaScriptFunctionRun/didJavaScriptFunctionRun.js"></script>
```

3. Then Use the below call and condition \(edit as needed_\) to continue executing code on the server pending the value of variable **didJavaScriptFunctionRunCheck**:
```markdown
  // Call repos root function in "didJavaScriptFunctionRun" folder.
  didJavaScriptFunctionRun();
  
  // check if it was run in the browser 
  if ( didJavaScriptFunctionRunCheck == 1 ) {
   // do someting or continue script.
   // for example:
   /*************************************************
   var form = document.getElementById("someHTMLForm"); // form has no action attribute
   form.setAttribute("action", "server_script.php");
   *************************************************/   
   console.log("JavaScript did run.");
  } else { // exit function
   // console.log("JavaScript did run.");
   // setTimeout( function() { return; }, 500);
  }
```

 ## Additional_OPTIONAL
 <hr> <!-- Double underline -->
 
 paragraph_and_as_needed_OPTIONAL
 
