# Did JavaScript Function Run

`Ctrl + click` to see example of [didJavaScriptFunctionRun.js](https://isocialpractice.github.io/didJavaScriptFunctionRun/)

On the server check to see if JavaScript was run in the browser. 
Creates random characters and posts them to an HTML elemement. This
can then be used in **php** to check if JavaScript was run in the browser.
It is meant for low key sites, and good for something along the
lines of a simple form submission on a **php** page where:


The main function **didJavaScriptFunctionRun()** in `didJavaScriptFunctionRun.js` will:

1. Genereates a random sequence of data
2. Uses AJAX to ouput to php
3. Makes a random php file from that ouput
4. Uses the random php file to update the form field (<em>see instructions below</em>)
5. Then in the **php** code check the value of the ` $didJavaScriptFunctionRunID ` 
variable accordingly.


## To Use:
This tool is intended to be a starting point, but can be run as is on simple **php** forms 
that use form attribute ` action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" `.
For example; to use this tool as is:

1. Clone this directory, and then copy the folder "didJavaScriptFunctionRun" 
into the root of the website. Or copy/paste below to only get "didJavaScriptFunctionRun"
folder into a directory on your machine or the root of the site: 
```markdown
mkdir didJavaScriptFunctionRun &&\
cd didJavaScriptFunctionRun &&\
curl https://codeload.github.com/nobedee/didJavaScriptFunctionRun/tar.gz/main |\
tar -xz --strip=2 didJavaScriptFunctionRun-main/didJavaScriptFunctionRun &&\
cd ..
```

2. Once the folder is in the site root paste the script below into the HTML head 
of the pages you want the tool to run. <br>
```markdown
<script src="/didJavaScriptFunctionRun/didJavaScriptFunctionRun.js"></script>
```

3. Next copy and paste the **php** code into above the HTML form element. <br>
```markdown

<?php

 // Change is to a name of a required form input.
 $name_of_required_form_field = "CHANGE_TO_REQUIRED_FORM_FIELD";
 
 // Include using absolut path from the site root.
 $did_javascript_function_run_path  = $_SERVER['DOCUMENT_ROOT'];   
 $did_javascript_function_run_path .= "/didJavaScriptFunctionRun";
 $did_javascript_function_run_PHP_FILE = $did_javascript_function_run_path . "/didJavaScriptFunctionRun.php";
 include_once($did_javascript_function_run_PHP_FILE);
 
?>
 
```

4. Next at the beginning of the HTML form element (<em>right after form opening tag</em>) paste the
copy and paste the below HTML and php elements. <br>
```markdown

<input type="text" value="<?php echo $didJavaScriptFunctionRunID; ?>" disabled style="display: none; border:none" id="didJavaScriptFunctionRunID" name="didJavaScriptFunctionRunID"> 
<script>{let didJavaScriptFunctionRunCheck_ID = document.getElementById("didJavaScriptFunctionRunID"); 
 didJavaScriptFunctionRunCheck_ID.removeAttribute("disabled");let checkSessionDidJavaScriptFunctionRun = sessionStorage.getItem("didJavaScriptRun");if (checkSessionDidJavaScriptFunctionRun == null) { sessionStorage.setItem("didJavaScriptRun", "1"); didJavaScriptFunctionRun();} else { sessionStorage.removeItem("didJavaScriptRun"); let essionDidJavaScriptFunctionRunCheck_randomCharacters = sessionStorage.getItem("didJavaScriptFunctionRunCheck_randomCharacters"); document.getElementById("didJavaScriptFunctionRunID").setAttribute("value", sessionDidJavaScriptFunctionRunCheck_randomCharacters); }}</script>  
 
```

5. Then lastly paste or use a variation of the php code below to verify that JavaScript 
did run on the browser. <br>
```markdown

 // Include using absolut path from the site root.
 $did_javascript_function_run_path  = $_SERVER['DOCUMENT_ROOT'];   
 $did_javascript_function_run_path .= "/didJavaScriptFunctionRun"; 
 if (file_exists("$did_javascript_function_run_path/tmp/$didJavaScriptFunctionRunID/file.txt")) {  
  // Blocks where JavaScript did run.
  // Remove the random files created.
  `rm "$did_javascript_function_run_path/tmp/$didJavaScriptFunctionRunID/file.txt"`;
  `rmdir "$did_javascript_function_run_path/tmp/$didJavaScriptFunctionRunID"`;  
  // CHANGE
  // mail("john@johns-book.com", "Web Comment", $comment, $email);
  // mail("name@example.us", "Web Comment", $comment, $email);
  }  else {
  // Blocks where JavaScript did not run.
  // CHANGE
  // mail("john@johns-book.com", "Web Comment", "no", $email);  
  echo "JavaScript did not run.";
 }
 
```
