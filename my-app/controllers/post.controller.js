const prisma = require('../config/prisma')

exports.readPosts = async(req,res) =>{
    console.log('Pidiendo datos')
    try {
        const posts = await prisma.post.findMany();        
        res.send(posts)
    } catch (error) {
    }
}

exports.createPost=async(req,res)=>{
    const {title ,content } = req.body;
    const post = await prisma.post.create({
        data :{
            title,
            content
        }
    })
    res.send(post)
}

exports.readPost =  async(req,res)=>{
    const {id} = req.params
    const post  = await prisma.post.findFirst( {
        where : {id  : Number(id)}
    })
    res.send(post)
}

exports.deletePost =  async(req,res) =>{
    console.log("Eliminando")
    const {id}  = req.params
    const post = await prisma.post.delete({
        where : {
            id : Number(id)
        }
    })
    res.send(post)
}