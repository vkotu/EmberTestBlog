/**
 * Created by kotu on 7/3/15.
 */
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: 'api',
    host:"http://localhost:3000"

});
