/**
 * Created by kotu on 7/3/15.
 */
import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        console.log("posts.js of routes");
        return this.store.find('post');
    },
    afterModel(){
        //debugger;
    },
    setupController(controller,model){
        controller.set('model',model);
    },
    actions:{
        addPost(){
            var contr = this.controllerFor('posts');
            //debugger;
            var post = this.store.createRecord('post',{
                "title": contr.get('newTitle'),
                "author":contr.get('newAuthor')
            });
            contr.set('newTitle','');
            contr.set('newAuthor','');
            post.save().then((result) => {
              //this.transitionTo('posts');
              debugger;
            });
        },
      deletePost(post){
        post.deleteRecord();
        post.save();

      }
    }


});
