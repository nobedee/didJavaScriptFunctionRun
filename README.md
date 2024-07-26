# Did JavaScript Function Run

`Ctrl + click` to see example of [didJavaScriptFunctionRun.js](https://nobedee.github.io/didJavaScriptFunctionRun/)

On the server check to see if JavaScript was run in the browser. 
Creates random characters and posts them to an HTML elemement. This
can then be used in **php** to check if JavaScript was run in the browser.
It is meant for low key sites, and good for something along the
lines of a simple form submission on a **php** page where:


<details>
<summary>The main function **didJavaScriptFunctionRun()** in `didJavaScriptFunctionRun.js` will: </summary>

1. Genereates a random sequence of data
2. Uses AJAX to ouput to and store form data for php
3. Makes a random php file from that ouput
4. Uses the **make_random_file.php** file to update the form field (<em>see instructions below</em>)
5. Then in the php code check the value of the ` $didJavaScriptFunctionRunID ` 
variable accordingly.

</details>


<details>
<summary>The **make_random_file.php** file in the "scripts" folder will: </summary>

1. Use query string from the random characters generated in didJavaScriptFunctionRUn() call
to create random files and folders.
   - **NOTE** - the query string is cleaned, but please report any vulnerablities found.
2. Use these files to verify JavaScript ran.
3. Delete the duplicate of **template_check.php**
4. Delete any random folders in the "tmp" folder that are 1 day or older
   - **NOTE** - these are only deleted when the page is open in a browser so you may 
     want to periodically check and see if all random folders are deleted.   
   - Please report any issues or vulnerabilites with this.
5. After 5 minutes delete random folder and file created in "tmp" folder.
   - **NOTE** - this will start a process on the server for 5 minutes.
   - Please report any issues or vulnerabilites with this.

</details>


<details>
<summary>The **template_check.php** file in the "scripts" folder will: </summary>

1. Uses the random characters from make_random_file.php 
to output contents of text file (*should be yes*) for initial JavaScript check
2. Will delete the text file afterwards.

</details>


## Instructions:
This tool is intended to be a starting point, but can be run as is on a simple php form
that uses the form attribute ` action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" `.
To use this tool as is or to get started:

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

3. Next copy and paste the php code into above the HTML form element. <br>
```markdown

<?php

 // Change to a name of a required form element.
 $name_of_required_form_field = "CHANGE_TO_REQUIRED_FORM_FIELD";
 
 // Include didJavaScriptFunctionRun.php using absolut path from the root to didJavaScriptFunctionRun folder.
 $did_javascript_function_run_path  = $_SERVER['DOCUMENT_ROOT'];   
 $did_javascript_function_run_path .= "/didJavaScriptFunctionRun";
 $did_javascript_function_run_PHP_FILE = $did_javascript_function_run_path . "/didJavaScriptFunctionRun.php";
 include_once($did_javascript_function_run_PHP_FILE);
 
?>
 
```

4. Next at the beginning of the HTML form element (<em>right after form opening tag</em>) 
copy and paste the below HTML and php elements. <br>
```markdown

<input type="text" value="<?php echo $didJavaScriptFunctionRunID; ?>" disabled style="display: none; border:none" id="didJavaScriptFunctionRunID" name="didJavaScriptFunctionRunID"> 
<script>{let didJavaScriptFunctionRunCheck_ID = document.getElementById("didJavaScriptFunctionRunID"); 
 didJavaScriptFunctionRunCheck_ID.removeAttribute("disabled");let checkSessionDidJavaScriptFunctionRun = sessionStorage.getItem("didJavaScriptRun");if (checkSessionDidJavaScriptFunctionRun == null) { sessionStorage.setItem("didJavaScriptRun", "1"); didJavaScriptFunctionRun();} else { sessionStorage.removeItem("didJavaScriptRun"); let essionDidJavaScriptFunctionRunCheck_randomCharacters = sessionStorage.getItem("didJavaScriptFunctionRunCheck_randomCharacters"); document.getElementById("didJavaScriptFunctionRunID").setAttribute("value", sessionDidJavaScriptFunctionRunCheck_randomCharacters); }}</script>  
 
```

5. Then lastly paste or use a variation of the php code below to verify that JavaScript 
did run in the browser. <br>
```markdown

 // Making sure to include the absolut path from site root to didJavaScriptFunctionRun folder.
 $did_javascript_function_run_path  = $_SERVER['DOCUMENT_ROOT'];   
 $did_javascript_function_run_path .= "/didJavaScriptFunctionRun"; 
 if (file_exists("$did_javascript_function_run_path/tmp/$didJavaScriptFunctionRunID/file.txt")) {  
  // Blocks where JavaScript did run.
  // Remove the random files created.
  `rm "$did_javascript_function_run_path/tmp/$didJavaScriptFunctionRunID/file.txt"`;
  `rmdir "$did_javascript_function_run_path/tmp/$didJavaScriptFunctionRunID"`;  
  // CHANGE  
  // mail("CHANGE@example.us", "Web Comment", $comment, $email);
  }  else {
  // Blocks where JavaScript did not run.
  // CHANGE 
  echo "JavaScript did not run.";
  }
 
```
