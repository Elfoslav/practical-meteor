Template.accountsPackage.rendered = function() {
  SyntaxHighlight();
};

Template.accountsPackage.helpers({
  loginButtonsExample: function() {
    return '{{> loginButtons}}';
  }
});