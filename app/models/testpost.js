/**
 * Created by kotu on 7/3/15.
 */

import DS from 'ember-data';
var attr = DS.attr;
export default DS.Model.extend({

  title: attr('string'),
  author: DS.belongsTo('author')

});
