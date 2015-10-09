QuestionController = HomeController.extend({
  onBeforeAction: function () {
    var currentUser = Meteor.user();
    if (currentUser && currentUser.profile.voteId) this.redirect('thanks');

    this.next();
  },
});
