$(function () {
	var nua = navigator.userAgent
	var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%')
	}
})

// Initializes the popover
$(function () {
	$('[data-toggle="popover"]').popover()
})

// CVV popover change for Amex
// function toggleDigits() {
// 	// assigning #cardNumber to a variable
// 	const amex = document.getElementById('cardNumber').value;
// 	// pull first 2 digits of card number
// 	if (amex ===) {
//
// 	}
// }
// function functionName() {
// 	const amex = document.getElementById('cardNumber').value;
//
// 	console.log(amex);
// }


// setup
$("#submit").on("click", validateEmail);

// adds html when the notice is needed
function showInvalidNotice() {
	$("#checkEmail").append('<div id="invalidEmail" class="col-xs-6 alert alert-warning alert-dismissible" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button><strong>Invalid Email</strong></div>');
}

// validation
function validateEmail() {
	const validate_email = $('input[name=email]').val();
	console.log("fired");
	if( /(.+)@(.+){2,}\.(.+){2,}/.test(validate_email) ) {
		emailPDF();
	} else {
		showInvalidNotice();
	}
}
