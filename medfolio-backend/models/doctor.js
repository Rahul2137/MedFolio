const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
        },
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
        },
        Address: {
          type: String,
        },
        age: {
          type: Number,
          required: true,
        },
        gender: {
          type: String,
        },
        Details: {
          degree: String,
          Speciality: String,
          since: String,
          hospital: String,
        },
        mobile: {
          type: String,
        },
        email: {
          type: String,
          required: true,
        },
        Patients: [
          {
            Name: { type: String },
            Patient_ID: { 
              type: mongoose.Schema.Types.ObjectId,
              ref: "Patients",
            },
            Prescriptions: [
              {
                Prescription_ID: { type: String },
                Date: { type: Date },
                Daigonisis: { type: String },
                Tablets: { type: Array },
                Syrups: { type: Array },
              },
            ],
          },
        ],
      },
      {
        timestamps: true,
      },
)

const Doctors = mongoose.model("Doctors", DoctorSchema);

module.exports = Doctors;
