Template.layout.rendered = function() {
  //higlight menu item
  $('.menu .list-group-item[href="' + location.pathname + '"]').addClass('active');
};