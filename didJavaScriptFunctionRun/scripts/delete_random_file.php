<?php
  $out_uri = $_SERVER["REQUEST_URI"];
  $out_query = substr($out_uri, strrpos($out_uri, "?")+1);
  $out_query = urldecode($out_query);
  $out_query = trim($out_query);
  $out_query = htmlspecialchars($out_query);
  $out_query = preg_replace('/[.\/]/', "", $out_query);
  $out_q_file = "../tmp/$out_query";
  
  if (file_exists($out_q_file . "/file.txt")) {
   shell_exec("rm -rf $out_q_file");
  }
?>