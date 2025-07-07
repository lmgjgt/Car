require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');

const app = express();
app.use(cors());
app.use(express.json());

// روابط الـ API
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);

// الاتصال بقاعدة البيانات والتشغيل
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => console.error('❌ MongoDB Error:', err));
