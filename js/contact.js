$('#Submit').click(function(){
  // Gather Information from the form / input fields and Do something with it.
  var f_name = $('#firstname').val();
  var l_name = $('#lastname').val();
  var email = $('#email').val();
  var pass = $('#password').val();
  var message = $('#message').val();

  var fullName = f_name + ' ' + l_name;
  $('#fullname:text').val(fullName);
  $('#semail:text').val(email);

  if(f_name==''||email==''||message=='' || l_name==''){
      alert("Please Fill All Fields");
    }
    else{
      alert("Form Submitted Successfully!");

      $('form').trigger('reset');
      return true;
    }
});

$('#checkbox').click(function(){
  /// Show password by checkbox
  if($('#checkbox').is(':checked')){
    $('#password').attr('type','text');
  }else{
    $('#password').attr('type','password');
  }
});
