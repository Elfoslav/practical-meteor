Template.autopublishAndInsecure.rendered = function() {
  SyntaxHighlight();
};

Template.autopublishAndInsecure.helpers({
  oneBook: function() {
    return Books.findOne();
  }
});