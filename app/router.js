import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("posts",function(){
    this.route("post",{path:':post_id'});
  });

  this.resource("authors",function(){
    this.route("author",{path:':author_id'});
  });

  this.resource("testposts");


});

export default Router;
