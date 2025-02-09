const Contact_Database = require("../models/contact.model");

const contactForm = async (req, res) => {
  console.log(req.body)
  try {
    const response = req.body;
    console.log(response);
    await Contact_Database.create(response);
    return res.status(200).json({success: true,  message: "message send successfully" });
  } catch (error) {
    return res.status(500).json({success: false,  message: "message not delivered" });
  }
};

module.exports = contactForm;
