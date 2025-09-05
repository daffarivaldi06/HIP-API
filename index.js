require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { connectDB } = require('./connection/mongo');

const patientRoutes = require('./routes/v2/patient');
const doctorRoutes = require('./routes/v2/doctor');
const staffRoutes = require('./routes/v2/staff');
const appointmentRoutes = require('./routes/v2/appointment');
const billingRoutes = require('./routes/v2/billing');
const pharmacyRoutes = require('./routes/v2/pharmacy');
const authRoutes = require('./routes/v2/auth');

const app = express();

connectDB();

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v2/auth', authRoutes);
app.use('/api/v2/patients', patientRoutes);
app.use('/api/v2/doctors', doctorRoutes);
app.use('/api/v2/staff', staffRoutes);
app.use('/api/v2/appointments', appointmentRoutes);
app.use('/api/v2/billing', billingRoutes);
app.use('/api/v2/pharmacy', pharmacyRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Hospital Management API - v2');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));