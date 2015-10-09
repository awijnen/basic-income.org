Meteor.startup(function () {
	ServiceConfiguration.configurations.upsert(
	  { service: "facebook" },
	  {
	    $set: {
	      appId: "195424110789496",
	      secret: "2f07e7a2ccbba4716d517c9bb13155c4",
	      loginStyle: "popup",
	    }
	  }
	);
});