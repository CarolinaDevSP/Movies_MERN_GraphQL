import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const MONGODB_URI = process.env.DB_URI
//const MONGODB_URI = `mongodb+srv://myUser:passs@cluster0.x5owbse.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGODB_URI,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true
})
.then(()=> {
    console.log('conectado a mongoose');
}).catch(error => {
    console.error('error al concetar a MONGODB', error.message)
})

