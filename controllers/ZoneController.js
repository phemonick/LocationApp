var Zone= require('../models/Zone')
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
//crude operations
module.exports={
  find: function(params,callback){
    //mongoose function that executes the requests
    Zone.find(params, function(err,zones ){
      if (err){
        //error part goes first, payload is second
        callback(err,null)
        return
      }
      callback(null,zones)
    })
  },
  findById:function(id, callback){
    Zone.findById(id,function(err,zone ){
    if (err){
      callback(err,null)
      return
    }
    callback(null,zone)
  })
  },
  create: function(params,callback){
    // console.log(params['zipCodes'])
    // var zips=params['zipCodes'];
    // var zip=zips.split(',');
    // var newZips=[];
    // zip.forEach((zipcode)=>{
    //   newZips.push(zipcode.trim())
    // })

    // params['zipCodes']=newZips;
    Zone.create(params, function(err, zone){
      if(err){
        callback(err,null)
      }
      callback(null,zone)

    })
  },
  update: function(id,params,callback){
    Zone.findByIdAndUpdate(id,params,{new:true},(err,zone)=>{
      if (err){
        callback(err,null)
        return
      }
      callback(null,zone);
    })
  },
  delete:function(id,callback){
    Zone.findByIdAndRemove(id, (err)=>{
      if(err){
        callback(err,null)
        return
      }
      callback(null,null);
    })

  },


}
