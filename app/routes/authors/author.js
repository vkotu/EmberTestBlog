/**
 * Created by kotu on 7/4/15.
 */

/**
 * Created by kotu on 7/3/15.
 */
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('author',params.author_id);
  },
  afterModel(){
    // debugger;
  },
  actions:{
    editAuthor(model){
      model.save();
      //var postContrl = this.controllerFor('posts.post');
      //debugger;
    }
  }

});

