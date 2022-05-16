const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Patients_schema = new Schema(
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
      past_diseases: [{ type: String }],
      active_diseases: [{ type: String }],
      active_medicines: [{ type: String }],
      followup_date: [{ type: String }],
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    Reset_pass_token: {
      type: String,
    },

    Doctor: [
      {
        Name: { type: String },
        Doctor_ID: { 
          type: mongoose.Schema.Types.ObjectId,
          ref: "Doctors",
        },
        Speciality: { type: String },
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
  }
);

const Patients = mongoose.model("Patients", Patients_schema);

module.exports = Patients;
