/*****************************************************************************/
/* Thanks: Event Handlers */
/*****************************************************************************/
Template.Thanks.events({
});

/*****************************************************************************/
/* Thanks: Helpers */
/*****************************************************************************/
Template.Thanks.helpers({
	voteCount: function() {
		return Votes.find().count()
	},

	yesCount: function() {
		return Votes.find({value: "yes"}).count()
	},

	noCount: function() {
		return Votes.find({value: "no"}).count()
	},
});

/*****************************************************************************/
/* Thanks: Lifecycle Hooks */
/*****************************************************************************/
Template.Thanks.onCreated(function () {
});

Template.Thanks.onRendered(function () {
});

Template.Thanks.onDestroyed(function () {
});
