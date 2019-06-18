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

//@route POST api/items 
//@desc Add an Items
//@access public
router.post('/', (req, res) => {
    const newEvent = new Event({
        name: req.body.name,
        venue: req.body.venue,
        price: req.body.price
    });
    newEvent.save()
        .then(event => res.json(event));
});


//@route DELETE api/items 
//@desc Delete an Item
//@access public
router.delete('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => event.remove()
        .then(() => res.json({sucess: true})))
        .catch(err => res.status(404).json({sucess: false}));
});

module.exports = router;