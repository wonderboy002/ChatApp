import User from "../models/userMode.js";

export async function Signup(req, res) {
  try {
    const {
      fullname,
      username,
      password,
      confirmPassword,
      gender,
      profilePic,
    } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json("Passwords Don't match");
    }

    if (user){
      return res.status(400).json('User with this Username already Exists')
    }

    const user = await User.findOne({ username });
  } catch (e) {}
}

export const Login = (req, res) => {
  res.send("<h1>This is for Login</h1>");
};

export const Signout = (req, res) => {
  res.send("<h1>This is for Signout</h1>");
};
