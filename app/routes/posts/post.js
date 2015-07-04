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
       // debugger;
    },
    actions:{
        editAuthor(model){
            model.save();
        }
    }

});
