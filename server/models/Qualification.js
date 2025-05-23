// server/models/Qualification.js
const mongoose = require('mongoose');

const QualificationSchema = new mongoose.Schema({
    specialties: [String], // changed from String to [String]
    boardCertifications: [String],
    hospitalAffiliations: [String],
    educationAndTraining: [String],
}, { timestamps: true });

module.exports = mongoose.model('Qualification', QualificationSchema);
