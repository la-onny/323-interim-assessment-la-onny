import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
    uppercase: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL of the image
    required: true,
  },
  change24h: {
    type: Number, // Percentage change, e.g., +2.5 or -1.2
    required: true,
  },
}, { timestamps: true }); // createdAt will be used for 'new listings'

export default mongoose.model('Crypto', cryptoSchema);
