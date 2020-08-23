const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// With the schema we are creating a new collection
mongoose.model('users', userSchema);
