const Billing = require('../../models/v2/billing');

const getBillings = async (req, res) => {
  const billings = await Billing.find({});
  res.json(billings);
};

const getBillingById = async (req, res) => {
  const billing = await Billing.findById(req.params.id);
  if (!billing) return res.status(404).json({ message: 'Billing not found' });
  res.json(billing);
};

const createBilling = async (req, res) => {
  const billing = new Billing(req.body);
  await billing.save();
  res.status(201).json(billing);
};

const updateBilling = async (req, res) => {
  const billing = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!billing) return res.status(404).json({ message: 'Billing not found' });
  res.json(billing);
};

const deleteBilling = async (req, res) => {
  const billing = await Billing.findByIdAndDelete(req.params.id);
  if (!billing) return res.status(404).json({ message: 'Billing not found' });
  res.json({ message: 'Billing deleted' });
};

module.exports = {
  getBillings,
  getBillingById,
  createBilling,
  updateBilling,
  deleteBilling
};