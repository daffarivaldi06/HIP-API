const express = require('express');
const router = express.Router();
const staffHandler = require('../../handlers/v2/staff');
const { protect } = require('../../middlewares/auth');
const { authorizeRoles } = require('../../middlewares/rbac');

router.get('/', protect, authorizeRoles('admin', 'doctor', 'nurse'), staffHandler.getStaffs);
router.get('/:id', protect, authorizeRoles('admin', 'doctor', 'nurse'), staffHandler.getStaffById);
router.post('/', protect, authorizeRoles('admin', 'doctor'), staffHandler.createStaff);
router.put('/:id', protect, authorizeRoles('admin', 'doctor'), staffHandler.updateStaff);
router.delete('/:id', protect, authorizeRoles('admin'), staffHandler.deleteStaff);

module.exports = router;