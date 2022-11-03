const Amount = require("../models/Amount");

module.exports = {
    createAmount: async (req, res) => {
        try {

            await Amount.create({
                amount: req.body.amount,
                post: req.params.id,
                user: req.user.id
            });
            console.log("Amount has been added!");
            res.redirect("/post/" + req.params.id);
        } catch (err) {
            console.log(err);
        }
    }
};


