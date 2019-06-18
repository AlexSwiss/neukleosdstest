const express = require('express');
const router = express.Router();

//Item Model
const Event = require('../../models/Event');

//@route Get api/items 
//@desc Get all Items
//@access public
router.get('/', (req, res) => {
    Event.find()
        .sort({date: -1})
        .then(events => res.json(events));
});

module.exports = router;