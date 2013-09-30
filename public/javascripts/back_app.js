(function(){
	"use strict"
    window.Course = Backbone.Model.extend({
		defaults:{
			title:'',
			url:''
				},
		urlRoot:"courses/"


		});

})();