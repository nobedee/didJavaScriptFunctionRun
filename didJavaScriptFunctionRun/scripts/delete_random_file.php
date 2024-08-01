<?php
  // delete_random_file
  // Delete rnadom file and folder created from AJAX call when page is loaded if no button or inputs clicked.
  
  // Include cleaning function.
  include("clean_random_character_function.php");
  
  $out_uri = $_SERVER["REQUEST_URI"];
  $out_query = substr($out_uri, strrpos($out_uri, "?")+1);
  $out_query = urldecode($out_query);
  /*$out_query = trim($out_query);
  $out_query = htmlspecialchars($out_query);
  $out_query = preg_replace('/[.\/=$]/', "", $out_query);*/
  $out_query = clean_random_character_function($out_query);
  
  $out_q_file = "../tmp/$out_query";
  
  if (file_exists($out_q_file . "/file.txt")) {
   shell_exec("rm -rf $out_q_file");
  }
?>