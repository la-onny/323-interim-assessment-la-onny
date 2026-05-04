import Crypto from '../models/Crypto.js';

// @desc    Get all tradable cryptocurrencies
// @route   GET /crypto
// @access  Public
export const getCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({});
    res.status(200).json(cryptos);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching cryptos' });
  }
};

// @desc    Get top gainers
// @route   GET /crypto/gainers
// @access  Public
export const getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({}).sort({ change24h: -1 });
    res.status(200).json(gainers);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching gainers' });
  }
};

// @desc    Get new listings
// @route   GET /crypto/new
// @access  Public
export const getNewCryptos = async (req, res) => {
  try {
    const newCryptos = await Crypto.find({}).sort({ createdAt: -1 });
    res.status(200).json(newCryptos);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching new cryptos' });
  }
};

// @desc    Add new cryptocurrency
// @route   POST /crypto
// @access  Public (should ideally be admin protected)
export const addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h } = req.body;

    if (!name || !symbol || price === undefined || !image || change24h === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const crypto = new Crypto({
      name,
      symbol,
      price,
      image,
      change24h
    });

    const createdCrypto = await crypto.save();
    res.status(201).json(createdCrypto);
  } catch (error) {
    res.status(500).json({ message: 'Server error while adding crypto' });
  }
};
