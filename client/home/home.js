Template.home.rendered = function() {
  SyntaxHighlight();
};

// counter starts at 0
Session.setDefault("counter", 0);

Template.home.helpers({
  counter: function () {
    return Session.get("counter");
  },
  templateExample: function() {
    return '' +
    '<template name="hello">\n' +
    '  <button>Click me</button>\n' +
    '  <p>You\'ve pressed the button {{counter}} times.\n' +
    '</template>';
  }
});

Template.home.events({
  'click button': function () {
    // increment the counter when button is clicked
    Session.set("counter", Session.get("counter") + 1);
  }
});