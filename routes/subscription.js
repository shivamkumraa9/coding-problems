const express = require('express');
const router = express.Router();
const User = require('../models/user')

const login_required = require('../extras/login_required')



router.post("/create",login_required,async(req,res)=>{
	const user = await User.findOne({email:req.user.email})
	if(user.is_active){
		res.status(401)
		res.json({okay:false,msg:"Subscription already active"})
	}else{
		res.json({okay:true})
	}
})

router.post("/cancel",login_required,async(req,res)=>{
	const user = await User.findOne({email:req.user.email})
	if(user.is_cancel){
		res.status(401)
		res.json({okay:false,msg:"Subscription already cancelled"})
	}else{
		user.is_cancel = true;
		user.save()
		res.json({okay:true})
	}
})

router.post("/resume",login_required,async(req,res)=>{
	const user = await User.findOne({email:req.user.email})
	if(user.is_cancel){
		user.is_cancel = false;
		user.save()
		res.json({okay:true})
	}else{
		res.status(401)
		res.json({okay:false,msg:"Subscription already active"})
	}
})

router.post("/webhook",async(req,res)=>{
	res.json({okay:true})
})


module.exports = router
