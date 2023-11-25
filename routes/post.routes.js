import  express  from "express";
import { deleteModel, editModel, getModel, postModel } from "../controllers/post.controller.js";
//import {validateUpdate} from "../validation/userValidation.js";
const route = express.Router()


route.get("/",getModel )
route.post("/", postModel)
route.put("/:id",editModel)
route.delete("/:id",deleteModel)

export default route;