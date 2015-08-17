import DS from 'ember-data';

export default DS.RESTSerializer.extend({

  normalizePayload(payload){


    var posts = payload.testposts;
    var authors = [];
    var author_id = 1;
      var posts_new = posts.map(function(obj){
        obj.author.id = author_id++;
        authors.push(obj.author);
        obj.author = obj.author.id;
        return obj;
      });
    payload.authors = authors;
    return payload;
  }
});
