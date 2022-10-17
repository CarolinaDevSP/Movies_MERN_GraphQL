import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

//se relaciona a las type definition 
const schema = new mongoose.Schema ({
    image:{
        type: String,
        required: true,
    },
    title: {
        type: String,
        unique: true,
        required:true
    },
    rating: String,
    description:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
    },
    like: String,
    category: String,
    client: String,
    idCategory:String,
    nameCategory:String

})
schema.plugin(uniqueValidator)
export default mongoose.model('Movie', schema)
