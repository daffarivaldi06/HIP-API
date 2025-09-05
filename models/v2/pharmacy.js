const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema({
  prescriptionNumber: { type: String, required: true, unique: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  medicines: [{
    name: String,
    dosage: String,
    quantity: Number
  }],
  dispensedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },
  dispensedAt: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pharmacy', pharmacySchema);