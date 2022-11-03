const mongoose = require("mongoose");

const AmountSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    totalAmount: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Amount", AmountSchema);