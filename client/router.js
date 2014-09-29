Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('ironRouter', {
    path: '/iron-router'
  });

  this.route('packages', {
    path: '/packages'
  });

  this.route('publishSubscribe', {
    path: '/publish-subscribe'
  });

  this.route('reactivity', {
    path: '/reactivity'
  });
});

Router.onRun(function() {
  $('.menu .list-group-item').removeClass('active');
  $('.menu .list-group-item[href="' + this.path + '"]').addClass('active');
});

Router.configure({
  layoutTemplate: 'layout'
});