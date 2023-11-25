import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();



let isConnected = false;
//const URI = "mongodb+srv://mamadousalifou01:xABnb4Egi7cq4J1c@cluster0.ya8roj4.mongodb.net/?retryWrites=true&w=majority";

export const connectToDatabase = async () => {

    mongoose.set('strictQuery',false);
    
    if(isConnected){
          
        console.log('mongo is already connected');
        return;
     }

try{
   

     await mongoose.connect(process.env.MONGO_URI,{
        dbName:"Mscademy"
     })
     isConnected = true;
     console.log('mongo is Connected')


    }catch(error){

      console.log(error);

  }

}



export const disconnectFromDatabase = async () => {

    

    await mongoose.connections[0].close();
    console.log('mongo is disconnected');
    return;
       
   

}