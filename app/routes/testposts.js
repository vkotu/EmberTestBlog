import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    console.log("testposts.js of routes");
    return this.store.find('testpost');
  }
});
