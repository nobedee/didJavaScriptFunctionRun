<?php
  // make_random_file
  // Make random file and determine if email should be sent.
  
  $uri = $_SERVER["REQUEST_URI"];
  $query = substr($uri, strrpos($uri, "?")+1);
  $query = urldecode($query);
  $query = trim($query);
  $query = htmlspecialchars($query);
  $query = preg_replace('/[.\/]/', "", $query);
  $q_file = "../tmp/$query.txt";
  
  `mkdir ../tmp/$query`;
  `echo yes> $q_file`;   
  `echo $query> ../tmp/$query/file.txt`;
  
  $template_check = file_get_contents("template_check.php");
  
  $random_file_name = str_replace("CHANGE_NAME", $q_file, $template_check);
  $random_variable = str_replace("\$_php_variable", "\$$query", $random_file_name);
  
  $random_php_file_name = "../tmp/$query.php";
  $random_php_file = fopen($random_php_file_name, "w");
  fwrite($random_php_file, $random_variable);
  fclose($random_php_file);
  
  include $random_php_file_name;
  
  echo $_did_javascript_function_run_Confirmation;
  
  `rm $random_php_file_name`; 
  
  do {
   if (file_exists("../tmp/$query/file.txt")) {
    sleep(1);
    `rm "../tmp/$query/file.txt"`;
    `rmdir "../tmp/$query/"`;    
    break;
   }
   sleep(1);
  } while(!file_exists("../tmp/$query/file.txt")); 
  
  
?>
