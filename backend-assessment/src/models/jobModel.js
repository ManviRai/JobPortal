const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  endDate: { type: Date, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const jobModule = mongoose.model('Job', jobSchema);
module.exports = { jobModule };