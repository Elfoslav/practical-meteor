//default Meteor example
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.home.helpers({
    counter: function () {
      return Session.get("counter");
    },
    templateExample: function() {
      return '' +
      '<template name="home">\n' +
        ' <button>Click me</button>\n' +
        ' <p>Click the button above {{counter}}</p>\n' +
      '</template>';
    }
  });

  Template.home.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
