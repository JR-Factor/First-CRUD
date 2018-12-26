const express = require('express');
const router = express.Router();

const Workers = require('../model/workers.js');

router.get('/',async (req,res)=>{
    const worker = await Workers.find();
    res.render('index',({
        worker
    }));
});

router.post('/add',async(req,res)=>{
    const worker = new Workers(req.body);
    await worker.save();
    res.redirect('/');
});

router.get('/delete/:id',async(req,res)=>{
    const { id } = req.params;
    const worker = await Workers.findById(id);
    worker.remove();
    res.redirect('/');
});

router.get('/update/:id',async(req,res)=>{
    const { id } = req.params;
    const worker = await Workers.findById(id);
    res.render('update',({
        worker
    }));
});
router.post('/update/:id',async(req,res)=>{
    const { id } = req.params;
    await Workers.update({_id: id},req.body);
    res.redirect('/');
});

module.exports = router;