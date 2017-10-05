var Comment= require('../models/comment')
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
//crude operations
module.exports={
  find: function(params,callback){
    //mongoose function that executes the requests
    Comment.find(params, function(err,comment ){
      if (err){
        //error part goes first, payload is second
        callback(err,null)
        return
      }
      callback(null,comment)
    })
  },
  findById:function(id, callback){
    Comment.findById(id,function(err,comment ){
    if (err){
      callback(err,null)
      return
    }
    callback(null,comment)
  })
  },
  create: function(params,callback){

    Comment.create(params, function(err, comment){
      if(err){
        callback(err,null)
      }
      callback(null,comment)

    })
  },
  update: function(id,params,callback){
    Comment.findByIdAndUpdate(id,params,{new:true},(err,comment)=>{
      if (err){
        callback(err,null)
        return
      }
      callback(null,comment);
    })
  },
  delete:function(id,callback){
    Comment.findByIdAndRemove(id, (err)=>{
      if(err){
        callback(err,null)
        return
      }
      callback(null,null);
    })

  },


}
