/*
  *             
  */
  
 $(function() {
  
  /* deals with the funcitons for editing a patients record */
  $(".inline_pat_edit").editable("http://localhost/dispenser/patient_controller/pat_update", { 
		id			: 'elementid',
		name		: 'newvalue',	 
	  	width 		: 200,
	  	style  		: 'inherit',
	  	tooltip   	: 'Click to edit...',
	  	submitdata 	: function (id, value) 	{
		  				return {
								table		: 'TBpatient',
								record_id	: $('ul.PAT_root').attr('id'),
								key			: 'PATid'
								};			}
								
  });
  
  /* deals with the functions for editing a pateints prescription */
  $(".inline_sub_edit").editable("http://localhost/dispenser/patient_controller/pat_update", { 
	  id 			: 'elementid',
	  name 			: 'newvalue',
	  width 		: 25,
	  style  		: "inherit",
	  tooltip   	: 'Click to edit...',
	  submitdata 	: function (id, value) 	{
		  				return {
								table		: 'TBprescription',
								record_id	: $('ul.PRE_root').attr('id'),
								key			: 'PREid'
								};			}
  });
  /* deals with the functions for editing duration */
  $(".inline_sub_edit_duration").editable("http://localhost/dispenser/prescription_controller/pre_update", { 
	  	id 			: 'elementid',
	  	name		: 'newvalue',
	  	style  		: "inherit",
	  	type   		: 'select',
	  	data   		: " {'1':'1','2':'2','3':'3','4':'4','5':'5'}",
	 	tooltip   	: 'Click to edit...',
	  	submitdata 	: function (id, value) 	{
		  				return {
								table		: 'TBprescription',
								record_id	: $('ul.PRE_root').attr('id'),
								key			: 'PREid'
								};			},
	  	submit : 'OK'
  });
  /* deals with the functions for editing the dispensor assigned to a user */
  $(".inline_disp_edit").editable("http://localhost/dispenser/patient_controller/pat_update", { 
	 	id 			: 'elementid',
	  	name 		: 'newvalue',
	  	width 		: 50,
	  	style  		: "inherit",
	  	tooltip   	: 'Click to edit...',
	  	submitdata 	: function (id, value) 	{
		  				return {
								table		: 'TBdispenser',
								record_id	: $('ul.disp_root').attr('id'),
								key			: 'DISid'
								};			}
  });
});