const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  invoiceNumber: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'insurance_claimed'], default: 'pending' },
  insuranceClaimDetails: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Billing', billingSchema);