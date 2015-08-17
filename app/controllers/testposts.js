import Ember from 'ember';

export default Ember.Controller.extend({
    name : 'vicky',
    //cname : function(){
    //  return this.get('name');
    //}.property('name'),

  test:Ember.computed('name',function(){
    return this.get('name');
  })
});
