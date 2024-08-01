# Did JavaScript Function Run

`Ctrl + click` to see example of [didJavaScriptFunctionRun.js](https://jhauga.github.io/htmlpreview.github.com/?https://github.com/nobedee/didJavaScriptFunctionRun/blob/main/index.html)

On the server check to see if JavaScript was run in the browser. 
Creates random characters and posts them to an HTML elemement. This
can then be used in **php** to check if JavaScript was run in the browser.
It is meant for low key sites, and good for something along the
lines of a simple form submission on a **php** page where:


<details>
<summary>The main function <strong>didJavaScriptFunctionRun()</strong> in "didJavaScriptFunctionRun.js" will: </summary>

1. Genereates a random sequence of data
2. Uses AJAX to ouput to and store form data for php
3. Makes a random php file from that ouput
4. Uses the **make_random_file.php** file to update the form field (<em>see instructions below</em>)
5. Then in the php code check the value of the ` $didJavaScriptFunctionRunID ` 
variable accordingly.

</details>


<details>
<summary>The <strong>make_random_file.php</strong> file in the "scripts" folder will: </summary>

1. Use query string from the random characters generated in didJavaScriptFunctionRun() call
to create random files and folders.
   - **NOTE** - the query string is cleaned, but please report any vulnerablities found.
2. Use these files to verify JavaScript ran.
3. Delete the duplicate of **template_check.php**
4. Delete any random folders in the "tmp" folder that are 1 day or older
   - **NOTE** - these are only deleted when the page is opened in a browser so you may 
     want to periodically check and see if all random folders are deleted.   
   - Please report any issues or vulnerabilites with this.
5. After 5 minutes delete random folder and file created in "tmp" folder.
   - **NOTE** - this will start a process on the server for 5 minutes.
   - Please report any issues or vulnerabilites with this.

</details>


<details>
<summary>The <strong>template_check.php</strong> file in the "scripts" folder will: </summary>

1. Uses the random characters from make_random_file.php 
to output contents of text file (*should be yes*) for initial JavaScript check
2. Will delete the text file afterwards.

</details>

<details>
<summary>The <strong>deleteTmpDidJavaScriptFunctionRun.js</strong> file in the "scripts" folder will: </summary>
1. Make a sessionStorage variable to is set to 0 on first page load.
2. Adds an event listenr to the HTML window object that checks for page close or reload.
3. Adds an event listener to HTML input and button elements that removes the window listener from "2".
4. If no button or input elements have been clicked then AJAX is used to call **delete_random_file.php**,
which will delete the random tmp files that were created for JavaScript check.
</details>

<details>
<summary>The <strong>delete_random_file.php</strong> file in the "scripts" folder will: </summary>

1. Be called when the window closes or page is refreshed after the form is submitted.
2. Delete the tmp files if they still exists on the server.
   - this will end any processes that have been prolonged in regards to removing the tmp files.
</details>

## Instructions:
This tool is intended to be a starting point, but can be run as is on a simple php form
that uses the form attribute ` action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" `.
To use this tool as is or - to get started:

1. **Step 1** - Clone this repository, and then **copy** the 
folder "**didJavaScriptFunctionRun**" into the **root** of the website. 
Or copy/paste below to only get the repositories' folder "didJavaScriptFunctionRun"
into a directory on your machine or directly into the site root:
```markdown
mkdir didJavaScriptFunctionRun &&\
cd didJavaScriptFunctionRun &&\
curl https://codeload.github.com/nobedee/didJavaScriptFunctionRun/tar.gz/main |\
tar -xz --strip=2 didJavaScriptFunctionRun-main/didJavaScriptFunctionRun &&\
cd ..
```

2. **Step 2** - Once the folder is in the site root paste the script below into the **HTML head**
of the pages you want the tool to run. <br>
```markdown
<script src="/didJavaScriptFunctionRun/didJavaScriptFunctionRun.js"></script>
```

3. **Step 3** - Next copy and paste the below php code **above** the HTML **form element**. <br>
```markdown

<?php

 // Change to a name of a required form element.
 $name_of_required_form_field = "CHANGE_TO_REQUIRED_FORM_FIELD";
 
 // Include didJavaScriptFunctionRun.php using absolut path from the root to didJavaScriptFunctionRun folder.
 $did_javascript_function_run_path  = $_SERVER['DOCUMENT_ROOT'];   
 $did_javascript_function_run_path .= "/didJavaScriptFunctionRun";
 $did_javascript_function_run_PHP_FILE = $did_javascript_function_run_path . "/didJavaScriptFunctionRun.php";
 include_once($did_javascript_function_run_PHP_FILE);
 require($did_javascript_function_run_path . "/scripts/clean_random_character_function.php");
 
?>
 
```

4. **Step 4** - At the **beginning** of the HTML **form element** (<em>right after form opening tag</em>) 
copy and paste the below HTML, JavaScript, and php elements. <br>
```markdown

 <input type="text" value="<?php echo $didJavaScriptFunctionRunID; ?>" disabled style="display: none; border:none" id="didJavaScriptFunctionRunID" name="didJavaScriptFunctionRunID"> 
 <script>{let didJavaScriptFunctionRunCheck_ID = document.getElementById("didJavaScriptFunctionRunID"); 
 didJavaScriptFunctionRunCheck_ID.removeAttribute("disabled");let checkSessionDidJavaScriptFunctionRun = sessionStorage.getItem("didJavaScriptRun");if (checkSessionDidJavaScriptFunctionRun == null) { sessionStorage.setItem("didJavaScriptRun", "1"); didJavaScriptFunctionRun();} else { sessionStorage.removeItem("didJavaScriptRun"); let sessionDidJavaScriptFunctionRunCheck_randomCharacters = sessionStorage.getItem("didJavaScriptFunctionRunCheck_randomCharacters"); document.getElementById("didJavaScriptFunctionRunID").setAttribute("value", sessionDidJavaScriptFunctionRunCheck_randomCharacters); }}</script>  
 
```

   - **Step 4b** <em>optional</em> - Give the submit button's id the value of "formSubmittedDidJavaScriptFunctionRun":
```markdoen
 id="formSubmittedDidJavaScriptFunctionRun"
```
   - Or add to existing id for submit button:
```markdown
 formSubmittedDidJavaScriptFunctionRun
```

5. **Step 5** - Paste or use a variation of the below php code somewhere **after** the 
HTML **form element** to verify that JavaScript did run in the browser. <br>
```markdown

<?php

 // Making sure to include the absolut path from site root to didJavaScriptFunctionRun folder.
 // Set path.
 $did_javascript_function_run_path  = $_SERVER['DOCUMENT_ROOT'];   
 $did_javascript_function_run_path .= "/didJavaScriptFunctionRun"; 
 require($did_javascript_function_run_path . "/scripts/did_java_script_function_run.php");
 
 // Check results from php script required above and run php accordingly.
 if ($didJavaScriptFunctionRun == 1) {
  // ***********************************************************************************
  // START - PHP AS NEEDED ************************************************************* 
  // CHANGE  -  PHP when JavaScript runs in browser.
  // mail("CHANGE@example.us", "Web Comment", $comment, $email);
  // ******************************************************************

  // NOTE - if no submit button id then add one and change it here or a variation of this method.
  //        if not disabled form will not submit on second press and run will created random folder,
  //        leaving them there for a day before deleting.
 
  // END - PHP AS NEEDED *************************************************************** 
  // ***********************************************************************************
  // NOTE - best to keep below lines, ensuring that the submit button has same id value.
  echo <<< DISABLE_SUBMIT_DID_JAVASCRIPT_FUNCTION_RUN
   <script>
    sessionStorage.setItem("formSubmittedDidJavaScriptFunctionRun", "1");
                                                               // CHANGE TO SUBMIT BUTTON ID
    var submitButtonDidJavaScriptRun = document.getElementById("submitButtonDidJavaScriptRun");
    if (submitButtonDidJavaScriptRun) {
     setTimeout(function() {
      submitButtonDidJavaScriptRun.setAttribute("disabled", true);
     }, 500);
    }
   </script>
DISABLE_SUBMIT_DID_JAVASCRIPT_FUNCTION_RUN;
 }  else {
  // ***********************************************************************************
  // START - PHP AS NEEDED ************************************************************* 
  // Blocks where JavaScript did not run.
  
  // CHANGE 
  // echo "JavaScript did not run.";
  echo "";
  
  // END - PHP AS NEEDED *************************************************************** 
  // ***********************************************************************************  
 }
?>
 
```

6. **Step 6** - Lastly paste the below **script** somewhere **after** step 5, around the **bottom** of page. This deletes 
all tmp elements if no input or button elements have been clicked so process from "make_random_file.php" won't continue to 
run after the page has closed.<br>
```markdown

<script src="/didJavaScriptFunctionRun/scripts/deleteTmpDidJavaScriptFunctionRun.js"></script>  


```
