$(function () {
	var nua = navigator.userAgent
	var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%')
	}
})

// Initializes the popover
// $(function () {
// 	$('[data-toggle="popover"]').popover()
// })

function switchCvv() {
	const newTitle = "The CVV Number is the 4 digit number on the front of your card.";

	$('.popover-body').toggleClass('popover-body popover-body-amex');
	$('#CVV').attr('data-original-title', newTitle);
	// document.getElementById("CVV").style.backgroundImage = "url('images/cvv-amex-2x.png')";
}


// setup
$("#submit").on("click", validateEmail);

// adds html when the notice is needed
function showInvalidNotice() {
	$("#checkEmail").append('<div id="invalidEmail" class="col-xs-6 alert alert-danger alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><strong>Invalid Email</strong></div>');
}

// validation
function validateEmail() {
	const validate_email = $('input[name=EMAIL]').val();
	console.log("fired");
	if( /(.+)@(.+){2,}\.(.+){2,}/.test(validate_email) ) {
		emailPDF();
	} else {
		showInvalidNotice();
	}
}
