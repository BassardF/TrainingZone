function checkPwd(pwd){
	if(keys.indexOf(pwd) !== -1){
		$('#password-box').fadeOut('fast', function(){
			$('#website-box').fadeIn('fast');
		});
	}
}

function setEvents(){
	$('#password-input').keyup(function(evt){
		checkPwd(evt.target.value);
	});

	$('.unselected-header-tag-box').click(function(evt){
		$('.selected-header-tag-box').removeClass('selected-header-tag-box');
		$(this).addClass('selected-header-tag-box');
	});
}


$(document).ready(function() {
	setEvents();
});