Meteor.methods({
  addBook: function(title, author) {
    check(title, String);
    check(author, String);

    if (title === '') {
      throw new Meteor.Error(500, "Parameter title can't be empty");
    }

    if (author === '') {
      throw new Meteor.Error(500, "Parameter author can't be empty");
    }

    Books.insert({
      title: title,
      author: author
    });
  }
});