Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('applicationStructure', {
    path: '/application-structure'
  });

  this.route('ironRouter', {
    path: '/iron-router'
  });

  this.route('accountsPackage', {
    path: '/accountsPackage'
  });

  this.route('packages', {
    path: '/packages'
  });

  this.route('collections', {
    path: '/collections'
  });

  this.route('autopublishAndInsecure', {
    path: '/autopublish-and-insecure',
    waitOn: function() {
      return Meteor.subscribe('books');
    }
  });

  this.route('publishSubscribe', {
    path: '/publish-subscribe'
  });

  this.route('reactivity', {
    path: '/reactivity',
    waitOn: function() {
      return Meteor.subscribe('books');
    }
  });
});

Router.onRun(function() {
  $('.menu .list-group-item').removeClass('active');
  $('.menu .list-group-item[href="' + this.path + '"]').addClass('active');
  //Google analytics send pageview
  ga('send', 'pageview');
});

Router.configure({
  layoutTemplate: 'layout'
});