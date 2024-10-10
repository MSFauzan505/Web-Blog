import User from "../models/user.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, 'all fields are required'))
  }

  const hashedPassword = await bcrypt.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
  res.json("Signup Berhasil");
  } catch (error) {
    next(error);
  }

  
};
