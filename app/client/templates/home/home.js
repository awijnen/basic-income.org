/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
	var iframe = $("iframe");
	var iframeDOM = iframe[0];

	if (iframeDOM) {
		var homeWidth = $(".home").width();
		var homeHeight = $(".home").height();
		iframe.attr("width", homeWidth);
		iframe.attr("height", homeHeight);
	}
});

Template.Home.onDestroyed(function () {
});
