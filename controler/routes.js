const express = require('express');
const Product = require('../model/product');
const Video = require('../model/video');
const Comment = require('../model/comment');

const router = express.Router();


//VIDEO API

router.post('/post/video', (req,res) => {
    const video = new Video({
        title : req.body.title,
        creator : req.body.creator,
        thumbnail : req.body.thumbnail,
        video : req.body.video,
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

router.get('/get/video/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const video = await Video.find();
        res.json(video[parseInt(id.substring(1))])
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})


router.patch('/update/video/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const video = await Video.find();
        const objectId = video[parseInt(id.substring(1))].id

        const updateData = req.body;
        const options = { new: true}

        const result = await Video.findByIdAndUpdate(
            objectId, updateData, options
    )
            res.send(result)
    }
    catch(error){
        res.status(400).json( {message : error.message})
    }
})

router.delete('/delete/video/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const video = await Video.find();
        const objectId = video[parseInt(id.substring(1))].id

        const deledData = await Video.findByIdAndDelete(objectId)
        res.send(`Video with title: ${deledData.title} has been deleted..`)
    }catch{
        res.status(400).json({ message: error.message})
    }
})



//PRODUCT API

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


router.get('/getAll/product/:videoIndex', async (req,res) => {
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
        const product = await Product.find();
        res.json(product[parseInt(id.substring(1))])
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})


router.patch('/update/product/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const product= await Product.find();
        const objectId = product[parseInt(id.substring(1))].id

        const updateData = req.body;
        const options = { new: true}

        const result = await Product.findByIdAndUpdate(
            objectId, updateData, options
    )
            res.send(result)
    }
    catch(error){
        res.status(400).json( {message : error.message})
    }
})

router.delete('/delete/product/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const product = await Product.find();
        const objectId = product[parseInt(id.substring(1))].id

        const deledData = await Product.findByIdAndDelete(objectId)
        res.send(`Product : ${deledData.name} has been deleted..`)
    }catch{
        res.status(400).json({ message: error.message})
    }
})

//COMMENT API


router.post('/post/comment/:videoIndex', async (req,res) => {


    try{

        const id = req.params.videoIndex;
        const video = await Video.find();
        const objectId = video[parseInt(id.substring(1))].id
    
        const comment = new Comment({

            username : req.body.username,
            comment : req.body.comment,
            videoId : objectId
        })

        const saveComment = comment.save();
        res.status(200).json(saveComment);
    }catch(error){
        res.status(400).json(
            {message: error.message}
        )
    }   
})



router.get('/getAll/comment/:videoIndex', async (req,res) => {
    try{

        const id = req.params.videoIndex;
        const video = await Video.find();
        const objectId = video[parseInt(id.substring(1))].id

        const comment = await Comment.find({'videoId' : objectId});
        res.json(comment)
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


router.get('/get/comment/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const comment = await Comment.find();
        res.json(comment[parseInt(id.substring(1))])
    }
    catch(error){
        res.status(500).json({
            message : error.message
        })
    }
})


router.patch('/update/comment/:id', async (req,res) => {
    try{
        const id = req.params.id;
        const comment = await Comment.find();
        const objectId = comment[parseInt(id.substring(1))].id

        const updateData = req.body;
        const options = { new: true}

        const result = await Comment.findByIdAndUpdate(
            objectId, updateData, options
    )
            res.send(result)
    }
    catch(error){
        res.status(400).json( {message : error.message})
    }
})

router.delete('/delete/comment/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const comment = await Comment.find();
        const objectId = comment[parseInt(id.substring(1))].id

        const deledData = await Comment.findByIdAndDelete(objectId)
        res.send(`comment from ${deledData.username} has been deleted..`)
    }catch{
        res.status(400).json({ message: error.message})
    }
})


router.get('/', (req,res) =>{
    res.send("Helloo");
})



module.exports = router;