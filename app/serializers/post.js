import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizePayload(payload){
    //debugger;
    return payload;
  }
});
