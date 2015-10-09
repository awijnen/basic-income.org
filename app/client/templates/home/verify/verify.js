/*****************************************************************************/
/* Verify: Event Handlers */
/*****************************************************************************/
Template.Verify.events({
	'click #facebook-verification': function(e, tmpl) {
		Meteor.loginWithFacebook({}, function(err) {
			if (err) {
				throw new Meteor.error("Facebook verification failed");
			}

			Router.go("thanks");
		});
	},
});

/*****************************************************************************/
/* Verify: Helpers */
/*****************************************************************************/
Template.Verify.helpers({
});

/*****************************************************************************/
/* Verify: Lifecycle Hooks */
/*****************************************************************************/
Template.Verify.onCreated(function () {
});

Template.Verify.onRendered(function () {
});

Template.Verify.onDestroyed(function () {
});
