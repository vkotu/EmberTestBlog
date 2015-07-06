import Ember from 'ember';

export default Ember.Controller.extend({
    'authorname': function(){
        //debugger;
        return this.model.get('author.fname') + ' ' + this.model.get('author.lname');

    }.property('model.author.fname','model.author.lname')
});
