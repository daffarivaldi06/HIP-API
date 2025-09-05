const express = require('express');
const router = express.Router();
const patientHandler = require('../../handlers/v2/patient');
const { protect } = require('../../middlewares/auth');
const { authorizeRoles } = require('../../middlewares/rbac');

router.get('/', protect, authorizeRoles('admin', 'doctor', 'nurse'), patientHandler.getPatients);
router.get('/:id', protect, authorizeRoles('admin', 'doctor', 'nurse'), patientHandler.getPatientById);
router.post('/', protect, authorizeRoles('admin', 'doctor'), patientHandler.createPatient);
router.put('/:id', protect, authorizeRoles('admin', 'doctor'), patientHandler.updatePatient);
router.delete('/:id', protect, authorizeRoles('admin'), patientHandler.deletePatient);

module.exports = router;