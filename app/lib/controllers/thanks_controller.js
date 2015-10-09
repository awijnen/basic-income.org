ThanksController = HomeController.extend({
	subscriptions: function() {
  		this.subscribe('votes');
  	},
});
