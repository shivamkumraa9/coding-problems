const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bodyParser = require('body-parser');

const stripe = require('stripe')('sk_test_51GzkYJAkCUXrZtDnbcFTP9srjGSW6Hp15wcNVjsQO5sSJQeEhLwvISsZgESjCqULg9bySvT8JPykaCMe3pd1kUxC00Uvkv2jDx');

const login_required = require('../extras/login_required')



router.post("/create",login_required,async(req,res)=>{
	const user = await User.findOne({email:req.user.email})
	if(user.is_active){
		res.status(401)
		res.json({okay:false,msg:"Subscription already active"})
	}else{
		const session = await stripe.checkout.sessions.create({
		  customer_email: req.user.email,
		  payment_method_types: ['card'],
		  line_items: [{
		    price: 'price_1HDq67AkCUXrZtDnTtidPPkq',
		    quantity: 1,
		  }],
		  mode: 'subscription',
		  success_url: 'https://codingproblem.herokuapp.com/success',
		  cancel_url: 'https://codingproblem.herokuapp.com/cancel',
		});
		res.json({okay:true,id:session.id})
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


router.post('/webhook', bodyParser.raw({type: 'application/json'}), (req, res) => {


  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, 'whsec_U818tGj1cFGedAvgtaURHVam7q7vbsky');
  } catch (err) {
    console.log(`❌ Error message: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log(session)
    User.findOne({email:session.customer_email}).then((user)=>{
    	console.log(user)
    	if(user){
    		user.is_active = true;
    		user.customer_id = session.customer;
    		user.subscription_id = session.subscription
    		user.save()
    	}
    })
    .catch((err)=>{console.log(err)})
  }



  res.json({received: true});
});

module.exports = router
