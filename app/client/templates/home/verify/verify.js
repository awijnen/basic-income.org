/*****************************************************************************/
/* Verify: Event Handlers */
/*****************************************************************************/
Template.Verify.events({
	'click #facebook-verification': function(e, tmpl) {
		Meteor.loginWithFacebook({}, function(err) {
			if (err) {
				throw new Meteor.error("Facebook verification failed");
			}

			var userId = Meteor.userId();

			var voteId = Votes.insert({
				userId: userId,
				value: Session.get('vote'),
				createdAt: new Date(),
			})

			Meteor.users.update({_id: userId}, {
				$set: {
					"profile.voteId": voteId,
				}
			})

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
