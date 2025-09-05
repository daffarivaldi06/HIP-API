const express = require('express');
const router = express.Router();
const pharmacyHandler = require('../../handlers/v2/pharmacy');
const { protect } = require('../../middlewares/auth');
const { authorizeRoles } = require('../../middlewares/rbac');

router.get('/', protect, authorizeRoles('admin', 'doctor', 'nurse'), pharmacyHandler.getPharmacys);
router.get('/:id', protect, authorizeRoles('admin', 'doctor', 'nurse'), pharmacyHandler.getPharmacyById);
router.post('/', protect, authorizeRoles('admin', 'doctor'), pharmacyHandler.createPharmacy);
router.put('/:id', protect, authorizeRoles('admin', 'doctor'), pharmacyHandler.updatePharmacy);
router.delete('/:id', protect, authorizeRoles('admin'), pharmacyHandler.deletePharmacy);

module.exports = router;