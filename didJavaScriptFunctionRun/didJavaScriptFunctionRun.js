// didJavaScriptFunctionRun
// Check if a JavaScript function was run in the browser and return 1 (yes) or 0 (no).

// Global variables with unlikely names.
var didJavaScriptFunctionRunCheck, didJavaScriptFunctionRunCheck_randomCharacters, didJavaScriptFunctionRunCheck_ID;

function didJavaScriptFunctionRun() {
 // define the global variables 
 didJavaScriptFunctionRunCheck_randomCharacters = ""; 
 didJavaScriptFunctionRunCheck_ID = document.getElementById("didJavaScriptFunctionRunID"); 
 // make a random sequence using default parameters
 var makeRandomSequence = function(
  randomLength = 8, 
  randomData = [ "digits", "lowerCaseCharacters", "upperCaseCharacters" ]
 ) {
  let randomObject = {
   "digits": "0123456789",
   "lowerCaseCharacters": "abcdefghijklmnopqrstuvwxyz",
   "upperCaseCharacters": "ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
  };  
  for (i = 0; i < randomLength; i++) {
   let randomDataType = // 0 to 2, or 0 to lenth of parameter randomData
    Math.floor(Math.random() * randomData.length);
    
   let randomDigit    = // random integer from length of randomObject property
    Math.floor(Math.random() * randomObject[randomData[randomDataType]].length);
                            // [ object ]  [ array    [ index ]   in   ^ ------ ]
    
   didJavaScriptFunctionRunCheck_randomCharacters  += // use above elements to append each random character
    randomObject[randomData[randomDataType]][randomDigit];
  }
 }; 
 
 // send to php to check
 let runCount = 0;
 var runCheckJSXMLHttp = function(curFile) {
  // redefine with each call
  didJavaScriptFunctionRunCheck_randomCharacters = ""; 
  // call to make random sequence
  makeRandomSequence(8, ["lowerCaseCharacters", "upperCaseCharacters"]);
  // store output in variable  
  let outRandomSequence = "";
  let checkJSxmlhttp = new XMLHttpRequest();
  checkJSxmlhttp.onreadystatechange = function() {   
   if (this.readyState == 4 && this.status == 200) {
    if (runCount == 0) {     
     if (this.responseText.indexOf("yes") > -1) {
      didJavaScriptFunctionRunCheck = 1;     
     } else {
      didJavaScriptFunctionRunCheck = 0;
     }    
    } else if (runCount == 1) {
     outRandomSequence = "";
     if (this.responseText) {
      outRandomSequence = "";
      didJavaScriptFunctionRunCheck_ID.value = this.responseText;
      didJavaScriptFunctionRunCheck_ID.style.display = "";
      // log run result to console
      console.log(this.responseText);
     }
    }
   }
  };
  if (runCount == 0) {
   outRandomSequence = "?" + didJavaScriptFunctionRunCheck_randomCharacters; 
  } else {
   outRandomSequence = "";
  }
  checkJSxmlhttp.open("GET", curFile + outRandomSequence, true);
  checkJSxmlhttp.send();
  };
 
 setTimeout(function() {
  runCheckJSXMLHttp("/didJavaScriptFunctionRun/scripts/make_random_file.php");
 }, 100);
 setTimeout(function() {
  runCount = 1;
  runCheckJSXMLHttp(
   "https://practicecode.xyz/didJavaScriptFunctionRun/tmp/" + 
   didJavaScriptFunctionRunCheck_randomCharacters + 
   "/file.txt");
 }, 1000); 
}

// Call this function where you want it to check, followed by a condition to check. 
// Or - copy/paste  lines in comment below:
/******************************************************************************

 // call repos root function
 didJavaScriptFunctionRun();
 
 // check if it was run in the browser 
 if ( didJavaScriptFunctionRunCheck == 1 ) {
  console.log(outMsg);
 } else { // exit function
  setTimeout( function() { return; }, 500);
 }

******************************************************************************
*******************************************************************************/