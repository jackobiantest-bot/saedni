const { model, Schema, default: mongoose } = require("mongoose");

const authoritySchema = new Schema({
    type: {
        type: Schema.Types.ObjectId,
        ref: "EmergencyType"
    },
    name: {
        type: String,
        required: true
    },
    phoneNumbers: [String],
    whatsappNumber: String,
    region: {
        type: String
    },
    address: {
        type: String
    }
}, {timestamps: true});

module.exports = model("Authority", authoritySchema);