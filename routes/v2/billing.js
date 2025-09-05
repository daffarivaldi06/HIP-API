const express = require('express');
const router = express.Router();
const billingHandler = require('../../handlers/v2/billing');
const { protect } = require('../../middlewares/auth');
const { authorizeRoles } = require('../../middlewares/rbac');

router.get('/', protect, authorizeRoles('admin', 'doctor', 'nurse'), billingHandler.getBillings);
router.get('/:id', protect, authorizeRoles('admin', 'doctor', 'nurse'), billingHandler.getBillingById);
router.post('/', protect, authorizeRoles('admin', 'doctor'), billingHandler.createBilling);
router.put('/:id', protect, authorizeRoles('admin', 'doctor'), billingHandler.updateBilling);
router.delete('/:id', protect, authorizeRoles('admin'), billingHandler.deleteBilling);

module.exports = router;