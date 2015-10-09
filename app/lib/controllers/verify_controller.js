VerifyController = HomeController.extend({
  onRun: function () {
    analytics.page('Verify page');
    this.next();
  },

  onBeforeAction: function () {
    if (!Session.get('vote')) this.redirect('home');
    else {
      this.render('Empty', {to: 'actionButtons'});
      this.render('Empty', {to: 'topRight'});
      this.next()
    }
  },
});
