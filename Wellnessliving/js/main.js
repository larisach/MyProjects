$(document).ready(function() {
    $('input:checkbox').change(function() {      
      if($('input:checkbox:checked', '#frm-first').length>0){
        $('#btn-first').removeAttr('disabled');
        $('#btn-first').addClass('active');
      } else {
        $('#btn-first').attr('disabled', 'disabled');       
        $('#btn-first').removeClass('active');
      } 
      if($('input:checkbox:checked', '#frm-second').length>0){
        $('#btn-second').removeAttr('disabled');
        $('#btn-second').addClass('active');
      } else {
        $('#btn-second').attr('disabled', 'disabled');       
        $('#btn-second').removeClass('active');
      }      
    });
});

