<?php

class Hello {
	var $message;
	
	function __construct() {
		$this->message = "Hello World from PHP!";
	}
	
	/**
	 * 
	 * Echo the contents of instance variable message.
	 */
	function prnt_message() {
		echo $this->message;
	}
}
?>