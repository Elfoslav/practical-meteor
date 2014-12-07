Router.map(function() {
  this.route('home', {
    path: '/'
  });

  this.route('templates', {
    path: '/templates'
  });

  this.route('helpers', {
    path: '/helpers'
  });

  this.route('events', {
    path: '/events'
  });

  this.route('applicationStructure', {
    path: '/application-structure'
  });

  this.route('ironRouter', {
    path: '/iron-router'
  });

  this.route('accountsPackage', {
    path: '/accounts-package'
  });

  this.route('packages', {
    path: '/packages'
  });

  this.route('collections', {
    path: '/collections',
    waitOn: function() {
      return Meteor.subscribe('books');
    }
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

  this.route('methods', {
    path: '/methods',
    waitOn: function() {
      return Meteor.subscribe('books');
    }
  });

  this.route('superEasyDeploy', {
    path: '/super-easy-deploy'
  });
});

Router.onRun(function() {
  $('.menu .list-group-item').removeClass('active');
  $('.menu .list-group-item[href="' + this.path + '"]').addClass('active');
  //Google analytics send pageview
  ga('send', 'pageview', this.path);
});

Router.configure({
  layoutTemplate: 'layout'
});