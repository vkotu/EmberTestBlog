import Ember from 'ember';
import EmberValidations from 'ember-validations';
export default Ember.Controller.extend(EmberValidations, {
  validations:{
    "model.title":{
      presence: true,
      length: {minimum:5,maximum:20}

    },
    "newTitle" : {
      presence:true
    }
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
        var model = this.get("model");
        this.validate().then(()=>{
          var post = this.store.createRecord('post',{
            "title": model.title,
            "author": author
          });
          post.save().then((result) => {
            //this.transitionTo('posts');
            debugger;
            contr.set('newTitle','');
            contr.set('fname','');
            contr.set('lname','');
          });
        }).catch(()=>{
          console.log(this.get("errors"));
        });

      });
    },
    deletePost(post){
      post.deleteRecord();
      post.save();

    }
  }


});
