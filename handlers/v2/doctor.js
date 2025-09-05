const Doctor = require('../../models/v2/doctor');

const getDoctors = async (req, res) => {
  const doctors = await Doctor.find({});
  res.json(doctors);
};

const getDoctorById = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
};

const createDoctor = async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.status(201).json(doctor);
};

const updateDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
};

const deleteDoctor = async (req, res) => {
  const doctor = await Doctor.findByIdAndDelete(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json({ message: 'Doctor deleted' });
};

module.exports = {
  getDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor
};