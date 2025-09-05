const Auth = require('../../models/v2/auth');

const getAuths = async (req, res) => {
  const auths = await Auth.find({});
  res.json(auths);
};

const getAuthById = async (req, res) => {
  const auth = await Auth.findById(req.params.id);
  if (!auth) return res.status(404).json({ message: 'Auth not found' });
  res.json(auth);
};

const createAuth = async (req, res) => {
  const auth = new Auth(req.body);
  await auth.save();
  res.status(201).json(auth);
};

const updateAuth = async (req, res) => {
  const auth = await Auth.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!auth) return res.status(404).json({ message: 'Auth not found' });
  res.json(auth);
};

const deleteAuth = async (req, res) => {
  const auth = await Auth.findByIdAndDelete(req.params.id);
  if (!auth) return res.status(404).json({ message: 'Auth not found' });
  res.json({ message: 'Auth deleted' });
};

module.exports = {
  getAuths,
  getAuthById,
  createAuth,
  updateAuth,
  deleteAuth
};