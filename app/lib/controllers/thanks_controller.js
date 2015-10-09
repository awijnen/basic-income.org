ThanksController = HomeController.extend({
	subscriptions: function() {
  		this.subscribe('votes');
  	},
  	onRun: function () {
	    analytics.page('Thanks page');
	    this.next();
	},

  	onBeforeAction: function () {
	    if (!Meteor.user()) this.redirect('home');
	    else {
	      this.render('Empty', {to: 'actionButtons'});
	      this.render('Empty', {to: 'topRight'});
	      this.next()
	    }
	  },
});
