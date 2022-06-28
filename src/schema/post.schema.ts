import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
  title:  String, 
  content: String,
  tags: [String],
  dateCreated: { type: Date, default: Date.now },
});


export default postSchema;