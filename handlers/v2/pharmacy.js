const Pharmacy = require('../../models/v2/billing');

const getPharmacys = async (req, res) => {
  const pharmacys = await Pharmacy.find({});
  res.json(pharmacys);
};

const getPharmacyById = async (req, res) => {
  const pharmacy = await Pharmacy.findById(req.params.id);
  if (!pharmacy) return res.status(404).json({ message: 'Pharmacy not found' });
  res.json(pharmacy);
};

const createPharmacy = async (req, res) => {
  const pharmacy = new Pharmacy(req.body);
  await pharmacy.save();
  res.status(201).json(pharmacy);
};

const updatePharmacy = async (req, res) => {
  const pharmacy = await Pharmacy.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!pharmacy) return res.status(404).json({ message: 'Pharmacy not found' });
  res.json(pharmacy);
};

const deletePharmacy = async (req, res) => {
  const pharmacy = await Pharmacy.findByIdAndDelete(req.params.id);
  if (!pharmacy) return res.status(404).json({ message: 'Pharmacy not found' });
  res.json({ message: 'Pharmacy deleted' });
};

module.exports = {
  getPharmacys,
  getPharmacyById,
  createPharmacy,
  updatePharmacy,
  deletePharmacy
};