ThanksController = HomeController.extend({
	subscriptions: function() {
  		this.subscribe('votes');
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
