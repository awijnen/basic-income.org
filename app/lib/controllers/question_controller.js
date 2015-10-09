QuestionController = HomeController.extend({
  onRun: function () {
    analytics.page('Question page');
    this.next();
  },

  onBeforeAction: function () {
    var currentUser = Meteor.user();
    if (currentUser && currentUser.profile.voteId) this.redirect('thanks');

    this.next();
  },
});
