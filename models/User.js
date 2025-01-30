import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  specialization: { type: String, required: true },
  yearOfStudy: { type: Number, required: true },
  cluster: { type: String },
});

export default mongoose.models.User || mongoose.model('User', userSchema);