let express = require('express')
let router=express.Router();
let ZoneController= require('../controllers/ZoneController');
let  controllers = require('../controllers')

router.get('/:resource',(req,res,next)=>{
  var resource = req.params.resource;
  var controller=controllers[resource];

  if (controller == null){
    res.json({
      confirmation:'fail',
      message:'invalid resource request: '+resource,

    })
    return
  }

  controller.find(req.query, (err,result)=>{
    if(err){
      res.json({
        confirmation:'fail',
        message:err
      })
      return
    }
    res.json({
      confirmation:'success',
      results:result
    })
  })
})

router.get('/:resource/:id', (req,res,next)=>{
  var resource=req.params.resource;
  var id=req.params.id;

  var controller=controllers[resource];
  if(controller==null){
    res.json({
      confirmation:'fail',
      message:'invalid resource request :'+resource,

    })
    return
  }
  controller.findById(id, function(err,result){
    if(err){
      res.json({
        confirmation:'fail',
        message: err
      })
    }
      res.json({
        confirmation:'success',
        result:result,
      })

  })
})

router.post('/:resource',(req,res,next)=>{
  var resource=req.params.resource;
  var id=req.params.id;

  var controller=controllers[resource];
  if(controller==null){
    res.json({
      confirmation:'fail',
      message:'invalid resource request :'+resource,

    })
    return
  }
  controller.create(req.body, (err,result)=>{
    if(err){
      res.json({
        confirmation:'fail',
        message:err,
      })
      return
    }
    res.json({
      confirmation:'success',
      result:result,
    })
  })
})

module.exports=router;
