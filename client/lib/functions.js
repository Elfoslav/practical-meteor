SyntaxHighlight = function() {
  $.each($('pre'), function(i, item) { hljs.highlightBlock(item); });
};