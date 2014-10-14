Template.templates.rendered = function() {
  SyntaxHighlight();
};

Template.templates.helpers({
  'includeTemplate': function(name) {
    return '{{> ' + name + '}}';
  }
});