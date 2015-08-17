/**
 * Created by kotu on 7/3/15.
 */
import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        console.log("posts.js of routes");

        return this.store.find('post',params.post_id);
    },
    afterModel(){
       // debugger;
    },
    actions:{
        editAuthor(model){
            model.save();
          //var postContrl = this.controllerFor('posts.post');
          //debugger;
        },
      editPost(model){
        model.save();
      }
    }

});
