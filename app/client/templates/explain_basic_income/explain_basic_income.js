/*****************************************************************************/
/* ExplainBasicIncome: Event Handlers */
/*****************************************************************************/
Template.ExplainBasicIncome.events({
	'click .explain-basic-income': function(e ,tmpl) {
		analytics.track("Needed an explanation", {});
	}
});

/*****************************************************************************/
/* ExplainBasicIncome: Helpers */
/*****************************************************************************/
Template.ExplainBasicIncome.helpers({
});

/*****************************************************************************/
/* ExplainBasicIncome: Lifecycle Hooks */
/*****************************************************************************/
Template.ExplainBasicIncome.onCreated(function () {
});

Template.ExplainBasicIncome.onRendered(function () {
});

Template.ExplainBasicIncome.onDestroyed(function () {
});
