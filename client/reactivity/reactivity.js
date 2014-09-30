Template.reactivity.rendered = function() {
  SyntaxHighlight();
};

Template.reactivity.helpers({
  oneBook: function() {
    return Books.findOne();
  }
});