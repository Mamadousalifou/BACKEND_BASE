import { connectToDatabase } from "../config/db.js";
import { Post } from "../models/post.model.js";


///////////////////////////////  GET  ////////////////////////////////////////

export const getModel = async (req, res) => {
  await connectToDatabase();
  const gets = await Post.find();
  res.status(200).json(gets);
};


///////////////////////////////  POST ////////////////////////////////////////

export const postModel = async (req, res) => {
  await connectToDatabase();
  if (!req.body.message) {
    res.status(400).json({
      message: "Merci d'ajouter un message",
    });
  }

  const post = await Post.create({
    message: req.body.message,
    author: req.body.author,
  });

  // await disconnectFromDatabase();
  res.status(201).json(post);
};

//req.params.id.match(/^[0-9a-fA-F]{24}$/)



///////////////////////////////  EDIT  ////////////////////////////////////////

export const editModel = async (req, res) => {

try{
    await connectToDatabase();
    const edit = await Post.findById(req.params.id);
    const updatePost = await Post.findByIdAndUpdate(edit, req.body, {
      new: true,
    })
  return res.status(200).json(updatePost)
  }
  catch(error){
    console.log(error)
    if(error.name === "CastError"){

        return res.status(400).json({
           message:"Utilisateur introuvable"
        })
    }
  }
 
}


///////////////////////////////  DELETE  ////////////////////////////////////////

export const deleteModel = async (req, res) => {
  try {
    
    await connectToDatabase();
  const deleted = await Post.findById(req.params.id);
  await deleted.deleteOne().exec();

  return res.status(200).json({
     message:'utilisateur supprimé',
     user:deleted
  })

  

  
  




}catch(error){
  if(error.name === "CastError"){

    return res.status(400).json({
       message:"Utilisateur introuvable"
    })
}
}};
