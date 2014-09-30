//server code
Meteor.publish('books', function() {
  return Books.find();
});