<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

 function __construct()
 {
   parent::__construct();
 }

 function index()
 	{
		//pass the page title to the view
		$header_data['title'] = 'Pill Dispenser';
   
   		$this->load->helper(array('form', 'url'));
   		$this->load->view('header_view', $header_data);
	  	$this->load->view('login_view');
 }

}

?>
