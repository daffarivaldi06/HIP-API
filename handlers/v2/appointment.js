const Appointment = require('../../models/v2/appointment');

const getAppointments = async (req, res) => {
  const appointments = await Appointment.find({});
  res.json(appointments);
};

const getAppointmentById = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  res.json(appointment);
};

const createAppointment = async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.status(201).json(appointment);
};

const updateAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  res.json(appointment);
};

const deleteAppointment = async (req, res) => {
  const appointment = await Appointment.findByIdAndDelete(req.params.id);
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  res.json({ message: 'Appointment deleted' });
};

module.exports = {
  getAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment
};