$(function() {
  $('#fname_error_message').hide();
  $('#mname_error_message').hide();
  $('#lname_error_message').hide();
  $('#email_error_message').hide();
  $('#password_error_message').hide();
  $('#retype_password_error_message').hide();
  $('#mnumber_error_message').hide();

  var error_fname = false;
  var error_mname = false;
  var error_lname = false;
  var error_email = false;
  var error_password = false;
  var error_retype_password = false;
  var error_mnumber = false;

  $('#form_fname').focusout(function() {
    check_fname();
  });

  $('#form_mname').focusout(function() {
    check_mname();
  });

  $('#form_lname').focusout(function() {
    check_lname();
  });

  $('#form_email').focusout(function() {
    check_email();
  });
  $('#form_password').focusout(function() {
    check_password();
  });
  $('#form_retype_password').focusout(function() {
    check_retype_password();
  });

  $('#form_mnumber').focusout(function() {
    check_mnumber();
  });

  function check_fname() {
    var pattern = /^[a-zA-Z]*$/;
    var fname = $('#form_fname').val();
    if (pattern.test(fname) && fname !== '') {
      $('#fname_error_message').hide();
      $('#form_fname').css('border-bottom', '2px solid #34F458');
    } else {
      $('#fname_error_message').html('Should contain only Characters');
      $('#fname_error_message').show();
      $('#form_fname').css('border-bottom', '2px solid #F90A0A');
      error_fname = true;
    }
  }

  function check_mname() {
    var pattern = /^[a-zA-Z]*$/;
    var mname = $('#form_mname').val();
    if (pattern.test(mname) && mname !== '') {
      $('#mname_error_message').hide();
      $('#form_mname').css('border-bottom', '2px solid #34F458');
    } else {
      $('#mname_error_message').html('Should contain only Characters');
      $('#mname_error_message').show();
      $('#form_mname').css('border-bottom', '2px solid #F90A0A');
      error_mname = true;
    }
  }

  function check_lname() {
    var pattern = /^[a-zA-Z]*$/;
    var lname = $('#form_lname').val();
    if (pattern.test(lname) && lname !== '') {
      $('#lname_error_message').hide();
      $('#form_lname').css('border-bottom', '2px solid #34F458');
    } else {
      $('#lname_error_message').html('Should contain only Characters');
      $('#lname_error_message').show();
      $('#form_lname').css('border-bottom', '2px solid #F90A0A');
      error_lname = true;
    }
  }

  function check_password() {
    var password_length = $('#form_password').val().length;
    if (password_length < 8) {
      $('#password_error_message').html('Atleast 8 Characters');
      $('#password_error_message').show();
      $('#form_password').css('border-bottom', '2px solid #F90A0A');
      error_password = true;
    } else {
      $('#password_error_message').hide();
      $('#form_password').css('border-bottom', '2px solid #34F458');
    }
  }

  function check_retype_password() {
    var password = $('#form_password').val();
    var retype_password = $('#form_retype_password').val();
    if (password !== retype_password) {
      $('#retype_password_error_message').html('Passwords Did not Matched');
      $('#retype_password_error_message').show();
      $('#form_retype_password').css('border-bottom', '2px solid #F90A0A');
      error_retype_password = true;
    } else {
      $('#retype_password_error_message').hide();
      $('#form_retype_password').css('border-bottom', '2px solid #34F458');
    }
  }

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#form_email').val();
    if (pattern.test(email) && email !== '') {
      $('#email_error_message').hide();
      $('#form_email').css('border-bottom', '2px solid #34F458');
    } else {
      $('#email_error_message').html('Invalid Email');
      $('#email_error_message').show();
      $('#form_email').css('border-bottom', '2px solid #F90A0A');
      error_email = true;
    }
  }

  function check_mnumber() {
    var pattern = /^\d{10}$/;
    var mnumber = $('#form_mnumber').val();
    if (pattern.test(mnumber) && mnumber !== '') {
      $('#mnumber_error_message').hide();
      $('#form_mnumber').css('border-bottom', '2px solid #34F458');
    } else {
      $('#mnumber_error_message').html('Invalid Mobile No');
      $('#mnumber_error_message').show();
      $('#form_mnumber').css('border-bottom', '2px solid #F90A0A');
      error_mnumber = true;
    }
  }

  $('#registration_form').submit(function() {
    error_fname = false;
    error_mname = false;
    error_lname = false;
    error_email = false;
    error_password = false;
    error_retype_password = false;
    error_mnumber = false;

    check_fname();
    check_mname();
    check_lname();
    check_email();
    check_password();
    check_retype_password();
    check_mnumber();
    if (
      error_fname === false &&
      error_mname === false &&
      error_lname === false &&
      error_mnumber === false &&
      error_email === false &&
      error_password === false &&
      error_retype_password === false
    ) {
      //alert("Registration Successfull");
      return true;
    } else {
      // alert("Please Fill the form Correctly");
      return false;
    }
  });
});

$(document).ready(function() {
  var validatePersonal = false;
  var validateContact = false;
  var validateCredential = false;
  var contactHeadClickCount = 0;
  var credentialHeadClickCount = 0;

  $('#contactDetails').hide();
  $('#loginDetails').hide();

  $('#btn_Personal').click(function() {
    var personalvalidation = validatePersonalDetail();
    if (personalvalidation == true) {
      $(this).css('background-color', 'green');
      $('#personalDetails').slideToggle();
      $('#contactDetails').slideToggle();
    } else {
      $(this).css('background-color', 'orange');
    }
  });

  
 
  function validatePersonalDetail() {
    $('#personalDetails')
      .find('span')
      .remove();
    $('#personalDetails')
      .find('br')
      .remove();

    var validatePersonal = true;
    var fName = $("input[name='firstname']").val();
    var mName = $("input[name='middlename']").val();
    var lName = $("input[name='lastname']").val();

    if (!validateCharString(fName)) {
      $("input[name='firstname']").after('<span>Invalid First Name</span>');
      validatePersonal = false;
    }

    if (!validateCharString(mName)) {
      $("input[name='middlename']").after('<span>Invalid Middle Name</span>');
      validatePersonal = false;
    }

    if (!validateCharString(lName)) {
      $("input[name='lastname']").after('<span>Invalid Last Name</span>');
      validatePersonal = false;
    }

    return validatePersonal;
  }

  function validateCharString(str) {
    return str.match('^[a-zA-Z]{1,16}$');
  }
});
