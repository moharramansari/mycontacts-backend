//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"})
};

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(200).json({message : "Get all contacts"})
};


module.exports = getContact, createContact