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
     // debugger;
        controller.set('model',model);
    },
    actions:{
        addPost(){
            var contr = this.controllerFor('posts');
           // debugger;
          var author = this.store.createRecord('author',{
            "fname":contr.get('fname'),
            "lname":contr.get('lname')
          });
          author.save().then((author) => {
            debugger;
            var aid = author.get("id");
            var post = this.store.createRecord('post',{
              "title": contr.get('newTitle'),
              "author": author
            });
            post.save().then((result) => {
              //this.transitionTo('posts');
              debugger;
              contr.set('newTitle','');
              contr.set('fname','');
              contr.set('lname','');
            });
          });
        },
      deletePost(post){
        post.deleteRecord();
        post.save();

      }
    }


});
