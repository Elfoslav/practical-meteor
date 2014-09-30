Template.collections.rendered = function() {
  SyntaxHighlight();
};

Template.collections.helpers({
  books: function() {
    return Books.find();
  }
});