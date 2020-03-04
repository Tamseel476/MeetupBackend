const express = require('express');
const router = express.Router();
const PostAdventuresModels = require('../models/PostAdventures');

router.post(
    '/create',
    (req, res)=>{
        const formdata = {
            'title': req.body.title,
            'description': req.body.description,
            'firstname': req.body.firstname,
            'lastname': req.body.lastname,
            'location': req.body.location,
            'groupsize': req.body.groupsize,
  
    
        }

        const newPostAdventuresModels = new PostAdventuresModels(formdata);
        newPostAdventuresModels.save();
        res.send('Post Created!');
    }
);

router.get(
    '/view',
    (req, res)=>{

        PostAdventuresModels
        .find()
        .then((results)=>{
            res.json(
                {
                    msg:'Available adventures:', 
                    results: results
                }
            );
        })   
    }
);



module.exports = router;