
/*
 * GET home page.
 */

module.exports = (function(){
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var TodoSchema = new Schema({
    type : String,
    todos : Array
  });
  mongoose.model('Todo', TodoSchema);

  mongoose.connect('mongodb://localhost/tododb');

  var db = mongoose.connection,
  TODO;
  db.once('open', function(){
    TODO = mongoose.model('Todo');
  });
  return {
    get : function(req, res){
      TODO.find({type : 'todo'}, function(err, docs){
        if(docs.length){
          res.json(docs[0].todos);
        } else {
          res.json([]);
        }
      });
    },
    save : function(req, res){
      var todo = new TODO({
        type : "todo",
        todos : req.body.todos
      });
      TODO.remove({type : 'todo'}, function(err, docs){
        todo.save(function(err, docs){
          res.json(docs);
        });
      });
    },
    remove : function(req, res){
      TODO.remove({type : 'todo'}, function(err){
        res.json([]);
      });
    }
  };
}());
