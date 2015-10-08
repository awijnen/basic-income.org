
Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'Loading',
	notFoundTemplate: 'NotFound',
})

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/votes/verify', {
	name: 'votes.verify',
	controller: 'VotesController',
	action: 'verify',
	where: 'client',
})

Router.route('/votes/verify', {
	name: 'votes.thanks',
	controller: 'VotesController',
	action: 'thanks',
	where: 'client',
})