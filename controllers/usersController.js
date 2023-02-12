const User = require("../models/User");

// Get All Users

const user_get_all = async (req, res) => {
  try {
    const usersList = await User.find();
    res.status(200).json(usersList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get User By ID

const user_get_id = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (user == null) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Create New User

const user_post = async (req, res) => {
  const user = new User({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  try {
    const createUser = await user.save();
    res.status(201).json(createUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update User Information

const user_patch = async (req, res) => {
  try {
    const updateUser = await User.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          name: req.body.name,
          lastName: req.body.lastName,
          email: req.body.email,
        },
      }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete User

const user_delete = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    } else {
      user.deleteOne();
      res.status(202).json({ message: "User successfully deleted!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  user_get_all,
  user_get_id,
  user_post,
  user_patch,
  user_delete,
};
