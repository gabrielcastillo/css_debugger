/*
	Simple Jquery CSS Debugger;
	Css code used from CSS-Tricks.com
*/
jQuery(document).ready(function(){

	html  = '<select id="debugger_setting">';
	html 	+= '<option value="off"';
	html	+= '>Debug Off</option>';
	html 	+= '<option value="on"';
	html	+= '>Debug On</option>';
	html	+= '</select>';

	jQuery('body').after(html);
	
	var set_style = '<style type="text/css">#debugger_setting { position:fixed; bottom:40px; left:10px; width:110px; background:#E94522; color:#ffffff; font-weight:bolder; border:1px solid #111111; text-shadow: 1px 1px 2px #222222;filter: dropshadow(color=#222222, offx=1, offy=1);}</style>';
	jQuery('head').append(set_style);

	jQuery('#debugger_setting').change(function(){
		var setting = jQuery(this).val();
		
		if(setting == 'on'){
			html = "<style id=\"debugger\" type=\"text/css\">* *:hover { border:2px solid #89A81E }* * *:hover { border:2px solid #F34607 }* * * *:hover { border:2px solid #5984C3 }* * * * *:hover { border:2px solid #CD1821 }* * * * * *:hover { border:2px dotted #89A81E }* * * * * * *:hover { border:2px dotted #F34607 }* * * * * * * *:hover { border:2px dotted #5984C3 }* * * * * * * * *:hover { border:2px dotted #CD1821 }</style>";
			jQuery('head').append(html);
		}

		if(setting == 'off'){
			jQuery('#debugger').remove();
		}
	});

});