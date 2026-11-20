const { model, Schema } = require("mongoose");

const emergencyTpeSchema = new Schema({
    type: {
        type: String,
        enum: [ "HEALTH", "FIRE", "SECURITY", "OTHER" ],
        required: [true, "type is required"],
        unique: true
    },
}, {timestamps: true});

module.exports = model("EmergencyType", emergencyTpeSchema);