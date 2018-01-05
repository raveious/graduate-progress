function add_class(semester) {
  $('#tab_logic'+semester).append("<tr><form autocomplete='off' action='' method='GET' name='row_form_"+semester+"'><td><input name='number' type='text' placeholder='EE5496' class='form-control input-md' /></td><td><input name='name type='text' placeholder='GPU and Multicore Programming' class='form-control input-md' /> </td><td><input  name='credits' type='text' placeholder='3.0'  class='form-control input-md'></td><td><select class='form-control' name='grade'><option value='4'>A</option><option value='3.5'>AB</option><option value='3'>B</option><option value='2.5'>BC</option><option value='2'>C</option><option value='1.5'>CD</option><option value='1'>D</option><option value='0'>F</option></select></td><td><button type='submit' class='btn btn-primary btn-block text-white' onclick='check_class()'><i class='fa fa-check' aria-hidden='true'></i></button></td></tr>");
}

function delete_class(semester) {
  var table = document.getElementById('tab_logic'+semester);
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }
}
