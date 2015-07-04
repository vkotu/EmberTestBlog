import Ember from 'ember';

export default Ember.Controller.extend({
    'authorname': function(){
        //debugger;
        return this.model.get('author');

    }.property('model.author')
});
