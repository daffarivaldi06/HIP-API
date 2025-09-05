const express = require('express');
const router = express.Router();
const appointmentHandler = require('../../handlers/v2/appointment');
const { protect } = require('../../middlewares/auth');
const { authorizeRoles } = require('../../middlewares/rbac');

router.get('/', protect, authorizeRoles('admin', 'doctor', 'nurse'), appointmentHandler.getAppointments);
router.get('/:id', protect, authorizeRoles('admin', 'doctor', 'nurse'), appointmentHandler.getAppointmentById);
router.post('/', protect, authorizeRoles('admin', 'doctor'), appointmentHandler.createAppointment);
router.put('/:id', protect, authorizeRoles('admin', 'doctor'), appointmentHandler.updateAppointment);
router.delete('/:id', protect, authorizeRoles('admin'), appointmentHandler.deleteAppointment);

module.exports = router;