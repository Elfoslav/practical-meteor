Template.events.rendered = function() {
  SyntaxHighlight();
};

Template.events.events({
  'click .clickable': function() {
    return alert('You clicked!');
  }
});