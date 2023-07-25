const express = require('express');
const Product = require('../model/product');
const Video = require('../model/video');
const Comment = require('../model/comment');

const router = express.Router();


router.post('/post/video', (req,res) => {
    const video = new Video({
        title : req.body.title,
        creator : req.body.creator,
        //view : req.body.view,
        thumbnail : req.body.thumbnail,
        video : req.body.video
    })
    try{
        const saveVideo = video.save();
        res.status(200).json(saveVideo);
    }catch(error){
        res.status(400).json(
            {message: error.message}
        )
    }   
})

router.post('/post/product', (req,res) => {
    const product = new Product({
        name : req.body.name,
        link : req.body.link,
        image : req.body.image,
        price : req.body.price
    
    })
    try{
        const saveProduct = product.save();
        res.status(200).json(saveProduct);
    }catch(error){
        res.status(400).json(
            {message: error.message}
        )
    }   
})

router.post('/post/comment', (req,res) => {
    const comment = new Comment({
        username : req.body.username,
        comment : req.body.comment
    
    })
    try{
        const saveComment = comment.save();
        res.status(200).json(saveComment);
    }catch(error){
        res.status(400).json(
            {message: error.message}
        )
    }   
})

router.get('/getAll/video', async (req,res) => {
    try{
        const video = await Video.find();
        res.json(video)
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

router.get('/getAll/comment', async (req,res) => {
    try{
        const comment = await Comment.find();
        res.json(comment)
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})

router.get('/getAll/product', async (req,res) => {
    try{
        const product = await Product.find();
        res.json(product)
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})


router.get('/get/product/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        res.json(product)
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})


router.get('/get/video/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const video = await Video.findById(id);
        res.json(video)
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})


router.get('/get/comment/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const comment = await Comment.findById(id);
        res.json(comment)
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})




router.patch('/update/:id', async (req,sec) => {
    try{
        const id = req.params.id;
        const updateSongData = req.body;
        const options = { new: true}

        const result = await song.fingByIdAndUpdate(
            id, updateSongData, options
    )
            res.send(result)
    }
    catch(error){
        res.status(400).json( {message : error.message})
    }
})

router.delete('/delete/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const deledSongData = await song.findByIdAndDelete(id)
        res.send(`Movie with ${deledSongData.Title} has been deleted..`)
    }catch{
        res.status(400).json({ message: error.message})
    }
})

router.get('/', (req,res) =>{
    res.send("Helloo");
})



module.exports = router;