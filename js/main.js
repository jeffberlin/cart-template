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
  if( /(.+)@(.+){2,}\.(.+){2,}/.test(validate_email) ){
    emailPDF();
  } else {
  	showInvalidNotice();
  }
}
