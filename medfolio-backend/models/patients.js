const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Patients_schema = new Schema(
  {
    email: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
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
    },
    mobile: {
      type: String,
    },
    Reset_pass_token: {
      type: String,
    },
    auth_pass_token: {
        type: String,
    },
    Doctor: [
      {
        Name: { type: String },
        Speciality: { type: String },
        Prescriptions: [
          {
            Doctor_ID: { type: String },
            Prescription_ID: { type: String },
            Date: { type: Date },
            Daigonisis: { type: String },
            Tablets: { type: Array },
            Syrups: { type: Array },
            followup_date: [{ type: String }],
          },
        ],
      },
    ],
    isVerified: {
        type: Boolean,
        default: false,
      },
    isDetail: {
        type: Boolean,
        default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", Patients_schema);

module.exports = Patients;
