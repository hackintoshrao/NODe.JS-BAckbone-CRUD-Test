(function(){
	"use strict"
    window.Course = Backbone.Model.extend({
		defaults:{
			title:'',
			url:''
				},
		urlRoot:"courses/"


		});
	var course = new Course({title:"Sending a Post request to the node-express backend,but how to access this in the backend"});
	course.save();

})();
