Template.methods.rendered = function() {
  SyntaxHighlight();
};

Template.methods.helpers({
  'includeTemplate': function(name) {
    return '{{> ' + name + '}}';
  }
});

Template.methods.events({
  'submit .add-book-form': function(e) {
    e.preventDefault();
    $form = $(e.currentTarget);
    var title = $form.find('[name="title"]').val();
    var author = $form.find('[name="author"]').val();
    Meteor.call('addBook', title, author, function(error, result) {
      if (error) {
        alert(error);
      }
    });
  }
});