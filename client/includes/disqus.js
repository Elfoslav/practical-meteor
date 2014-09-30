Template.disqus.rendered = function() {
  if (!Session.get('isDisqusLoaded')) {
    var disqus_shortname = 'glorifymeteorcom'; // required: replace example with your forum shortname
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
    Session.set('isDisqusLoaded', true);
  } else {
    if (typeof DISQUS !== 'undefined') {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = location.pathname;
          this.page.url = location.href;
          this.page.title = document.title;
        }
      });
    }
  }
};