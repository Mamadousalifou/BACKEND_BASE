import  express  from "express";
import postRoute from "./routes/post.routes.js"
import cors from "cors"


const port = 3000
//concetion a la Data base


const app = express();


//Middleware qui permet de traiter les requete
app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(cors());

app.use("/get",postRoute)

app.listen(port,()=>{
    console.log("le port est : " + port)
})