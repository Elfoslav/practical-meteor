Template.books.helpers({
  books: function() {
    return Books.find();
  }
});

Template.books.events({
  'click .delete-book': function() {
    Books.remove(this._id);
  }
});