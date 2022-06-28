import mongoose from 'mongoose';
import postSchema from './post.schema';
const { Schema } = mongoose;

const userSchema = new Schema({
  username:  String, 
  email: String,
  password:   String,
  recoveryEmail: String,
  dateCreated: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
  posts: [postSchema]
});


export default userSchema;