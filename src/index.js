import 'bootstrap';
//import 'PerfectScrollbar';
import './scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code

$('#dismiss, .overlay').on('click', function() {
  $('#sidebar').removeClass('active');
  $('.overlay').removeClass('active');
});

$('#sidebarCollapse').on('click', function() {
  $('#sidebar').addClass('active');
  $('.overlay').addClass('active');
  $('.collapse.in').toggleClass('in');
  $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});

$('[data-toggle="tooltip"]').tooltip();
