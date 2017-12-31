function add_class(semester) {
  $('#tab_logic'+semester).append("<tr id='row-"+semester+"'><td><input name='number-"+semester+"' type='text' placeholder='EE5496' class='form-control input-md' /></td><td><input name='name-"+semester+" type='text' placeholder='GPU and Multicore Programming' class='form-control input-md' /> </td><td><input  name='grade-"+semester+" type='text' placeholder='3.0'  class='form-control input-md'></td><td><input  name='grade-"+semester+" type='text' placeholder='AB'  class='form-control input-md'></td><td><a id='check_class' class='text-primary' onclick='check_class("+semester+")'><i class='fa fa-check' aria-hidden='true'></i></a></td></tr>");
}

function delete_class(semester) {
  var table = document.getElementById('tab_logic'+semester);
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }
}

function check_class(semester) {

}
