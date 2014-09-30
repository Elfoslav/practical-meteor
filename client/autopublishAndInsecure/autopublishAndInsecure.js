Template.autopublishAndInsecure.rendered = function() {
  SyntaxHighlight();
};

Template.autopublishAndInsecure.helpers({
  books: function() {
    return Books.find();
  },
  oneBook: function() {
    return Books.findOne();
  }
});