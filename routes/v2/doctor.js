const express = require('express');
const router = express.Router();
const doctorHandler = require('../../handlers/v2/doctor');
const { protect } = require('../../middlewares/auth');
const { authorizeRoles } = require('../../middlewares/rbac');

router.get('/', protect, authorizeRoles('admin', 'doctor', 'nurse'), doctorHandler.getDoctors);
router.get('/:id', protect, authorizeRoles('admin', 'doctor', 'nurse'), doctorHandler.getDoctorById);
router.post('/', protect, authorizeRoles('admin', 'doctor'), doctorHandler.createDoctor);
router.put('/:id', protect, authorizeRoles('admin', 'doctor'), doctorHandler.updateDoctor);
router.delete('/:id', protect, authorizeRoles('admin'), doctorHandler.deleteDoctor);

module.exports = router;