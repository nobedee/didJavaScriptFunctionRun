// deleteTmpDidJavaScriptFunctionRun
// Deletes the tmp elements if no input or button elements were clicked.

// Delete tmp items when page closes 
var formSubmittedDidJavaScriptFunctionRun = sessionStorage.getItem("formSubmittedDidJavaScriptFunctionRun");
 if (formSubmittedDidJavaScriptFunctionRun != null) {
  let submitButtonDidJavaScriptRun = document.getElementById("submitButtonDidJavaScriptRun");
  submitButtonDidJavaScriptRun.setAttribute("disabled", true); 
 }
 
 var pageLoadsDidJavaScriptFunctionRun = sessionStorage.getItem("pageLoadsDidJavaScriptFunctionRun");;
 function storagePageLoadsDidJavaScriptFunctionRun() {
  pageLoadsDidJavaScriptFunctionRun= sessionStorage.getItem("pageLoadsDidJavaScriptFunctionRun");
  if (pageLoadsDidJavaScriptFunctionRun == null) {
   sessionStorage.setItem("pageLoadsDidJavaScriptFunctionRun", 0);
   pageLoadsDidJavaScriptFunctionRun = sessionStorage.getItem("pageLoadsDidJavaScriptFunctionRun");
  } else {
   sessionStorage.setItem("pageLoadsDidJavaScriptFunctionRun", Number(pageLoadsDidJavaScriptFunctionRun) + 1);
   pageLoadsDidJavaScriptFunctionRun = sessionStorage.getItem("pageLoadsDidJavaScriptFunctionRun");
  }
 }
 function cleanTmpDidJavaScriptFunctionRun() {  
  storagePageLoadsDidJavaScriptFunctionRun();
  pageLoadsDidJavaScriptFunctionRun = sessionStorage.getItem("pageLoadsDidJavaScriptFunctionRun");
  let outxmlhttp = new XMLHttpRequest();
  outxmlhttp.onload = function() {
   console.log("removing tmp files");
  };  
  if (pageLoadsDidJavaScriptFunctionRun == 0) {
   outxmlhttp.open("GET", "/didJavaScriptFunctionRun/scripts/delete_random_file.php?" + didJavaScriptFunctionRunCheck_randomCharacters, true);
   outxmlhttp.send();   
  } 
 }
 
 if (pageLoadsDidJavaScriptFunctionRun == null) {    
  window.addEventListener("beforeunload", cleanTmpDidJavaScriptFunctionRun);  
 } else {
  window.removeEventListener("beforeunload", cleanTmpDidJavaScriptFunctionRun);
 }
 
 var allButtonsDidJavaScriptFunctionRun, allInputsDidJavaScriptFunctionRun;
 function turnOffCleanTmpDidJavaScriptFunctionRun(curEl) {
  let len = curEl.length;
  if (len >= 1) {
   for (i = 0; i < len; i++) {
    curEl[i].addEventListener("click", storagePageLoadsDidJavaScriptFunctionRun);
   }
  }
 } 
 allInputsDidJavaScriptFunctionRun = document.getElementsByTagName("input");
 turnOffCleanTmpDidJavaScriptFunctionRun(allInputsDidJavaScriptFunctionRun);
 allButtonsDidJavaScriptFunctionRun = document.getElementsByTagName("button");
 turnOffCleanTmpDidJavaScriptFunctionRun(allButtonsDidJavaScriptFunctionRun);