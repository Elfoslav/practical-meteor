Template.helpers.rendered = function() {
  SyntaxHighlight();
};

Template.helpers.helpers({
  books: function() {
    return Books.find();
  }
});