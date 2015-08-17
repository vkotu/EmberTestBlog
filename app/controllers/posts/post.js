import Ember from 'ember';

export default Ember.Controller.extend({
    'authorname': function(){
        //debugger;
        return this.model.get('author.fname') + ' ' + this.model.get('author.lname');

    }.property('model.author.fname','model.author.lname'),


  'title': Ember.computed('model.title',function(){
    return this.model.get('title');
  }),
  'test' : function(){
    console.log('obeserver fired');
  }.observes('model.title')

});
