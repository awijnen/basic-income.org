
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

Router.route('/verify', {
	name: 'verify',
	controller: 'HomeController',
	action: 'verify',
	where: 'client',
})

Router.route('/thanks', {
	name: 'thanks',
	controller: 'HomeController',
	action: 'thanks',
	where: 'client',
})

Router.route('/explain', {
	name: 'explain',
	controller: 'HomeController',
	action: 'explain',
	where: 'client',
})