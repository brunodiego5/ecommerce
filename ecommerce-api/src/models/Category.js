const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    thumbnail: String
}, {
    toJSON: {
      virtuals: true,
    },
});

CategorySchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3001/files/${this.thumbnail}`
  })

mongoose.model('Category', CategorySchema);