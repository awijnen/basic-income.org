
Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'Loading',
	notFoundTemplate: 'NotFound',
})

Router.route('/', {
  name: 'home',
  controller: 'QuestionController',
  where: 'client'
});

Router.route('/verify', {
	name: 'verify',
	controller: 'VerifyController',
	action: 'verify',
	where: 'client',
})

Router.route('/thanks', {
	name: 'thanks',
	controller: 'ThanksController',
	action: 'thanks',
	where: 'client',
})

Router.route('/video', {
	name: 'video',
	controller: 'HomeController',
	action: 'video',
	where: 'client',
})