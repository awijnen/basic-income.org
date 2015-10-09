/*****************************************************************************/
/* VoteButtons: Event Handlers */
/*****************************************************************************/
Template.VoteButtons.events({
	'click .vote-buttons.yes': function(e, tmpl) {
		Session.set('vote', 'yes');
	},

	'click .vote-buttons.no': function(e, tmpl) {
		Session.set('vote', 'no');
	},
});

/*****************************************************************************/
/* VoteButtons: Helpers */
/*****************************************************************************/
Template.VoteButtons.helpers({
});

/*****************************************************************************/
/* VoteButtons: Lifecycle Hooks */
/*****************************************************************************/
Template.VoteButtons.onCreated(function () {
});

Template.VoteButtons.onRendered(function () {
});

Template.VoteButtons.onDestroyed(function () {
});
