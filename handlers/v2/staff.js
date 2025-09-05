const Staff = require('../../models/v2/staff');

const getStaffs = async (req, res) => {
  const staffs = await Staff.find({});
  res.json(staffs);
};

const getStaffById = async (req, res) => {
  const staff = await Staff.findById(req.params.id);
  if (!staff) return res.status(404).json({ message: 'Staff not found' });
  res.json(staff);
};

const createStaff = async (req, res) => {
  const staff = new Staff(req.body);
  await staff.save();
  res.status(201).json(staff);
};

const updateStaff = async (req, res) => {
  const staff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!staff) return res.status(404).json({ message: 'Staff not found' });
  res.json(staff);
};

const deleteStaff = async (req, res) => {
  const staff = await Staff.findByIdAndDelete(req.params.id);
  if (!staff) return res.status(404).json({ message: 'Staff not found' });
  res.json({ message: 'Staff deleted' });
};

module.exports = {
  getStaffs,
  getStaffById,
  createStaff,
  updateStaff,
  deleteStaff
};